<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex justify-content-between">
        <div class="logo">
          <!-- Uncomment below if you prefer to use an text logo -->
          <h1><a href="/">Summit Disc Golf</a></h1>
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a> -->
        </div>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link" href="/courses">Courses</a></li>
            <li><a v-if="isLoggedIn()" class="nav-link" href="/newcard">New Card</a></li>
            <li><a v-if="isLoggedIn()" class="nav-link" href="/user">User Home</a></li>
            <li><a v-if="!isLoggedIn()" class="nav-link" href="/signup">Sign Up</a></li>
            <li><a v-if="!isLoggedIn()" class="nav-link" href="/login">Login</a></li>
            <li><a v-if="isLoggedIn()" class="nav-link" href="/logout">Logout</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- #header -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <a v-if="isLoggedIn()" class="nav-link" href="/newcard">New Card</a>
      |
      <router-link to="/courses">Courses</router-link>
      |
      <a v-if="!isLoggedIn()" class="nav-link" href="/login">Login</a>
      |
      <a v-if="isLoggedIn()" class="nav-link" href="/logout">Logout</a>
      |
      <a v-if="!isLoggedIn()" class="nav-link" href="/signup">Sign Up</a>
      |
      <a v-if="isLoggedIn()" class="nav-link" href="/user">User Home</a>
    </div> -->
    <div v-if="flashMessage" v-on:click="flashMessage = ``" class="alert alert-success">
      {{ flashMessage }}
    </div>
    <router-view />
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 footer-info">
              <h3>Summit Disc Golf</h3>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies
                darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum
                leo. Amet volutpat consequat mauris nunc congue.
              </p>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                A108 Adam Street
                <br />
                New York, NY 535022
                <br />
                United States
                <br />
                <strong>Phone:</strong>
                +1 5589 55488 55
                <br />
                <strong>Email:</strong>
                info@example.com
                <br />
              </p>

              <div class="social-links">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore
                legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright
          <strong>NewBiz</strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          <!--
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=NewBiz
      -->
          Designed by
          <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
      <i class="bi bi-arrow-up-short"></i>
    </a>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      flashMessage: "",
    };
  },
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
