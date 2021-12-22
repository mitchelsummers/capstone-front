<template>
  <div class="course-show">
    <section id="about">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <h3>{{ course.name }}</h3>
        </header>
        <div class="row about-container">
          <div class="col-lg-6 content order-lg-1 order-2">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div>&nbsp;</div>
              <a href="">
                <div class="icon"><i class="bi bi-geo-alt"></i></div>

                <h4 class="title">{{ course.address }}</h4>
              </a>
              <p class="description"></p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bi bi-binoculars"></i></div>
              <h4 class="title">Rating: {{ course.rating }}</h4>
              <p class="description">
                Hole Count: {{ course.hole_count }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Course Par: {{ course.course_par }}
              </p>
            </div>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bi-card-checklist"></i></div>
              <h4 class="title">&nbsp;</h4>
              <p class="description">
                <router-link to="/courses">Back to All courses</router-link>
                |
                <router-link v-bind:to="`/courses/${course.id}/edit`">Edit course</router-link>
                |
                <router-link v-bind:to="`/newcard`">New Card</router-link>
              </p>
            </div>
          </div>

          <div class="col-lg-6 background order-lg-2" data-aos="zoom-in">
            <img :src="course.image" :alt="course.name" />
          </div>
        </div>
      </div>
    </section>
    <!-- <h1>{{ course.name }}</h1>
    <img :src="course.image" :alt="course.name" />
    <h3>{{ course.address }}</h3>
    <h3>Rating: {{ course.rating }}</h3>
    <p>Hole Count: {{ course.hole_count }}</p>
    <p>Course Par: {{ course.course_par }}</p>

    <router-link to="/courses">Back to All courses</router-link>
    |
    <router-link v-bind:to="`/courses/${course.id}/edit`">Edit course</router-link>
    |
    <router-link v-bind:to="`/newcard`">New Card</router-link> -->
    <section id="why-us">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <div>&nbsp;</div>
          <i class="bi bi-calendar4-week"></i>
          <h3>Cards</h3>
        </header>
        <div class="row row-eq-height justify-content-center">
          <div v-for="coursecard in coursecards" v-bind:key="coursecard.id" class="col-lg-4 mb-4">
            <div class="card" data-aos="zoom-in" data-aos-delay="100">
              <router-link v-bind:to="`/cards/${coursecard.id}`">
                <div class="card-body">
                  <h5 class="card-title">{{ coursecard.name }}</h5>

                  <p class="card-text">{{ coursecard.month }} {{ coursecard.day }}, {{ coursecard.time }}</p>
                  <div v-for="user in coursecard.users" v-bind:key="user.id">
                    <p>{{ user.user_name }}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </header>
        <div class="row about-container">
          <div class="col-lg-6 content order-lg-1 order-2">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- <div v-for="coursecard in coursecards" v-bind:key="coursecard.id">
      <router-link v-bind:to="`/cards/${coursecard.id}`">
        <h3>{{ coursecard.name }}</h3>
      </router-link>

      <p>{{ coursecard.month }} {{ coursecard.day }}, {{ coursecard.time }}</p>

      <div v-for="user in coursecard.users" v-bind:key="user.id">
        <p>{{ user.user_name }}</p>
      </div>
      <p>-----------------------</p>
    </div> -->
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
      course: {},
      coursecards: {},
      card: [],
    };
  },
  created: function () {
    axios.get("/courses/" + this.$route.params.id).then((response) => {
      this.course = response.data;
    });
    axios.get("/coursecards/" + this.$route.params.id).then((response) => {
      this.coursecards = response.data;
    });
    axios.get("/cards/" + this.$route.params.id).then((response) => {
      this.card = response.data;
    });
  },
};
</script>
