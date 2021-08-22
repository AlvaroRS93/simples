<template>

    <div class=" ma-3 d-flex justify-center">
      <v-card width="600" height="" elevation="10">
        <v-col>
          <v-carousel cycle height="300" show-arrows-on-hover>
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