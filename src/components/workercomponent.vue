<template>
  <div class="container fill">
    <div class="mt-5">
      <h3>{{ name }}</h3>
      <h5>{{ role }}</h5>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-8">
        <img :src="image" alt="" rounded class="img-fluid" />
        <b-card
          class="mt-3"
          header-bg-variant="primary"
          header="BIOGRAPHY"
          header-text-variant="light"
        >
          <b-list-group flush>
            <b-list-group-item>{{ bio }}</b-list-group-item>
            <b-list-group-item>
              <h5><b>Academic Background</b></h5>
              <p>{{ academicBackground }}</p>
            </b-list-group-item>
            <b-list-group-item>
              <h5><b>Awards</b></h5>
              <b-list-group>
                <b-list-group-item v-for="award in awards" :key="award.uri"
                  ><b-link v-on:click="goToAward(award.uri)"
                    ><b>{{ award.name }}</b></b-link
                  ></b-list-group-item
                >
              </b-list-group>
            </b-list-group-item>
            <b-list-group-item>
              <h5><b>Research Areas</b></h5>
              <p>{{ researchAreas }}</p>
            </b-list-group-item>
            <b-list-group-item>
              <h5><b>Hobbies</b></h5>
              <b-list-group>
                <b-list-group-item v-for="hobby in hobbies" :key="hobby">{{
                  hobby
                }}</b-list-group-item>
              </b-list-group>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="">
          <b-card
            header-bg-variant="primary"
            header="CONTACT"
            header-text-variant="light"
          >
            <b-list-group flush>
              <b-list-group-item v-for="item in contact" :key="item.name"
                ><b>{{ item.name }}</b
                >: {{ item.value }}</b-list-group-item
              >
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
  name: "workercomponent",
  data() {
    return {
      image: String,
      name: String,
      role: String,
      bio: String,
      academicBackground: String,
      researchAreas: String,
      hobbies: [],
      awards: [],
      contact: [],
      projects: [],
      results: [],
    };
  },
  methods: {
    goToAward(uri) {
      console.log("Award: " + uri);
    },
    goToProject(uri) {
      console.log("Project: " + uri);
    },
    goToResult(uri) {
      console.log("Result: " + uri);
    },
  },
  mounted() {
    let worker = window.location.pathname.replace("/aboutUs/team/", "").trim();
    Papa.parse("/data/People.csv", {
      download: true,
      header: true,
      complete: (results) => {
        let pArray = results.data.filter((index) => index.id == worker);
        let p = pArray[0];
        this.image = "/data/images/People/" + p.id + ".jpg";
        this.name = p.name;
        this.role = p.role;
        this.bio = p.biography;
        this.contact = [
          {
            name: "E-mail",
            value: p.email,
          },
          {
            name: "Contact",
            value: p.Telefono,
          },
          {
            name: "Office",
            value: p.despacho,
          },
          {
            name: "Linkedin",
            value: p.linkedin,
          },
        ];
      },
    });
    this.academicBackground =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu congue ex, nec elementum est. Praesent eget mauris vestibulum, fermentum nisl ut, tempor augue. In venenatis tellus sed tellus finibus laoreet. Sed id sodales lorem. Ut egestas massa felis, molestie gravida odio commodo non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a luctus dui. Suspendisse est sapien, maximus ornare arcu id, pellentesque aliquet diam. Donec blandit lectus vitae ipsum scelerisque, at mattis metus tempus. Mauris tellus neque, molestie eget euismod eget, tincidunt et velit. Curabitur egestas metus non libero pretium egestas. Aliquam erat volutpat. Etiam luctus nisl id gravida pharetra. Fusce rutrum dui enim, eu mollis enim ornare in. Donec gravida malesuada nunc, mollis tristique dui blandit vitae. Nullam sed ex nec purus ultricies hendrerit a vel mauris.";
    this.researchAreas =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu congue ex, nec elementum est. Praesent eget mauris vestibulum, fermentum nisl ut, tempor augue. In venenatis tellus sed tellus finibus laoreet. Sed id sodales lorem. Ut egestas massa felis, molestie gravida odio commodo non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a luctus dui. Suspendisse est sapien, maximus ornare arcu id, pellentesque aliquet diam. Donec blandit lectus vitae ipsum scelerisque, at mattis metus tempus. Mauris tellus neque, molestie eget euismod eget, tincidunt et velit. Curabitur egestas metus non libero pretium egestas. Aliquam erat volutpat. Etiam luctus nisl id gravida pharetra. Fusce rutrum dui enim, eu mollis enim ornare in. Donec gravida malesuada nunc, mollis tristique dui blandit vitae. Nullam sed ex nec purus ultricies hendrerit a vel mauris.";
    this.awards = [
      {
        name: "Award Example 2",
        uri: "https://w3.org/oeg-upm/projects/example1",
      },
      {
        name: "Award Example 3",
        uri: "https://w3.org/oeg-upm/projects/example2",
      },
      {
        name: "Award Example 4",
        uri: "https://w3.org/oeg-upm/projects/example3",
      },
      {
        name: "Award Example 5",
        uri: "https://w3.org/oeg-upm/projects/example4",
      },
    ];
    this.projects = [
      {
        name: "STARS4ALL",
        uri: "https://w3.org/oeg-upm/projects/example5",
      },
      {
        name: "Mobile Age",
        uri: "https://w3.org/oeg-upm/projects/example6",
      },
      {
        name: "Clarity",
        uri: "https://w3.org/oeg-upm/projects/example7",
      },
      {
        name: "TrandformingTransport",
        uri: "https://w3.org/oeg-upm/projects/example8",
      },
    ];
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
    this.hobbies = ["Football"];
  },
};
</script>

<style>
</style>