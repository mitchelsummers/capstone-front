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
    |
    <router-link v-bind:to="`/newcard`">New Card</router-link>

    <h2>Cards</h2>

    <div v-for="coursecard in coursecards" v-bind:key="coursecard.id">
      <router-link v-bind:to="`/cards/${coursecard.id}`">
        <h3>{{ coursecard.name }}</h3>
      </router-link>

      <p>{{ coursecard.month }} {{ coursecard.day }}, {{ coursecard.time }}</p>

      <div v-for="user in coursecard.users" v-bind:key="user.id">
        <p>{{ user.user_name }}</p>
      </div>
      <p>-----------------------</p>
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
      course: {},
      coursecards: {},
      card: [],
    };
  },
  created: function () {
    axios.get("/courses/" + this.$route.params.id).then((response) => {
      this.course = response.data;
    });
    axios.get("/coursecards/" + this.$route.params.id).then((response) => {
      this.coursecards = response.data;
    });
    axios.get("/cards/" + this.$route.params.id).then((response) => {
      this.card = response.data;
    });
  },
};
</script>
