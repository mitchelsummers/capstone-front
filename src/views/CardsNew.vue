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
          <div class="col-md-5 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
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
                  <input type="text" v-model="newCardParams.month" />
                </div>
                <div>
                  <label>Day:</label>
                  <input type="text" v-model="newCardParams.day" />
                </div>
                <div>
                  <label>Time:</label>
                  <input type="text" v-model="newCardParams.time" />
                </div>
                <div>
                  <label>Privacy:</label>
                  <input type="text" v-model="newCardParams.privacy" />
                </div>
                <div>
                  <label>Course:</label>
                  <input type="text" v-model="newCardParams.course_id" />
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
