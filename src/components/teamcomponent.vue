<template>
  <div class="container fill">
    <div class="row">
      <div
        v-for="worker in team"
        :key="worker.name"
        class="col-sm-12 col-lg-4 mt-5"
      >
        <b-card
          v-on:click="goToWorker(worker.id)"
          class="pointer"
          :title="worker.name"
          :sub-title="worker.role"
          :img-src="worker.image"
        >
          <hr />
          <div class="row">
            <div class="col" v-for="link in worker.links" :key="link.link">
              <span v-if="link.icon == ''"
                ><a :href="link.link">{{ link.name }}</a></span
              >
              <a v-else :href="link.link"
                ><font-awesome-icon :icon="[link.type, link.icon]" size="lg"
              /></a>
            </div>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import * as Papa from "papaparse";

export default {
  name: "teamcomponent",
  data() {
    return {
      team: [],
    };
  },
  methods: {
    goToWorker(id) {
      console.log("Checking: " + id);
    },
  },
  mounted() {
    this.team = [];
    let data = [];
    Papa.parse("/data/People.csv", {
      download: true,
      header: true,
      complete: (results) => {
        data.push(results.data);
        data.forEach((index) => {
          index.forEach((p) => {
            if (p.status == "active") {
              let person = {
                id: p.id != "" ? p.id : null,
                name: p.name != "" ? p.name : "Desconocido",
                role: p.role != "" ? p.role : "Desconocido",
                //Hay que plantear si introducir el nombre de la imagen de cada uno en el CSV para poder relacionarla con su elemento al crearlo
                image: "/data/images/People/" + p.id + ".jpg",
                links: [],
              };
              //Solo se añaden los links activos del miembro
              p.facebook && p.facebook != ""
                ? person.links.push({
                    name: "Facebook",
                    link: p.facebook,
                    icon: "facebook",
                    type: "fab",
                    id: "" + person.links.length - 1,
                  })
                : null;

              p.linkedin && p.linkedin != ""
                ? person.links.push({
                    name: "Linkedin",
                    link: p.linkedin,
                    icon: "linkedin",
                    type: "fab",
                    id: "" + person.links.length - 1,
                  })
                : null;

              p.twitter && p.twitter != ""
                ? person.links.push({
                    name: "twitter",
                    link: "https://www.twitter.com/" + p.twitter,
                    icon: "twitter",
                    type: "fab",
                    id: "" + person.links.length - 1,
                  })
                : null;

              this.team.push(person);
            }
          });
        });
      },
    });
  },
};
</script>

<style>
</style>