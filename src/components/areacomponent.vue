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
            <p>{{ description }}</p>
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
              <b-list-group-item>
                <h6><b>Main Researchers</b></h6>
                <h6>
                  <span v-for="(item, index) in mResearchers" :key="item.uri"
                    >{{ item.name
                    }}<span
                      v-if="
                        mResearchers.length > 1 &&
                        index < mResearchers.length - 1
                      "
                      >,
                    </span>
                  </span>
                </h6>
              </b-list-group-item>
              <b-list-group-item>
                <h6><b>Researchers</b></h6>
                <h6>
                  <span v-for="(item, index) in researchers" :key="item.uri"
                    >{{ item.name
                    }}<span
                      v-if="
                        researchers.length > 1 && index < researchers.length - 1
                      "
                      >,
                    </span>
                  </span>
                </h6>
              </b-list-group-item>
              <b-list-group-item>
                <h6><b>PhD Students</b></h6>
                <h6>
                  <span v-for="(item, index) in students" :key="item.uri"
                    >{{ item.name
                    }}<span
                      v-if="students.length > 1 && index < students.length - 1"
                      >,
                    </span>
                  </span>
                </h6>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </div>
        <div class="mt-3">
          <b-card
            header-bg-variant="primary"
            header="PROJECTS"
            header-text-variant="light"
          >
            <b-list-group flush>
              <b-list-group-item v-for="item in projects" :key="item.name"
                ><b-link v-on:click="goToProject(item.uri)" class=""
                  ><b>{{ item.name }}</b></b-link
                ></b-list-group-item
              >
            </b-list-group>
            <b-button block class="mt-3" variant="info">View All</b-button>
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
            <b-button block class="mt-3" variant="info">View All</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Papa from "papaparse";

export default {
  name: "areacomponent",
  data() {
    return {
      image: String,
      name: String,
      description: String,
      researchers: [],
      mResearchers: [],
      students: [],
      projects: [],
      results: [],
    };
  },
  methods: {
    loadValues() {
      let area = window.location.pathname
        .replace("/research/areas/", "")
        .trim();
      Papa.parse("/data/ResearchAreas.csv", {
        download: true,
        header: true,
        complete: (results) => {
          let resArea = results.data.filter((index) => index.id == area)[0];
          this.name = resArea.AreasdeInvestigacion;
          this.description = resArea.Description;
          Papa.parse("/data/People-ResearchArea.csv", {
            download: true,
            header: true,
            complete: (ppResults) => {
              let pplArea = ppResults.data.filter((elem) => elem.id_research_area == area);
              let pplProj = [];
              pplArea.forEach((proj) => {
                proj.id_people != "" ? pplProj.push(proj.id_people) : '';
              });
              Papa.parse("/data/People.csv", {
                download: true,
                header: true,
                complete: (pplResults) => {
                  let people = pplResults.data;
                  pplProj.forEach((elem) => {
                    let person = people.filter((p) => p.id == elem)[0];
                    if (person) {
                      let role = person.role.toLowerCase();
                      if (
                        role === "research assistant" ||
                        role === "associate professor"
                      ) {
                        this.researchers.push({
                          name: person.name,
                          uri: "/aboutUs/team/" + person.id,
                        });
                      } else if (
                        role === "full professor" ||
                        role === "distinguished researcher"
                      ) {
                        this.mResearchers.push({
                          name: person.name,
                          uri: "/aboutUs/team/" + person.id,
                        });
                      } else {
                        this.students.push({
                          name: person.name,
                          uri: "/aboutUs/team/" + person.id,
                        });
                      }
                    }
                  });
                },
              });
              Papa.parse("/data/Projects-ResearchArea.csv", {
                download: true,
                header: true,
                complete: (projResults) => {
                  let projArea = projResults.data.filter((elem) => elem.id_research_area == area);
                  projArea.forEach((proj) => {
                    this.projects.push(
                      {
                        name: proj.Proyecto,
                        uri: '/research/projects/' + proj.id_project
                      }
                    )
                  })
                }
              })
            },
          });
        },
      });
      this.image = "https://picsum.photos/id/385/800/500?grayscale";
    },
    goToProject(uri) {
      window.location.href = uri;
    },
    goToResult(uri) {
      console.log("Result: " + uri);
    },
  },
  mounted() {
    this.loadValues();
  },
};
</script>

<style>
</style>