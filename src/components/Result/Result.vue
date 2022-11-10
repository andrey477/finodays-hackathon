<template>
  <v-alert v-if="result" dense text type="success">
    Ваша заявка одобрена
  </v-alert>
  <v-alert v-else dense outlined type="error"> В заявке отказано </v-alert>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

@Component
export default class Result extends Vue {
  @Prop({ type: Boolean, required: true }) readonly result: boolean;
}
</script>
