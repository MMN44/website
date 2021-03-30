<template>
  <div class="container">
    <h1 class="mt-5">List of Projects</h1>
    <div class="row">
      <b-button
        class="col-sm-3 col-lg-2 m-3"
        v-on:click="showAll()"
        variant="outline-primary"
        >View All</b-button
      >
      <b-button
        class="col-sm-3 col-lg-2 m-3"
        v-on:click="showCurrent()"
        variant="outline-primary"
        >Current Projects</b-button
      >
      <b-button
        class="col-sm-3 col-lg-2 m-3"
        v-on:click="showCompleted()"
        variant="outline-primary"
        >Completed Projects</b-button
      >
    </div>
    <div v-for="element in elements" :key="element.id" class="mt-5">
      <b-card no-body class="overflow-hidden" border-variant="light">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img
              :src="element.img"
              class="mr-5"
              style="border-radius: 6px"
            ></b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body>
              <b-card-title>
                <b-link>{{ element.title }}</b-link>
              </b-card-title>
              <b-card-sub-title>
                {{ element.date }}
              </b-card-sub-title>
              <b-card-text>
                {{ element.description }}
              </b-card-text>
              <hr />
              <b-card-text> Developed by {{ element.team }} </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="row mt-5">
      <div class="col-12 text-center">
        <b-button variant="outline-primary">Read More</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import * as Papa from "papaparse";

export default {
  name: "projectscomponent",
  data() {
    return {
      elements: [],
      data: [],
      currentProjects: [],
      completedProjects: [],
    };
  },
  methods: {
    filter() {
      this.data.forEach((element) => {
        if (element.type == "Completado") this.completedProjects.push(element);
        else this.currentProjects.push(element);
      });
    },
    showCompleted() {
      this.elements = this.completedProjects.slice();
    },
    showCurrent() {
      this.elements = this.currentProjects.slice();
    },
    showAll() {
      this.elements = this.data.slice();
    },
  },
  mounted() {
    this.data = [];
    Papa.parse("/data/Projects.csv", {
      download: true,
      header: true,
      complete: (results) => {
        let projects = results.data;
        let id = 0;
        Papa.parse("/data/People-Projects.csv", {
          download: true,
          headers: true,
          complete: (proj) => {
            let team = "";
            let projInfo = proj.data;
            projects.forEach((index) => {
              projInfo.forEach((pos) => {
                if (index.Proyecto == pos.Proyecto) {
                  team = team.concat(pos.Participante + " ");
                }
              });
              this.data.push({
                title: index.Proyecto,
                description: index.Descripcion,
                img: "/data/images/Projects/" + index.Proyecto + ".png",
                team: team,
                id: id,
                type: index.Estado,
              });
              id++;
            });
            this.filter();
            this.showAll();
          },
        });
      },
    });
  },
};
</script>

<style>
</style>