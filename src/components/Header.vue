<template>
  <v-layout>
    <v-navigation-drawer app fixed v-model="primaryDrawer"></v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="primaryDrawer = !primaryDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>OWOD</span>
        <span class="font-weight-light">Character designer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn md1 flat :href="githubUrl" target="_blank">
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-select :items="sheets" item-text="label" item-value="id"></v-select>
    </v-toolbar>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {
  @Prop()
  public sheets!: any[];
  public githubUrl: string = "https://github.com/theamazingfedex/owod-cs";
  public primaryDrawer: boolean = false;
}
</script>

<style>
</style>
