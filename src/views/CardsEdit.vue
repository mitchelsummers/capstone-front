<template>
  <div class="cards-edit">
    <form v-on:submit.prevent="updateCard()">
      <h1>Edit Card</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="currentCardParams.name" />
      </div>
      <div>
        <label>Month:</label>
        <input type="text" v-model="currentCardParams.month" />
      </div>
      <div>
        <label>Day:</label>
        <input type="text" v-model="currentCardParams.day" />
      </div>
      <div>
        <label>Time:</label>
        <input type="text" v-model="currentCardParams.time" />
      </div>
      <div>
        <label>Privacy:</label>
        <input type="text" v-model="currentCardParams.privacy" />
      </div>
      <div>
        <label>Course:</label>
        <input type="text" v-model="currentCardParams.course_id" />
      </div>
      <input type="submit" value="Update" />
    </form>
    <button v-on:click="destroyCard()">Delete</button>
    <div><router-link to="/user">Back to User Home</router-link></div>
    <!-- <p>{{ card.players }}</p> -->
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
      currentCardParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/cards/${this.$route.params.id}`).then((response) => {
      console.log("Card Info:", response.data);
      this.currentCardParams = response.data;
    });
  },
  methods: {
    updateCard: function () {
      console.log("Updating Card");
      axios
        .patch(`/cards/${this.$route.params.id}`, this.currentCardParams)
        .then((response) => {
          this.$parent.flashMessage = "Successfully Updated";
          this.$router.push(`/cards/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    destroyCard: function () {
      axios.delete(`/cards/${this.$route.params.id}`).then((response) => {
        console.log("Card Deleted", response.data);
        this.$parent.flashMessage = "Successfully Deleted";
        this.$router.push("/cards");
      });
    },
  },
};
</script>
