<template>
  <div class="user-home">
    <h1>{{ user.user_name }}</h1>
    <h3>Skill Level: {{ user.skill_level }}</h3>
    <div v-for="usercard in usercards" v-bind:key="usercard.id">
      <router-link v-bind:to="`/cards/${usercard.id}`">
        <h3>{{ usercard.name }}</h3>
      </router-link>

      <p>{{ usercard.month }} {{ usercard.day }}, {{ usercard.time }}</p>
      <p>{{ usercard.course.name }}</p>
      <p>{{ usercard.users }}</p>
      <!-- <div v-for="cardplayer in cardplayers" :key="cardplayer.id"></div> -->
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
      user: {},
      usercards: {},
      cardplayers: {},
    };
  },
  created: function () {
    axios.get("/user").then((response) => {
      this.user = response.data;
    });
    axios.get("/usercards").then((response) => {
      this.usercards = response.data;
    });
    // axios.get("/cardplayers").then((response) => {
    //   this.cardplayers = response.data;
    // });
  },
};
</script>
