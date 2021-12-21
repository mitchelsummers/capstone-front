<template>
  <div class="cards-new">
    <section id="services" class="section-bg">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </header>

        <div class="row justify-content-center">
          <div class="col-md-5 col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <h4 class="title"><a href="">NEW CARD</a></h4>
              <h1 v-if="status" class="text-danger">{{ status }}</h1>
              <form v-on:submit.prevent="createCard()">
                <ul>
                  <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
                <div>
                  <label>Name:</label>
                  <input type="text" v-model="newCardParams.name" />
                </div>
                <div>
                  <label>Month:</label>
                  <!-- <input type="text" v-model="newCardParams.month" /> -->
                  <select required name="course.name" id="course.id" v-model="newCardParams.month">
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div>
                  <label>Day:</label>
                  <!-- <input type="text" v-model="newCardParams.day" /> -->

                  <select required name="card.day" id="card.day" v-model="newCardParams.day">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
                <div>
                  <label>Time:</label>
                  <!-- <input type="text" v-model="newCardParams.time" /> -->
                  <select required name="card.time" id="card.time" v-model="newCardParams.time">
                    <option value="1:00">1:00</option>
                    <option value="1:30">1:30</option>
                    <option value="2:00">2:00</option>
                    <option value="2:30">2:30</option>
                    <option value="3:00">3:00</option>
                    <option value="3:30">3:30</option>
                    <option value="4:00">4:00</option>
                    <option value="4:30">4:30</option>
                    <option value="5:00">5:00</option>
                    <option value="5:30">5:30</option>
                    <option value="6:00">6:00</option>
                    <option value="6:30">6:30</option>
                    <option value="7:00">7:00</option>
                    <option value="7:30">7:30</option>
                    <option value="8:00">8:00</option>
                    <option value="8:30">8:30</option>
                    <option value="9:00">9:00</option>
                    <option value="9:30">9:30</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                  </select>
                </div>
                <div>
                  <label>Privacy:</label>
                  <!-- <input type="text" v-model="newCardParams.privacy" /> -->
                  <select required name="card.privacy" id="card.privacy" v-model="newCardParams.privacy">
                    <option value="TRUE">True</option>
                    <option value="FALSE">False</option>
                  </select>
                </div>
                <div>
                  <label>Course:</label>
                  <!-- <input type="text" v-model="newCardParams.course_id" /> -->
                  <select required name="course.name" id="course.id" v-model="newCardParams.course_id">
                    <option value="5">West Fork</option>
                    <option value="6">Fehringer</option>
                    <option value="7">Bird's Nest</option>
                    <option value="8">Adam's Hollow</option>
                    <option value="9">Wondervu</option>
                    <option value="10">Beaver Ranch</option>
                    <option value="11">Golden Eagle</option>
                    <option value="12">Sundance Trail</option>
                    <option value="13">Widefield Park</option>
                    <option value="14">CMC - Leadville</option>
                  </select>
                </div>
                <!-- <select v-model="course">
        <option v-for="course in courses" v-bind:key="course.id" v-bind:value="course.id">
          {{ course.name }}
        </option>
      </select>
      <span>Course: {{ course }}</span> -->
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newCardParams: {},
      errors: [],
      status: "",
      courses: [],
      course: [],
    };
  },
  methods: {
    createCard: function () {
      console.log("Create new Card");
      axios
        .post("/cards", this.newCardParams)
        .then(() => {
          this.$parent.flashMessage = "Successfully Created";
          this.$router.push("/user");
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
    indexCourses: function () {
      axios.get("/courses").then((response) => {
        this.courses = response.data;
      });
    },
  },
};
</script>
