<template>
  <div class="user-home">
    <h1>{{ user.user_name }}</h1>
    <h3>Skill Level: {{ user.skill_level }}</h3>
    <router-link v-bind:to="`/newcard`">New Card</router-link>
    <h2>Your Cards</h2>
    <div v-for="usercard in usercards" v-bind:key="usercard.id">
      <router-link v-bind:to="`/cards/${usercard.id}`">
        <h3>{{ usercard.name }}</h3>
      </router-link>

      <p>{{ usercard.month }} {{ usercard.day }}, {{ usercard.time }}</p>
      <p>{{ usercard.course.name }}</p>
      <div v-for="user in usercard.users" v-bind:key="user.id">
        <p>{{ user.user_name }}</p>
      </div>
      <!-- <div v-for="cardplayer in cardplayers" :key="cardplayer.id"></div> -->
      <p>-----------------------</p>
    </div>
    <h2>Cards You're In!</h2>
    <div v-for="playercard in playercards" v-bind:key="playercard.id">
      <router-link v-bind:to="`/cards/${playercard.id}`">
        <h3>{{ playercard.name }}</h3>
      </router-link>
      <p>{{ playercard.month }} {{ playercard.day }} {{ playercard.time }}</p>
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
      playercards: {},
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
    axios.get("/playercards").then((response) => {
      this.playercards = response.data;
      console.log("Player Cards:", this.playercards);
    });
    // axios.get("/cardplayers").then((response) => {
    //   this.cardplayers = response.data;
    // });
  },
};
</script>
