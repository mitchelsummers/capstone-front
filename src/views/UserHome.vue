<template>
  <div class="user-home">
    <section id="why-us">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <h3>{{ user.user_name }}</h3>
          <!-- <p>Skill Level: {{ user.skill_level }}</p> -->
          <router-link v-bind:to="`/newcard`"><p>New Card</p></router-link>
        </header>
      </div>
    </section>

    <section id="services" class="section-bg">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h3>Your Cards</h3>
        </header>
        <div class="row justify-content-center">
          <div class="col-md-5 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
            <div v-for="usercard in usercards" v-bind:key="usercard.id" class="box">
              <h4 class="title">
                <router-link v-bind:to="`/cards/${usercard.id}`">{{ usercard.name }}</router-link>
              </h4>
              <p class="description">{{ usercard.month }} {{ usercard.day }}, {{ usercard.time }}</p>
              <p class="description">{{ usercard.course.name }}</p>
              <!-- <div v-for="user in usercard.users" v-bind:key="user.id">
                <p class="description">{{ user.user_name }}</p>
              </div> -->
              <!-- <div v-for="cardplayer in cardplayers" :key="cardplayer.id"></div> -->
            </div>
            <header class="section-header">
              <h3>Cards You're In</h3>
            </header>
            <div v-for="playercard in playercards" v-bind:key="playercard.id" class="box">
              <h4 class="title">
                <router-link v-bind:to="`/cards/${playercard.id}`">{{ playercard.name }}</router-link>
              </h4>
              <p class="description">{{ playercard.month }} {{ playercard.day }} {{ playercard.time }}</p>
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
