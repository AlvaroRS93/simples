<template>
  <v-app id="fundo">
    <v-row id="linhaCabecalho">
      <v-col>
        <cabecalho></cabecalho>
      </v-col>
    </v-row>
    <v-row id="linhaConteudo">
      <v-col cols="2" class="gren"> </v-col>
      <v-col cols="8">
        
        <div id="app" class="">
          <router-view class="" />

          
        </div>
      </v-col>

      <v-col class="d-none d-md-flex pa-0" cols="12" md="2" align-self="center">
        <carroussel></carroussel>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <rodape></rodape>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import Carroussel from "./components/carroussel.vue";
import Cabecalho from "./components/Cabecalho.vue";
import Rodape from "./components/Rodape.vue"

export default {
  components: {
    carroussel: Carroussel,
    cabecalho: Cabecalho,
    rodape: Rodape
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#fundo,
#rodape {
  background-color: #fefae0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
