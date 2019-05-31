<template>
  <v-app dark>
    <Header :sheets="sheetOptions"/>
    <v-layout>
      <router-view/>
    </v-layout>
    <v-footer app fixed inset class="pa-3">
      owod-cs vueJS Implementation
      <v-spacer/>
      &copy; {{copyYear}} - Some copyright information
    </v-footer>
  </v-app>
</template>

<style lang="scss">
html {
  overflow: hidden;
}
</style>

<script lang="ts">
import Header from "@/components/Header.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { Header },
})
export default class App extends Vue {
  public name: string = "App";
  public copyYear: number = new Date().getFullYear();
  public sheetOptions: any[] = [
    { id: 0, label: "Demon the Fallen", route: "demon" },
    { id: 1, label: "Mage the Ascension", route: "mage" },
    { id: 2, label: "Changeling", route: "changeling" },
    { id: 3, label: "Wraith", route: "wraith" },
    { id: 4, label: "Hunter: The Reckoning", route: "hunter" },
  ];
}
</script>
