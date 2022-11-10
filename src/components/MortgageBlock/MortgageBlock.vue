<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          v-model="mortgage.name"
          label="Название ипотеки"
          :rules="[requiredRule]"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="mortgage.percent"
          label="Процентная ставка"
          type="number"
          :rules="[requiredRule]"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="mortgage.maxSum"
          label="Максимальная сумма кредита"
          type="number"
          :rules="[requiredRule]"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="mortgage.years"
          label="Максимальный срок кредита"
          type="number"
          :rules="[requiredRule]"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Strategy } from '@/types/strategy';
import { Watch } from 'vue-property-decorator';
import { requiredRule } from '@/utils/utils';

@Component
export default class MortgageBlock extends Vue {
  mortgage: Strategy.Mortgage = {
    name: undefined,
    percent: undefined,
    maxSum: undefined,
    years: undefined,
  };

  requiredRule = requiredRule;

  @Watch('mortgage', { deep: true })
  changeMortgage(value: any) {
    console.log(this.mortgage);
    this.$emit('changeMortgage', this.mortgage);
  }
}
</script>
