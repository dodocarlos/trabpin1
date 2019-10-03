<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline" :color="color">
        <span>Trello</span>
        <span class="font-weight-light">Gantt</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="/"
        target="_blank"
      >
        <span class="mr-2">Registrar</span>
      </v-btn>
    </v-app-bar>


      <HelloWorld/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    color: "teal"
  }),
};
</script>
