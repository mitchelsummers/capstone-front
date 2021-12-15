<template>
  <div class="course-show">
    <h1>{{ course.name }}</h1>
    <img :src="course.image" :alt="course.name" />
    <h3>{{ course.address }}</h3>
    <h3>Rating: {{ course.rating }}</h3>
    <p>Hole Count: {{ course.hole_count }}</p>
    <p>Course Par: {{ course.course_par }}</p>

    <router-link to="/courses">Back to All courses</router-link>
    |
    <router-link v-bind:to="`/courses/${course.id}/edit`">Edit course</router-link>
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
      course: {},
    };
  },
  created: function () {
    axios.get("/courses/" + this.$route.params.id).then((response) => {
      this.course = response.data;
    });
  },
};
</script>
