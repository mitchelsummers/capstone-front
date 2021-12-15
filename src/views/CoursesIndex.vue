<template>
  <div class="course-index">
    <h3>Courses</h3>
    <router-link v-bind:to="`/newcourse`">New Course</router-link>
    <div v-for="course in courses" :key="course.id">
      <router-link v-bind:to="`/courses/${course.id}`">
        <img :src="course.image" :alt="course.title" />
      </router-link>
      <h4>{{ course.name }}</h4>
      <p>{{ course.address }}</p>
      <p>RATING: {{ course.rating }}</p>
      <!-- <button v-on:click="showCourse(course)">More Info</button> -->
      <div>---------------------------------------------------------------------------</div>
    </div>
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
      courses: [],
    };
  },
  created: function () {
    this.indexCourses();
  },
  methods: {
    indexCourses: function () {
      axios.get("/courses").then((response) => {
        this.courses = response.data;
        console.log("All Courses", this.courses);
      });
    },
  },
};
</script>
