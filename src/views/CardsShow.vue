<template>
  <div class="card-show">
    <h2>{{ card.name }}</h2>
    <router-link v-bind:to="`/courses/${card.course.id}`">
      <p>{{ card.course.name }}</p>
    </router-link>
    <h3>{{ card.month }} {{ card.day }}, {{ card.time }}</h3>
    <!-- <p>{{ card.players }}</p> -->
    <div v-for="user in card.users" v-bind:key="user.id">
      <p>{{ user.user_name }}</p>
    </div>
    <!-- <p>{{ card.users }}</p> -->
    <!-- <p>{{ card.users[0].user_name }}</p>
    <p>{{ card.users[1].user_name }}</p> -->
    <router-link to="/user">Back to User Home</router-link>
    |
    <router-link v-bind:to="`/cards/${card.id}/edit`">Edit card</router-link>
    <button v-on:click="addPlayer()">Join</button>
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
