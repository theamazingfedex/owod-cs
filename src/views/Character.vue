<template>
  <v-layout fill-height flex wrap>
    Character Sheet
    <CharacterSheet/>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharacterSheet from '@/components/CharacterSheet.vue'; // @ is an alias to /src

@Component({
  components: {
    CharacterSheet,
  },
})
export default class Character extends Vue {}
</script>
