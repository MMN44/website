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
import { csvReader } from "../scripts/csvReader.js";

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
    let results = csvReader.read("../../data/People.csv");

    //Pruebas para ver que funciona la generación dinámica de miembros
    results = [
      {
        id: "0",
        name: "prueba1",
        role: "activo",
        status: "active",
        image: "../../data/images/People/unknown-man.jpg",
        facebook: "https://www.facebook.com",
      },
      { id: "1", name: "prueba2", role: "noactivo" },
      {
        id: "2",
        name: "",
        role: "activo",
        status: "active",
        linkedin: "https://www.linkedin.com",
        twitter: "https://www.twitter.com",
      },
      {
        id: "3",
        name: "",
        role: "activo",
        status: "active",
        facebook: "https://www.facebook.com",
        linkedin: "https://www.linkedin.com",
        twitter: "https://www.twitter.com",
      },
      {
        id: "4",
        name: "Prueba5",
        role: "activo",
        status: "active",
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
      },
    ];
    //-----------------------------------------------------------------

    //En progreso una clase que pueda leer cualquier CSV dandole su URL, de lo unico que falla es la obtención de los elementos desde el lado cliente
    results.forEach((p) => {
      if (p.status == "active") {
        let person = {
          id: p.id != "" ? p.id : null,
          name: p.name != "" ? p.name : "Desconocido",
          role: p.role != "" ? p.role : "Desconocido",
          //Hay que plantear si introducir el nombre de la imagen de cada uno en el CSV para poder relacionarla con su elemento al crearlo
          image: "~/data/images/People/unknown-man.jpg",
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
              link: p.twitter,
              icon: "twitter",
              type: "fab",
              id: "" + person.links.length - 1,
            })
          : null;

        this.team.push(person);
      }
    });

    /*
        this.team = [
            {
                id:'10012',
                name:'Luis Pozo Gilo',
                role:'Degree Student',
                image:'https://picsum.photos/id/620/300/200',
                links:[
        {
          name:'Facebook',
          link:'#',
          icon:'facebook',
          type:'fab',
          id:'0'
        },
        {
          name:'Linkedin',
          link:'#',
          icon:'linkedin',
          type:'fab',
          id:'1'
        },
        {
          name:'Twitter',
          link:'#',
          icon:'twitter',
          type:'fab',
          id:'2'
        }
                ]

            },
            {
                id:'10012',
                name:'Luis Pozo Gilo',
                role:'Degree Student',
                image:'https://picsum.photos/id/620/300/200',
                links:[
        {
          name:'Facebook',
          link:'#',
          icon:'facebook',
          type:'fab',
          id:'0'
        },
        {
          name:'Linkedin',
          link:'#',
          icon:'linkedin',
          type:'fab',
          id:'1'
        },
        {
          name:'Twitter',
          link:'#',
          icon:'twitter',
          type:'fab',
          id:'2'
        }
                ]

            },
            {
                id:'10012',
                name:'Luis Pozo Gilo',
                role:'Degree Student',
                image:'https://picsum.photos/id/620/300/200',
                links:[
        {
          name:'Facebook',
          link:'#',
          icon:'facebook',
          type:'fab',
          id:'0'
        },
        {
          name:'Linkedin',
          link:'#',
          icon:'linkedin',
          type:'fab',
          id:'1'
        },
        {
          name:'Twitter',
          link:'#',
          icon:'twitter',
          type:'fab',
          id:'2'
        }
                ]

            },
            {
                id:'10012',
                name:'Luis Pozo Gilo',
                role:'Degree Student',
                image:'https://picsum.photos/id/620/300/200',
                links:[
        {
          name:'Facebook',
          link:'#',
          icon:'facebook',
          type:'fab',
          id:'0'
        },
        {
          name:'Linkedin',
          link:'#',
          icon:'linkedin',
          type:'fab',
          id:'1'
        },
        {
          name:'Twitter',
          link:'#',
          icon:'twitter',
          type:'fab',
          id:'2'
        }
                ]

            },
            {
                id:'10012',
                name:'Luis Pozo Gilo',
                role:'Degree Student',
                image:'https://picsum.photos/id/620/300/200',
                links:[
        {
          name:'Facebook',
          link:'#',
          icon:'facebook',
          type:'fab',
          id:'0'
        },
        {
          name:'Linkedin',
          link:'#',
          icon:'linkedin',
          type:'fab',
          id:'1'
        },
        {
          name:'Twitter',
          link:'#',
          icon:'twitter',
          type:'fab',
          id:'2'
        }
                ]

            }                                                
        ]
        */
  },
};
</script>

<style>
</style>