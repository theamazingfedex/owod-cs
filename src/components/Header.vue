<template>
  <v-layout fill-height>
    <v-navigation-drawer app fixed v-model="primaryDrawer"></v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="primaryDrawer = !primaryDrawer"></v-toolbar-side-icon>
      <v-btn to="/" flat>
        <v-toolbar-title class="headline text-uppercase">
          <span>OWOD</span>
          <span class="font-weight-light">Character designer</span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn md1 flat :href="githubUrl" target="_blank">
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-select
        :items="sheets"
        item-text="label"
        item-value="id"
        placeholder="Select Character Sheet"
      ></v-select>
    </v-toolbar>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Character from '../views/Character.vue';
import CharacterSheet from '@/types/Model';

@Component({})
export default class Header extends Vue {
  @Prop()
  public sheets!: CharacterSheet[];
  public githubUrl: string = 'https://github.com/theamazingfedex/owod-cs';
  public primaryDrawer: boolean = false;
}
</script>

<style>
</style>
