<template>
  <div>
    <div>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-card class="primary pa-5" max-width="1200" dense>
            <div class="mb-5">
              <h1>Título do texto</h1>
            </div>
            <v-row>
              <v-col cols="8" class="d-flex justify-center">
                <h5>
                  Uma pessoa gosta do país em que vive e não há nada a fazer.
                  Parece-me assim essencial que o país se submeta a segunda
                  volta contra o doutor Mário Soares e que o Professor Doutor
                  Aníbal Cavaco Silva ganhe. Assim como na direita há demasiado
                  medo da segunda volta, na esquerda existem demasiadas
                  esperanças. O risco de Mário Soares ganhar é muito menos grave
                  que a falta de clivagem e definição do país com que
                  inevitavelmente vamos ainda chegar à primeria das voltas, onde
                  só os extremos beneficiam. Por essa altura Jerónimo Sousa,
                  Francisco Louçã e Manuel Alegre ainda parecerão candidatos
                  decentes, as três pessoas que congregam sozinhos os piores
                  traços da nação (ainda assim com aspectos adoráveis,
                  pricipalmente se andamos a ler Goethe). Bem sei que muitos dos
                  que apoiam o doutor Mário Soares
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
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    window.document.title = "Site";
  },
};
</script>