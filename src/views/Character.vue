<template>
  <v-layout>
    <CharacterSheet msg="This is a message from the view, sent via the prop"/>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CharacterSheet from "@/components/CharacterSheet.vue"; // @ is an alias to /src

@Component({
  components: {
    CharacterSheet,
  },
})
export default class Character extends Vue {}
</script>
