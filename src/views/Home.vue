<template>
  <div class="home">
    <section id="hero" class="clearfix">
      <div class="container" data-aos="fade-up">
        <!-- <div class="hero-img" data-aos="zoom-out" data-aos-delay="200">
          <img src="assets/img/dgbasket.png" alt="" class="img-fluid" />
        </div> -->

        <div class="hero-info" data-aos="zoom-in" data-aos-delay="100">
          <h2>Welcome to Summit Disc Golf!</h2>
          <div>
            <a v-if="!isLoggedIn()" href="/signup" class="btn-services scrollto">Sign Up</a>
            <a v-if="isLoggedIn()" href="/newcard" class="btn-services scrollto">New Card</a>
            <a href="/courses" class="btn-services scrollto">Courses</a>
            <a v-if="!isLoggedIn()" href="/login" class="btn-services scrollto">Login</a>
            <a v-if="isLoggedIn()" href="/user" class="btn-services scrollto">User Home</a>
          </div>
        </div>
      </div>
    </section>

    <!-- <a v-if="isLoggedIn()" class="nav-link" href="/newcard">New Card</a>
    |
    <router-link to="/courses">Courses</router-link>
    |
    <a v-if="!isLoggedIn()" class="nav-link" href="/login">Login</a>
    |
    <a v-if="isLoggedIn()" class="nav-link" href="/logout">Logout</a>
    |
    <a v-if="!isLoggedIn()" class="nav-link" href="/signup">Sign Up</a>
    |
    <a v-if="isLoggedIn()" class="nav-link" href="/user">User Home</a> -->
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
