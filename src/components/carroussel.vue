<template>
  <div class="ma-3 d-flex justify-start">
    <v-card class="primary" width="285" height="" elevation="10">
      <v-card-text class="pb-0 font-weight-bold black--text text-h6" style="wordword-break: normal !important" >
        Também estamos no Instagram!        
      </v-card-text>
      <v-col>
        <v-carousel cycle height="250" show-arrows-on-hover hide-delimiters>
          <v-carousel-item
            v-for="(img, i) in imagens"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-img :src="img.src" contain max-width="500"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <div class="d-flex justify-center mb-2">
        <v-btn
          elevation="5"
          fab
          icon
          target="_blank"
          href="https://www.instagram.com/simples_solucoesfinanceiras"
        >
          <v-icon class="black--text" large>mdi-instagram</v-icon>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      imagens: [
        { src: require("../assets/slides/01.jpeg") },
        { src: require("../assets/slides/02.jpeg") },
        { src: require("../assets/slides/03.jpeg") },
        { src: require("../assets/slides/04.jpeg") },
      ],
    };
  },
};
</script>