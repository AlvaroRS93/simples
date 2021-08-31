<template>
  <v-footer dark id="rodape" class="mb-5 d-none d-md-block justify-center">
    <v-card
      max-width="100%"
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
</template>