<template>
  <div class="course-index">
    <section id="about">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <h3>Courses</h3>
        </header>

        <div v-for="course in courses" :key="course.id" class="row about-container">
          <div class="col-lg-4 content order-lg-1 order-2">
            <p>&nbsp;</p>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <router-link v-bind:to="`/courses/${course.id}`">
                <div class="icon"><i class="bi bi-geo-alt"></i></div>
              </router-link>
              <h4 class="title">
                <router-link v-bind:to="`/courses/${course.id}`">
                  <a href="">{{ course.name }}</a>
                </router-link>
              </h4>
              <p class="description">
                {{ course.address }}
              </p>
              <h2 class="description">Rating: {{ course.rating }}</h2>
            </div>
          </div>

          <div class="col-lg-6 background order-lg-2" data-aos="zoom-in">
            <router-link v-bind:to="`/courses/${course.id}`">
              <img :src="course.image" :alt="course.title" class="img-fluid" />
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <router-link v-bind:to="`/newcourse`">New Course</router-link>
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
      courses: [],
    };
  },
  created: function () {
    this.indexCourses();
  },
  methods: {
    indexCourses: function () {
      axios.get("/courses").then((response) => {
        this.courses = response.data;
        console.log("All Courses", this.courses);
      });
    },
  },
};
</script>
