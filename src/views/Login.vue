<template>
  <div class="login">
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
              <div class="icon"><i class="bi bi-briefcase" style="color: #ff689b"></i></div>
              <h4 class="title"><a href="">LOGIN</a></h4>
              <form v-on:submit.prevent="submit()" class="description">
                <ul>
                  <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
                <div>
                  <label>Email:</label>
                  <input type="email" v-model="newSessionParams.email" />
                </div>
                <div>
                  <label>Password:</label>
                  <input type="password" v-model="newSessionParams.password" />
                </div>
                <input type="submit" value="Submit" />
              </form>
              <div><router-link to="/">Home</router-link></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$parent.flashMessage = "Successfully Logged In";
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
