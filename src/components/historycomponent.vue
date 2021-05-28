<template>
  <div class="container fill">
    <h1 class="mt-5">History</h1>
      <p class="mt-5">{{ history }}</p>
    <div class="row mt-5">
      <div class="col-sm-12 col-lg-4">
        <h4>Directors:</h4>
        <b-list-group flush>
          <b-list-group-item v-for="director in directors" :key="director.id"
            ><b-link v-on:click="goToWorker(director.id)">{{
              director.name
            }}</b-link></b-list-group-item
          >
        </b-list-group>
      </div>
      <div class="col-sm-12 col-lg-4">
        <h4>Researchers: +{{ researchers }}</h4>
      </div>
      <div class="col-sm-12 col-lg-4">
        <h4>Collaborators: +{{ collaborators }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "historycomponent",
  data() {
    return {
      history: String,
      directors: [],
      researchers: Number,
      collaborators: Number,
      data: {},
    };
  },
  methods: {
    filter() {
      this.history = this.data["history"];
      this.directors = this.data["directors"];
      this.researchers = this.data["researchers"];
      this.collaborators = this.data["collaborators"];
    },
    goToWorker(id) {
      document.location.href = "/aboutUs/team/" + id;
    },
  },
  mounted() {
    this.data = {
      history: `The Ontology Engineering Group (OEG) is based at the Computer Science School at Universidad Politécnica de Madrid (UPM). It ranks eighth among the two hundred research groups from UPM and it is widely recognised in Europe in the areas of Ontology Engineering, Semantic Infrastructure, Linked Data, and Data Integration. Our main research areas are: Ontological Engineering, (Social) Semantic Web and Linked Data, Natural Language, Semantic e-Science and the Future Internet.

The most relevant achievements obtained by the group are:

-Methontology (now deprecated) and the NeOn Methodology, a scenario-based methodology for developing ontology networks that provided guidance on all the key aspects of the ontology engineering process, including collaborative ontology development, the reuse of ontological and non-ontological resources, and the evolution and maintenance of networked ontologies;
-OOPS!, a web-based evaluation tool for ontologies;
-Morph, a family of tools that exploit the W3C recommendation R2RML to allow accessing legacy relational databases, data streams and Google Fusion Tables using SPARQL or data streaming extensions of it;
-Marimba, a tool to transform library records in MARC 21 format to Linked Data;
-geometry2rdf and map4rdf, tools for the transformation of geographical information to Linked Data and its exploitation through faceted browsing;
-SPARQL-DQP a system that optimizes federated SPARQL queries; and
-Sem4Tags, a multilingual tool that given an input tag in English or Spanish and a context generates as a result a DBpedia resource representing the tag meaning
-Finally, the group has developed applications in a wide range of domains, including knowledge management, software Application Lifecycle Management, e-commerce, job and funding search, geo-localisation, R&D project management, etc.

Special mention deserves Linked Data applications in partnership with the National Geographic Institute of Spain (GeolinkedData), the Spanish National Library (datos.bne.es), Prisa Digital (El Viajero) and Fundeu (Terminesp). In addition, OEG maintains the Spanish chapter of DBpedia, and has participated and is currently participating in many standardization activities at the W3C such as the Linked Data Platform specification, PROV-O provenance ontology, Sensor Network Ontology, Ontolex model for ontology-lexica, Best practices for Multilingual Linked Open Data. We have also participated in ISO/TC 37 Committee activities within the SC 4 and in the ISO/TC 37/TCG /Terminology Coordination Group.`,
      directors: [
        { name: "Asunción Gómez Pérez", id: "asun_oeg" },
        { name: "Oscar Corcho", id: "ocorcho" },
      ],
      researchers: 30,
      collaborators: 150,
    };
    this.filter();
  },
};
</script>

<style>
p {
    white-space: pre-wrap;
    text-align: justify;
    text-justify: inter-word;
}
</style>