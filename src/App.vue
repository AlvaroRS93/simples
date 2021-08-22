<template>
  <v-app id="fundo">
    <v-row>
      <v-col cols="2" class="gren"> </v-col>
      <v-col cols="8">
        <cabecalho></cabecalho>
        <div id="app" class="">
          <router-view class="" />

          <v-footer fixed dark id="rodape" class="mb-5 d-flex justify-center">
            <v-card
              width="1200"
              max-height="100"
              elevation="10"
              class="primary black--text text-center"
            >
              <v-card-text class="mt-n2">
                <v-btn
                  class="mx-2 black--text"
                  icon
                  href="https://www.instagram.com/alvarors_93/"
                  target="_blank"
                >
                  <v-icon size="30px"> mdi-instagram </v-icon>
                </v-btn>
              </v-card-text>

              <v-divider class="mx-5 mt-n2 grey"></v-divider>

              <v-card-text class="mt-n2 black--text">
                {{ new Date().getFullYear() }} —
                <strong>Desenvolvido por Alvaro Rodrigues</strong>
              </v-card-text>
            </v-card>
          </v-footer>
        </div>
      </v-col>

      <v-col class="" cols="2" align-self="center">
        <div class="d-flex justify-center">
          <carroussel></carroussel>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import Carroussel from "./components/carroussel.vue";
import Cabecalho from "./components/Cabecalho.vue";

export default {
  components: {
    carroussel: Carroussel,
    cabecalho: Cabecalho,
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
