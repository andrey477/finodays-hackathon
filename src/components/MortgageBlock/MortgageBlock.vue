<template>
  <div>
    <h1>Ипотека</h1>
    <v-form ref="form">
      <v-row>
        <v-col>
          <v-text-field v-model="mortgage.name" label="Название ипотеки" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="mortgage.percent"
            label="Процентная ставка"
            type="number"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="mortgage.maxSum"
            label="Максимальная сумма кредита"
            type="number"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="mortgage.years"
            label="Максимальный срок кредита"
            type="number"
          />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Strategy } from '@/types/strategy';
import { Watch } from 'vue-property-decorator';

@Component
export default class MortgageBlock extends Vue {
  mortgage: Strategy.Mortgage = {
    name: undefined,
    percent: undefined,
    maxSum: undefined,
    years: undefined,
  };

  @Watch('mortgage', { deep: true })
  changeMortgage(value: any) {
    console.log(this.mortgage);
  }
}
</script>
