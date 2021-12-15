<template>
  <div class="card-show">
    <h2>{{ card.name }}</h2>
    <h3>{{ card.month }} {{ card.day }}, {{ card.time }}</h3>
    <h1>{{ card.course.name }}</h1>
    <p>{{ card.users }}</p>
    <router-link to="/user">Back to User Home</router-link>
    |
    <router-link v-bind:to="`/cards/${card.id}/edit`">Edit card</router-link>
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
      card: {},
    };
  },
  created: function () {
    axios.get("/cards/" + this.$route.params.id).then((response) => {
      this.card = response.data;
    });
  },
};
</script>
