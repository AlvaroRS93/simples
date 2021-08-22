<template>
  <div>
    <div class="d-flex justify-center">
      <v-img
        class="ma-3"
        max-height="150"
        max-width="250"
        src="../assets/logo.png"
      ></v-img>
    </div>

    <div id="nav" class="d-none d-md-flex justify-center">
      <v-app-bar
        class="d-flex justify-center primary"
        elevation="3"
        max-width="1200"
      >
        <v-btn class="primary black--text" depressed @click="mudarTela('/')"
          >Principal</v-btn
        >
        <v-btn
          class="primary black--text"
          depressed
          @click="mudarTela('/contato')"
          >Contato</v-btn
        >
        <v-btn
          class="primary black--text"
          depressed
          @click="mudarTela('/quem-somos')"
          >Quem Somos</v-btn
        >
        <v-btn
          class="primary black--text"
          depressed
          @click="mudarTela('/servicos')"
          >Serviços</v-btn
        >        
      </v-app-bar>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    mudarTela: function (tela) {
      this.$router.push(tela);
    },
  },
};
</script>