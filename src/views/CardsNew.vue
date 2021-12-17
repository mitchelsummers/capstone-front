<template>
  <div class="cards-new">
    <h1 v-if="status" class="text-danger">{{ status }}</h1>
    <form v-on:submit.prevent="createCard()">
      <h1>New Card</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newCardParams.name" />
      </div>
      <div>
        <label>Month:</label>
        <input type="text" v-model="newCardParams.month" />
      </div>
      <div>
        <label>Day:</label>
        <input type="text" v-model="newCardParams.day" />
      </div>
      <div>
        <label>Time:</label>
        <input type="text" v-model="newCardParams.time" />
      </div>
      <div>
        <label>Privacy:</label>
        <input type="text" v-model="newCardParams.privacy" />
      </div>
      <div>
        <label>Course:</label>
        <input type="text" v-model="newCardParams.course_id" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newCardParams: {},
      errors: [],
      status: "",
    };
  },
  methods: {
    createCard: function () {
      console.log("Create new Card");
      axios
        .post("/cards", this.newCardParams)
        .then(() => {
          this.$parent.flashMessage = "Successfully Created";
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
