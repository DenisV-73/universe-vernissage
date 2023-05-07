<template>
  <v-container>
    <h1>Hello World funzt!!!</h1>

    <v-btn @click="gotoTest">Klick to Test</v-btn>

    <p></p>

  </v-container>
</template>

<script lang="ts">
import router from "@/router";
import { Component, Vue } from "vue-property-decorator";

//NOTE - <v-html> weglassen und nur das <iframe> einbinden sollte reichen ansonsten v-html="<value>" für ausführbaren HTML Code nutzen oder :src als binding

@Component
export default class HelloWorld extends Vue {
  gotoTest() {
    router.push({ path: "/test" });
  }
}
</script>

<style scoped></style>
