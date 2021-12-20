<template>
  <div class="signup">
    <section id="services" class="section-bg">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </header>
        <div class="row justify-content-center">
          <div class="col-md-5 col-lg-8" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <h4 class="title"><a href="">SIGNUP</a></h4>
              <form v-on:submit.prevent="submit()">
                <ul>
                  <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
                <div>
                  <label>User Name:</label>
                  <input type="text" v-model="newUserParams.user_name" />
                  <small v-if="newUserParams.user_name.length > 20" class="text-danger">
                    User Name cannot exceed 20 characters
                  </small>
                </div>
                <div>
                  <label>Email:</label>
                  <input type="email" v-model="newUserParams.email" />
                </div>
                <div>
                  <label>Password:</label>
                  <input type="password" v-model="newUserParams.password" />
                  <small v-if="newUserParams.password.length < 6" class="text-danger">
                    Password must be at least 6 characters
                  </small>
                  <small v-if="newUserParams.password.length > 20" class="text-danger">
                    Password cannot exceed 20 characters
                  </small>
                </div>
                <div>
                  <label>Password confirmation:</label>
                  <input type="password" v-model="newUserParams.password_confirmation" />
                  <small v-if="newUserParams.password !== newUserParams.password_confirmation" class="text-danger">
                    Passwords must match.
                  </small>
                </div>
                <input type="submit" value="Submit" />
              </form>
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
      newUserParams: { user_name: "", password: "" },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
