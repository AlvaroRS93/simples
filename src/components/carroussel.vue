<template>
  <v-col>
    <div>
      <v-card elevation="10">
        <v-col>
          <v-carousel cycle height="300" show-arrows-on-hover>
            <v-carousel-item
              v-for="(img, i) in imagens"
              :key="i"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <v-img :src="img.src" contain max-height="350"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-card>
    </div>
  </v-col>
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