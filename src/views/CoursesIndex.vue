<template>
  <div class="course-index">
    <h1>Courses</h1>
    <div v-for="course in courses" :key="course.id">
      <router-link v-bind:to="`/courses/${course.id}`">
        <h2>{{ course.name }}</h2>
      </router-link>
      <router-link v-bind:to="`/courses/${course.id}`">
        <img :src="course.image" :alt="course.title" />
      </router-link>
      <p>{{ course.address }}</p>
      <p>RATING: {{ course.rating }}</p>
      <!-- <button v-on:click="showCourse(course)">More Info</button> -->
      <div>---------------------------------------------------------------------------</div>
    </div>
    <router-link v-bind:to="`/newcourse`">New Course</router-link>
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
