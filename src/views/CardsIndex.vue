<template>
  <div class="card-index">
    <h3>cards</h3>
    <router-link v-bind:to="`/newcard`">New card</router-link>
    <div v-for="card in cards" :key="card.id">
      <router-link v-bind:to="`/cards/${card.id}`">
        <h4>{{ card.name }}</h4>
      </router-link>
      <h4>{{ card.course.name }}</h4>
      <!-- <button v-on:click="showcard(card)">More Info</button> -->
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
      cards: [],
    };
  },
  created: function () {
    this.indexCards();
  },
  methods: {
    indexCards: function () {
      axios.get("/cards").then((response) => {
        this.cards = response.data;
        console.log("All cards", this.cards);
      });
    },
  },
};
</script>
