<template>
  <v-alert v-if="result" dense text type="success">
    {{ successText }}
  </v-alert>
  <v-alert v-else dense outlined type="error"> {{ canceledText }} </v-alert>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

@Component
export default class Result extends Vue {
  @Prop({ type: Boolean, required: true }) readonly result: boolean;

  @Prop({ type: String, default: 'Ваша заявка одобрена' })
  readonly successText: string;

  @Prop({ type: String, default: 'Ваша заявка отклонена' })
  readonly canceledText: string;
}
</script>
