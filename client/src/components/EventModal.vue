<template>
  <b-modal ref="modal" id="create-event-modal" size="lg" centered hide-footer>
    <template v-slot:modal-title>Create a new Event</template>
    <form ref="form" @submit.stop.prevent="createEvent()">
      <b-carousel ref="createEventCarousel" :interval=0>
        <b-carousel-slide class="carousel-height">
          <template slot="img" class="h-100 text-center">
            <div class="row h-50">
              <div class="col-6 carousel-height d-table">
                <div class="card card-body d-table-cell align-middle text-center border-aau-color selection-phase-div" v-on:click="selectedVPNOption(true)">
                  <h3 class="font-weight-bold">VPN ONLY</h3>
                  <p>Allows the users to connect the Lab using the VPN. Kali Linux machine on the browser will be not available.</p>
                </div>
              </div>
              <div class="col-6 carousel-height d-table">
                <div class="card card-body d-table-cell align-middle text-center border-aau-color bg-light-gray selection-phase-div" v-on:click="selectedVPNOption(false)">
                  <h3 class="font-weight-bold">NO VPN</h3>
                  <p>Allows the user to connect Kali Linux machine on the browser.</p>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide class="carousel-height">
          <template slot="img" class="h-100">
            <b-row>
              <b-col lg="7">
                <b-row>
                  <b-col md="6">
                    <b-form-group
                        id="fieldset-eventName"
                        label="Event Name"
                        label-for="eventName"
                    >
                      <b-form-input
                          id="eventName"
                          v-model="eventName"
                          type="text"
                          required
                      ></b-form-input>
                    </b-form-group>
                    <b-tooltip target="fieldset-eventName" triggers="hover">
                      The event Name showed in the Home page
                    </b-tooltip>
                  </b-col>
                  <b-col md="6">
                    <b-form-group
                        id="fieldset-eventTag"
                        label="Event Tag"
                        label-for="eventTag"
                    >
                      <b-form-input
                          id="eventTag"
                          v-model="eventTag"
                          type="text"
                          required
                      ></b-form-input>
                    </b-form-group>
                    <b-tooltip target="fieldset-eventTag" triggers="hover">
                      Sub domain in which the event will be available
                    </b-tooltip>
                  </b-col>
                  <b-col md="6">
                    <div class="form-group">
                      <label for="eventStartTime">Expected Start Date</label>
                      <datepicker v-model="eventStartTime" placeholder="Select Start Date" id="eventStartTime" :disabledDates="disabledDates"></datepicker>
                      <b-tooltip target="eventStartTime" triggers="hover">
                        Date in which the Event should be available online
                      </b-tooltip>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <div class="form-group">
                      <label for="eventFinishTime">Expected Finish Date</label>
                      <datepicker v-model="eventFinishTime" placeholder="Select Finish Date" id="eventFinishTime" :disabledDates="disabledDatesFinishTime()" :class="{ 'my-is-invalid': submitted && this.eventFinishTime == '' }"></datepicker>
                      <b-tooltip target="eventFinishTime" triggers="hover">
                        Date in which the Event is supposed to finish
                      </b-tooltip>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <b-form-group
                        id="fieldset-eventAvailability"
                        label="Event Availability"
                        label-for="eventAvailability"
                    >
                      <b-form-input
                          id="eventAvailability"
                          v-model="eventAvailability"
                          type="number"
                          min="1"
                          step="1"
                          required
                      ></b-form-input>
                    </b-form-group>
                    <b-tooltip target="fieldset-eventAvailability" triggers="hover">
                      Amount of labs to make available initially for the event
                    </b-tooltip>
                  </b-col>
                  <b-col md="6">
                    <b-form-group
                        id="fieldset-eventCapacity"
                        label="Event Capacity"
                        label-for="eventCapacity"
                    >
                      <b-form-input
                          id="eventCapacity"
                          v-model="eventCapacity"
                          type="number"
                          min="2"
                          step="1"
                          required
                      ></b-form-input>
                    </b-form-group>
                    <b-tooltip target="fieldset-eventCapacity" triggers="hover">
                      Maximum amount of labs/teams
                    </b-tooltip>
                  </b-col>
                </b-row>
              </b-col>
              <b-col v-if="frontends" lg="5" class="myfrontends-field">
                <span>Frontends</span>
                <div class="frontends-field-modal p-2 mt-2 vertical-center" :class="{ 'my-is-invalid': submitted && this.selectedFrontends == null }">
                  <b-form-group>
                    <b-form-radio-group
                        id="frontends"
                        v-model="selectedFrontends"
                        :options="frontends"
                        name="frontends"
                        class="ml-4"
                        aria-label="Individual flavours"
                        stacked
                    ></b-form-radio-group>
                  </b-form-group>
                  <b-tooltip target="frontends" triggers="hover">
                    List of available Frontends
                  </b-tooltip>
                </div>
                <div class="custom-control custom-switch mt-2 mt-sm-2 mt-md-5">
                  <input type="checkbox" class="custom-control-input" id="isVPNON" v-model="isVPNON" name="isVPNON">
                  <label class="custom-control-label" for="isVPNON">Enable VPN</label>
                </div>
              </b-col>
              <b-col md="12" class="mt-3 mt-lg-0" style="z-index: 2">
                <b-form-group>
                  <b-card no-body class="challenges-field-modal" :class="{ 'my-is-invalid': submitted && this.selectedChallenges.length == 0 }">
                    <b-tabs pills card vertical>
                      <b-tab v-for="c in categories" v-bind:key="c.tag" v-bind:title="c.name">
                        <b-card-text>
                          <b-form-group>
                            <b-form-checkbox-group v-bind:id="c.tag" v-model="selectedChallenges" stacked>
                              <b-form-checkbox v-for="e in challenges[c.tag]" v-bind:key="e.tag" v-bind:value="e.tag" class="ch_chbox">{{getChallengeName(e)}}</b-form-checkbox>
                            </b-form-checkbox-group>
                          </b-form-group>
                        </b-card-text>
                      </b-tab>
                    </b-tabs>
                  </b-card>
                  <template v-slot:label>
                    <b>Choose your Challenges:</b>
                    <b-form-checkbox
                        v-model="selectAllChallenges"
                        aria-describedby="challengesTag"
                        aria-controls="challengesTag"
                        @change="toggleAllChallenges"
                    >
                      {{ selectAllChallenges ? 'Un-select All' : 'Select All' }}
                    </b-form-checkbox>
                  </template>
                </b-form-group>
              </b-col>
            </b-row>
            <b-button variant="secondary" @click="$bvModal.hide('create-event-modal')">Close</b-button>
            <b-button type="submit" class="btn-haaukins float-right" :disabled="!isDisabled">Create</b-button>
          </template>
        </b-carousel-slide>
      </b-carousel>
      </form>
  </b-modal>
</template>

<script>
    import { Empty, CreateEventRequest } from "daemon_pb";
    import { daemonclient } from "../App";
    import Datepicker from "vuejs-datepicker"
    import {ExerciseClient, token} from "@/App";

    export default {
        name: "EventModal",
        components: { Datepicker},
        props: {
            memoryProp: String
        },
        data: function () {
            return {
                error: null,
                submitted: false,
                eventName: '',
                eventTag: '',
                eventAvailability: 0,
                eventCapacity: 0,
                eventFinishTime: '', eventStartTime: Date.now(),
                challenges: [],
                categories: [],
                selectedChallenges: [],
                selectAllChallenges: false,
                frontends: [],
                selectedFrontends: null,
                isDisabled: false,
                disabledDates: {
                    to: new Date(Date.now() - 8640000)
                },
                isVPNON: false,
            }
        },
        mounted: function(){
            this.getCategories();
            this.getFrontends();
            this.handleButtons();
        },
        watch: {
          eventCapacity: function () {
            this.eventAvailability = Math.ceil(this.eventCapacity / 7)
          },
        },
        methods: {
            disabledDatesFinishTime: function() {
                return {
                    to: new Date(this.eventStartTime - 8640000)
                }
            },
            handleButtons: function(){
                if (this.memoryProp < 85) {
                    this.isDisabled = true
                }
            },
            toggleAllChallenges: function(checked) {
              let chbox = document.getElementsByClassName("ch_chbox")
              for(let ii = 0; ii < chbox.length; ii++) {

                if(chbox[ii].children[0].type == "checkbox") {
                  if (checked) {
                    chbox[ii].children[0].checked = true;
                  }else {
                    chbox[ii].children[0].checked = false;
                  }
                }
              }
            },
            encodeHTML: function(s) {
                return s.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;');
            },
            get_date: function (string_date){
                const date = new Date(string_date);
                let month = date.getMonth() + 1
                if (month < 10) {
                    month = "0" + month
                }
                const day = date.getDate().toString().length == 1 ? "0" + date.getDate() : date.getDate();
                return date.getFullYear() + "-" + month + "-" + day + " 00:00:00"
            },
            handleSubmit() {
                this.submitted = true;
                if (!(this.eventName && this.eventTag)){
                    return true;
                }else if (this.selectedFrontends == null || this.selectedChallenges.length == 0) {
                    return true;
                }else if (this.eventCapacity == 0 || this.eventAvailability == 0 || this.eventFinishTime == ''){
                    return true;
                }else{
                    this.eventName = this.encodeHTML(this.eventName);
                    this.eventTag = this.encodeHTML(this.eventTag);
                    this.eventFinishTime = this.get_date(this.eventFinishTime);
                    this.eventStartTime = this.get_date(this.eventStartTime);
                    return false
                }
            },
            createEvent: function () {

                if(this.handleSubmit()){
                    return
                }

                let getRequest = new CreateEventRequest();
                getRequest.setName(this.eventName);
                getRequest.setTag(this.eventTag);
                getRequest.setAvailable(this.eventAvailability);
                getRequest.setCapacity(this.eventCapacity);
                getRequest.setFinishtime(this.eventFinishTime);
                getRequest.setStarttime(this.eventStartTime.toString());
                this.selectedChallenges.forEach(function(challenge) {
                    getRequest.addExercises(challenge)
                });

                getRequest.addFrontends(this.selectedFrontends)
                getRequest.setOnlyvpn(this.isVPNON)
                this.$emit('createEvent', getRequest)

            },
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
            getChallengeName: function (c) {
                let full_ch_name = c.name
                let ch_count = 0
                full_ch_name += " (";
                c.instanceList.forEach(i => i.childrenList.forEach(c => full_ch_name+= c.name + ", ", ch_count++))

                if (ch_count > 1) {
                  full_ch_name = full_ch_name.substring(0, full_ch_name.length - 2)
                  full_ch_name+= ")";
                  return full_ch_name
                }

                return c.name
            },
            getFrontends: function () {
                let getRequest = new Empty();
                daemonclient.listFrontends(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    this.error = err;
                    const that = this
                    let frontendsListObj = response.getFrontendsList()
                    frontendsListObj.forEach(function (element) {
                        if (!element.getImage().includes("vulnerability")){
                            that.frontends.push(element.getImage())
                        }
                    })
                });
            },
            selectedVPNOption: function (isVPN) {
              this.isVPNON = isVPN
              this.$refs.createEventCarousel.next()
            }
        }
    }
</script>

<style>
    .carousel-height{
      height: 650px;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .selection-phase-div:hover{
      background-color: #211a52!important;
      color: #fff;
      cursor: pointer;
    }
    .border-aau-color{
      border-color: #211a52!important;
    }
    .bg-light-gray{
      background-color: #ddd;
    }
    .challenges-field-modal {
        height: 270px;
        overflow-y: auto;
    }
    .frontends-field-modal{
        border: 1px solid #ced4da;
        border-radius: .35rem;
    }
    .my-is-invalid{
        border: 2px solid rgba(220,53,69,0.9);
        box-shadow: 1px 1px 2px rgba(220,53,69,0.7);
    }

    .myfrontends-field fieldset{
        margin-bottom: 0px!important;
    }
    .vertical-center {
        min-height: 127px;  /* Fallback for browsers do NOT support vh unit */
        display: flex;
        align-items: center;
    }
    .challenges-field-modal .nav-link {
        color: #211a52!important;
    }
    .challenges-field-modal .nav-link.active{
        color: #fff!important;
        background-color: #211a52!important;
        border-color: #211a52!important;
    }
    .tabs{
      height: 100%;
    }
</style>