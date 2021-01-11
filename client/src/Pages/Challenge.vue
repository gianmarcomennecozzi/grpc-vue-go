<template>
  <div>
    <Navbar/>
    <div class="container" style="margin-top: 40px">
      <h3 class="float-left font-weight-bold text-gray-800 mb-1">Challenge [{{this.$route.params.tag}}]</h3>
      <router-link :to="{name: 'challenges'}" class="btn btn-sm btn-secondary text-white float-right">Back</router-link>
      <button type="button" class="btn btn-sm btn-haaukins float-right mr-2" disabled>Edit</button>
      <div class="clearfix"></div>
      <hr>
      <div v-if="error" class="alert alert-danger alert-dismissible">{{error}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div v-if="success" class="alert alert-success alert-dismissible">{{success}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div v-if="challenge" class="border p-3">
        <h4 class="float-left text-haaukins"><strong>[{{challenge.tag}}] {{challenge.name}}</strong></h4>
        <span class="float-right"><strong>Category: </strong>{{challenge.category}}</span>
        <b-badge pill variant="secondary" class="ml-2">{{ getStatus(challenge.status) }}</b-badge><br><br>
        <p v-if="challenge.description" class="float-left">{{challenge.description}}</p>
        <div v-for="ch in challenge.instanceList" v-bind:key="ch.image" class="border p-3 mt-3">
          <p><strong>Image: </strong>{{ch.image}}</p>
          <p><strong>Env: </strong>{{ch.envsList}}</p>
          <p><strong>Records: </strong>{{ch.recordsList}}</p><hr>
          <div v-for="c in ch.childrenList" v-bind:key="c.tag">
            <h5 class="float-left text-haaukins"><strong>[{{c.tag}}] {{c.name}}</strong></h5>
            <span class="float-right"><strong>Points: </strong>{{c.points}}</span>
            <div class="clearfix"></div>
            <span><em>[{{c.teamDescription}}]</em></span>
            <p class="my-2"><strong>EnvFlag: </strong>{{c.envFlag}} <strong v-if="c.pb_static">Static flag: </strong>{{c.pb_static}}</p>
            <p class="mb-2">{{c.organizerDescription}}</p>
            <strong class="mt-2">Pre-requisites: </strong>
            <ul>
              <li v-for="pr in c.prerequisiteList" v-bind:key="pr">
                {{ pr }}
              </li>
            </ul>
            <strong class="mt-2">Outcomes: </strong>
            <ul class="pb-0">
              <li v-for="oc in c.outcomeList" v-bind:key="oc">
                {{ oc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExerciseClient, token } from "../App";
import { GetExerciseByTagsRequest } from "exercise_pb"

export default {
  name: "Teams",
  components: {Footer, Navbar},
  data: function () {
    return {
      error: null,
      success: null,
      challenge: null,
    }
  },
  created() {
    this.getChallenge();
  },
  methods: {
    getChallenge () {
      let getRequest = new GetExerciseByTagsRequest();
      getRequest.addTag(this.$route.params.tag);
      ExerciseClient.getExerciseByTags(getRequest, {Token: token}, (err, response) => {
        if (err == null) {
          this.challenge = response.toObject().exercisesList[0];
        }else{
          this.error = err['metadata']['grpc-message'];
        }
      });
    },
    getStatus(status) {
      switch(parseInt(status)) {
        case 0:
          return "error"
        case 1:
          return "available"
        case 2:
          return "test"
        default:
          return "development"
      }
    }
  }
}
</script>