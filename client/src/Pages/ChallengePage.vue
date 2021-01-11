<template>
  <div>
    <Navbar/>
    <div class="container" style="margin-top: 40px">
      <h3 class="float-left font-weight-bold text-gray-800 mb-1">Challenges List</h3>
      <div v-if="error" class="alert alert-danger">{{error}}</div>
      <br>
      <div v-for="c in categories" v-bind:key="c.tag">
        <br>
        <h4 class="text-gray-600 mb-1">{{c.name}}</h4>
        <div class="accordion py-3" role="tablist" v-if="challenges[c.tag]">
          <b-card no-body class="mb-1" v-for="e in challenges[c.tag]" v-bind:key="e.tag">
            <b-button  block v-b-toggle v-bind:href="'#' + e.tag">
              <h5 class="float-left mb-0 py-2">{{e.name}}</h5>
              <router-link :to="{name: 'challenge', params: {tag: e.tag}}" class="float-right pt-2 pl-2"><b-badge pill variant="warning">View</b-badge></router-link>
              <span class="float-right pt-2">[{{e.tag}}]</span>
            </b-button>
            <b-collapse :id="e.tag" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <div v-for="ec in e.instanceList" v-bind:key="ec.image">
                  <div v-if="ec.childrenList">
                    <div class="mb-3 children-list" v-for="ecc in ec.childrenList" v-bind:key="ecc.tag">
                      <span class="float-right"><strong>Points: </strong>{{ecc.points}}</span>
                      <h5 class="text-haaukins"><strong>{{ecc.name}}</strong></h5>
                      <span>[<em>{{ecc.teamDescription}}</em>]</span>
                      <br>
                      <div class="mt-2">
                        <strong class="mt-2">Description: </strong>
                        <span>{{ecc.organizerDescription}}</span><br>
                        <strong class="mt-2">Pre-requisites: </strong>
                        <ul>
                          <li v-for="pr in ecc.prerequisiteList" v-bind:key="pr">
                            {{ pr }}
                          </li>
                        </ul>
                        <strong class="mt-2">Outcomes: </strong>
                        <ul class="pb-0">
                          <li v-for="oc in ecc.outcomeList" v-bind:key="oc">
                            {{ oc }}
                          </li>
                        </ul>
                      </div>
                      <hr>
                    </div>
                  </div>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Empty } from "exercise_pb"
import { ExerciseClient, token } from "../App";

export default {
  name: "ChallengesPage",
  components: {Footer, Navbar},
  data: function () {
    return {
      challenges: {},
      categories: [],
      error: null,
    }
  },
  created: function() {
    this.getCategories()
  },
  methods: {
    getCategories: function () {
      let getRequest = new Empty();
      let that = this
      ExerciseClient.getCategories(getRequest, {Token: token}, (err, response) => {
        if (err != null) {
          this.error = err
        }else{
          let r = response.toObject().categoriesList
          r.forEach(categ => {
            this.$set(that.challenges, categ.tag, [])
            that.categories.push(categ)
          })
          this.getChallenges()
        }
      })
    },
    getChallenges: function () {
      let getRequest = new Empty();
      ExerciseClient.getExercises(getRequest, {Token: token}, (err, response) => {
        if (err != null) {
          this.error = err
        }else{
          let that = this;
          response.toObject().exercisesList.forEach(ex => {
            that.challenges[ex.category].push(ex)
          })
        }
      })
    },
  }
}
</script>

<style scoped>
h3 {
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
}
.children-list:last-child hr {
  display: none;
}
</style>