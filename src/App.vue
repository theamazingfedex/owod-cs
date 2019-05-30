<template>
  <v-app dark>
    <Header/>
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
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { Header },
})
export default class App extends Vue {
  public name: string = 'App';
  public copyYear: number = new Date().getFullYear();
}
</script>
