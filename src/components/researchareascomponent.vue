<template>
  <div class="container fill mt-5">
    <h1>Research Areas</h1>
    <div class="row">
      <div
        class="col-sm-12 col-lg-6 mt-3"
        v-for="element in elements"
        :key="element.uri"
      >
        <h5 class="text-primary">{{ element.name }}</h5>
        <img :src="element.img" class="img-fluid" alt="" />
        <p class="mt-2">{{ element.description }}</p>
        <b-button variant="danger" v-on:click="goToArea(element.uri)"
          >Read More</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import * as Papa from "papaparse";

export default {
  name: "researchareascomponent",
  data() {
    return {
      elements: [],
    };
  },
  methods: {
    goToArea(uri) {
      window.location.href = uri;
    },
  },
  mounted() {
    this.elements = [];
    Papa.parse("/data/ResearchAreas.csv", {
      download: true,
      header: true,
      complete: (results) => {
        let resAreas = results.data;
        resAreas.forEach( (elem) => {
          this.elements.push(
            {
              name: elem.AreasdeInvestigacion,
              img: 'https://picsum.photos/id/385/600/300?grayscale',
              description: elem.Description,
              uri: '/research/areas/' + elem.id
            }
          )
        });
      },
    });
  },
};
</script>

<style>
</style>