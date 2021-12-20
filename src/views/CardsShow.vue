<template>
  <div class="card-show">
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
              <h4 class="title">{{ card.name }}</h4>
              <router-link v-bind:to="`/courses/${card.course.id}`">
                <p class="description">{{ card.course.name }}</p>
              </router-link>
              <p class="description">{{ card.month }} {{ card.day }}, {{ card.time }}</p>
              <!-- <p>{{ card.players }}</p> -->
              <p class="description"><strong>Players:</strong></p>
              <p class="description"></p>
              <div v-for="user in card.users" v-bind:key="user.id">
                <p class="description">{{ user.user_name }}</p>
              </div>
              <p class="description">----------------</p>
              <!-- <p>{{ card.users }}</p> -->
              <!-- <p>{{ card.users[0].user_name }}</p>
    <p>{{ card.users[1].user_name }}</p> -->
              <router-link to="/user"><p class="description">Home</p></router-link>

              <router-link v-bind:to="`/cards/${card.id}/edit`"><p class="description">Edit card</p></router-link>
              <button v-on:click="addPlayer()"><p class="description">Join</p></button>
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
      card: [],
      course: [],
      name: [],
      user: [],
      users: [],
      cardplayer: [],
    };
  },
  created: function () {
    axios.get("/cards/" + this.$route.params.id).then((response) => {
      console.log(response.data);
      this.card = response.data;
    });
    axios.get("/courses/" + this.$route.params.id).then((response) => {
      console.log(response.data);
      this.card = response.data;
    });
    axios.get("/cardplayers/" + this.$route.params.id).then((response) => {
      this.cardplayer = response.data;
      console.log("Users:", response.data);
    });
  },
  methods: {
    addPlayer: function () {
      var params = {
        card_id: this.card.id,
      };
      axios
        .post("/players", params)
        .then(() => {
          this.$parent.flashMessage = "Joined Card!";
          this.$router.push("/user");
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
  },
};
</script>
