<template>
  <div class="container fill">
    <h2 class="mt-5">{{ name }}</h2>
    <div class="row mt-5">
      <div class="col-sm-12 col-md-8">
        <img :src="image" alt="" rounded class="img-fluid" />
        <b-card
          class="mt-3"
          header-bg-variant="primary"
          header="DESCRIPTION"
          header-text-variant="light"
        >
          <b-card-body>
            {{ description }}
          </b-card-body>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="">
          <b-card
            header-bg-variant="primary"
            header="RESEARCHERS"
            header-text-variant="light"
          >
            <b-list-group flush>
              <b-list-group-item v-for="item in researchers" :key="item.uri">
                <b-link v-on:click="goToResearcher(item.uri)">{{
                  item.name
                }}</b-link>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </div>
        <div class="mt-3">
          <b-card
            header-bg-variant="primary"
            header="RESULTS"
            header-text-variant="light"
          >
            <b-list-group flush>
              <b-list-group-item v-for="item in results" :key="item.name"
                ><b-link v-on:click="goToResult(item.uri)" class=""
                  ><b>{{ item.name }}</b></b-link
                ></b-list-group-item
              >
            </b-list-group>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Papa from "papaparse";

export default {
  name: "projectcomponent",
  data() {
    return {
      image: String,
      name: String,
      description: String,
      researchers: [],
      mResearchers: [],
      students: [],
      results: [],
    };
  },
  methods: {
    loadValues() {
      let proj = window.location.pathname
        .replace("/research/projects/", "")
        .trim();
      Papa.parse("/data/Projects.csv", {
        download: true,
        header: true,
        complete: (results) => {
          let res = results.data.filter((p) => proj == p.id)[0];
          this.name = res.Project;
          this.description = res.Description;
          this.image = "/data/images/Projects/" + res.Project + ".png";
          this.researchers = [];
          Papa.parse("/data/People-Projects.csv", {
            download: true,
            header: true,
            complete: (info) => {
              let projects = info.data;
              Papa.parse("/data/People.csv", {
                download: true,
                header: true,
                complete: (people) => {
                  let p = [];
                  projects.forEach((element) => {
                    if (element.Proyecto == res.Project) {
                      people.data.forEach((per) => {
                        if (per.name == element.Participante) {
                          p.push(per);
                        }
                      });
                    }
                  });
                  p.forEach((e) => {
                    this.researchers.push({
                      name: e.name,
                      uri: "/aboutUs/team/" + e.id,
                    });
                  });
                },
              });
            },
          });
        },
      });
      this.results = [
        {
          name: "Result Example",
          uri: "https://w3.org/oeg-upm/projects/example9",
        },
        {
          name: "Result Example 2",
          uri: "https://w3.org/oeg-upm/projects/example10",
        },
      ];
    },
    goToProject(uri) {
      console.log("Project: " + uri);
    },
    goToResult(uri) {
      console.log("Result: " + uri);
    },
    goToResearcher(uri) {
      window.location.href = uri;
    },
  },
  mounted() {
    this.loadValues();
  },
};
</script>

<style>
</style>