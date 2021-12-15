<template>
  <div class="courses-new">
    <h1 v-if="status" class="text-danger">{{ status }}</h1>
    <form v-on:submit.prevent="createCourse()">
      <h1>New Course</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newCourseParams.name" />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" v-model="newCourseParams.address" />
      </div>
      <div>
        <label>Hole Count:</label>
        <input type="text" v-model="newCourseParams.hole_count" />
      </div>
      <div>
        <label>Course Par:</label>
        <input type="text" v-model="newCourseParams.course_par" />
      </div>
      <div>
        <label>Rating:</label>
        <input type="text" v-model="newCourseParams.rating" />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="newCourseParams.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newCourseParams: {},
      errors: [],
      status: "",
    };
  },
  methods: {
    createCourse: function () {
      console.log("Create new course");
      axios
        .post("/courses", this.newCourseParams)
        .then(() => {
          this.$parent.flashMessage = "Successfully Created";
          this.$router.push("/courses");
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
  },
};
</script>
