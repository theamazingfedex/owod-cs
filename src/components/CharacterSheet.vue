<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <p>{{sheetType}}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class CharacterSheet extends Vue {
  @Prop()
  public sheetType!: string;
}
</script>

<style>
</style>
