<template>
  <div class="user-home">
    <h1>{{ user.user_name }}</h1>
    <!-- <h3>Skill Level{{ user.skill_level }}</h3> -->
    <!-- <h3>Rating: {{ user.cards }}</h3> -->
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
    };
  },
  created: function () {
    axios.get("/user").then((response) => {
      this.user = response.data;
    });
  },
};
</script>
