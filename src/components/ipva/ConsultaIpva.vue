<template>
  <div>
    <PageTitle icon="fa fa-car" main="Consultar IPVA" sub="Teste de Consulta IPVA"/>

  <div>{{dar}}</div>
  <div>{{semNulos}}</div>
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "ConsultaIpva",
  components: { PageTitle },
  data: function() {
    return {
      exercicio: "2019",
      renavam: "00467804532",
      dar: null
    };
  },
  methods: {
    getDarIpva() {
      axios
        .get(
          `${baseApiUrl}/consultarIPVA?exercicio=${this.exercicio}&renavam=${
            this.renavam
          }`
        )
        .then(res => this.dar = res.data.responseConsultarIPVA)
        
    }
  },
  computed: {
      semNulos : function() {
          setTimeout(
              console.log()   
          ,10*1000)    
      } 
  },
  mounted() {
    this.getDarIpva();
  }
};
</script>

<style>
</style>
