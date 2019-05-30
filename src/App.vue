<template>
  <v-app dark>
    <v-navigation-drawer app fixed v-model="primaryDrawer"></v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="primaryDrawer = !primaryDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>OWOD</span>
        <span class="font-weight-light">Character designer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
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
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  public name: string = 'App';
  public copyYear: number = new Date().getFullYear();
  public primaryDrawer: boolean = false;
  public mounted() {
    this.primaryDrawer = false;
  }
}
</script>
