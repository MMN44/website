<template>
  <div class="container fill">
      <div class="row mt-5">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="img"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Contacto">
            <b-card-text>
              <b-list-group flush>
                  <b-list-group-item><b>{{ contacto.name }}</b></b-list-group-item>
                  <b-list-group-item>{{ contacto.lab }}</b-list-group-item>
                  <b-list-group-item>{{ contacto.centro }}</b-list-group-item>
                  <b-list-group-item>{{ contacto.universidad }}</b-list-group-item>
                  <b-list-group-item>{{ contacto.direccion }}</b-list-group-item>
                  <b-list-group-item>{{ contacto.municipio }}</b-list-group-item>
              </b-list-group>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
      </div>
  </div>
</template>

<script>
export default {
  name: "historycomponent",
  data() {
    return {
      img: {},
      contacto: {},
    };
  },
  mounted() {
    (this.img = "/data/images/location/planofi.jpg"),
      (this.contacto = {
        name: "Ontology Engineering Group (OEG)",
        lab: "Laboratorio 3206",
        centro: "Escuela Técnica Superior de Ingenieros Informáticos (ETSIINF)",
        universidad: "Universidad Politécnica de Madrid",
        direccion: "Avda. Montepríncipe, s/n",
        municipio: "Boadilla del Monte, 28660, España",
      });
  },
};
</script>

<style>
</style>