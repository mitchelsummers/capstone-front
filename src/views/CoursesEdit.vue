<template>
  <div class="courses-edit">
    <section id="services" class="section-bg">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </header>
        <div class="row justify-content-center">
          <div class="col-md-5 col-lg-8" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <h4 class="title"><a href="">EDIT CARD</a></h4>
              <form v-on:submit.prevent="updateCourse()">
                <h1>Edit Course</h1>
                <ul>
                  <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
                <div>
                  <label>Name:</label>
                  <input type="text" v-model="currentCourseParams.name" />
                </div>
                <div>
                  <label>Address:</label>
                  <input type="text" v-model="currentCourseParams.address" />
                </div>
                <div>
                  <label>Hole Count:</label>
                  <input type="text" v-model="currentCourseParams.hole_count" />
                </div>
                <div>
                  <label>Course Par:</label>
                  <input type="text" v-model="currentCourseParams.course_par" />
                </div>
                <div>
                  <label>Rating:</label>
                  <input type="text" v-model="currentCourseParams.rating" />
                </div>
                <div>
                  <label>Image:</label>
                  <input type="text" v-model="currentCourseParams.image" />
                </div>
                <input type="submit" value="Update" />
              </form>
              <button v-on:click="destroyCourse()">Delete</button>
              <div><router-link to="/courses">BACK</router-link></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
img {
  width: 400px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentCourseParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/courses/${this.$route.params.id}`).then((response) => {
      console.log("Course Info:", response.data);
      this.currentCourseParams = response.data;
    });
  },
  methods: {
    updateCourse: function () {
      console.log("Updating Course");
      axios
        .patch(`/courses/${this.$route.params.id}`, this.currentCourseParams)
        .then((response) => {
          this.$parent.flashMessage = "Successfully Updated";
          this.$router.push(`/courses/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    destroyCourse: function () {
      axios.delete(`/courses/${this.$route.params.id}`).then((response) => {
        console.log("Course Deleted", response.data);
        this.$parent.flashMessage = "Successfully Deleted";
        this.$router.push("/courses");
      });
    },
  },
};
</script>
