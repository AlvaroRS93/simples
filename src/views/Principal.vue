<template>
  <div>
    <div >
      <v-row >
      <v-col class="d-flex justify-end" cols="9">
        <v-card class="pa-5" max-width="1200">
          <v-row>
            <v-col cols="6" class="d-flex justify-center">
              <h5>
                Uma pessoa gosta do país em que vive e não há nada a fazer.
                Parece-me assim essencial que o país se submeta a segunda volta
                contra o doutor Mário Soares e que o Professor Doutor Aníbal
                Cavaco Silva ganhe. Assim como na direita há demasiado medo da
                segunda volta, na esquerda existem demasiadas esperanças. O
                risco de Mário Soares ganhar é muito menos grave que a falta de
                clivagem e definição do país com que inevitavelmente vamos ainda
                chegar à primeria das voltas, onde só os extremos beneficiam.
                Por essa altura Jerónimo Sousa, Francisco Louçã e Manuel Alegre
                ainda parecerão candidatos decentes, as três pessoas que
                congregam sozinhos os piores traços da nação (ainda assim com
                aspectos adoráveis, pricipalmente se andamos a ler Goethe). Bem
                sei que muitos dos que apoiam o doutor Mário Soares
              </h5>
            </v-col>
            <v-col class="d-flex justify-center">
              <v-img
                src="../assets/logo.png"
                max-width="300"
                transition="fade-transition"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="3" class="d-flex justify-end">
        <div class="yello" style="width: 300px">
          <v-col >
            <v-carousel height="300"  show-arrows-on-hover>
              <v-carousel-item
                v-for="(img, i) in imagens"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <v-img :src="img.src" contain max-height="300"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </div>
      </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    window.document.title = "Site";
  },
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