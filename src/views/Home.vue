<template>
  <v-layout flex justify-center class="ma-4">
    <v-flex
      xs12
      md4
    >This is the homepage. Maybe put a dashboard here (with list of saved characters? etc.)</v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {}
</script>
