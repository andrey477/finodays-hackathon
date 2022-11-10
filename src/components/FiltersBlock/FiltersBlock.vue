<template>
  <div>
    <h1>Стратегии</h1>
    <v-form ref="form">
      <v-row>
        <v-col>
          <v-text-field
            v-for="num in strategies.length"
            :key="num - 1"
            v-model="strategies[num - 1].name"
            label="Название стратегии"
          />
        </v-col>
        <v-col>
          <v-select
            v-for="num in strategies.length"
            :key="num - 1"
            v-model="strategies[num - 1].operation"
            :items="operands"
            label="Операнд"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            v-for="num in strategies.length"
            :key="num - 1"
            v-model="strategies[num - 1].value"
            label="Значение"
          />
        </v-col>
      </v-row>
    </v-form>
    <v-btn @click="addCount" color="primary">Добавить</v-btn>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Watch } from 'vue-property-decorator';
import { Strategy } from '@/types/strategy';

@Component
export default class FiltersBlock extends Vue {
  strategies: Strategy.Filter[] = [];

  operands = ['>', '<', '='];

  emptyFilter: Strategy.Filter = {
    name: '',
    value: '',
    operation: '',
  };

  created() {
    this.strategies.push({ ...this.emptyFilter });
  }

  addCount(): void {
    this.strategies.push({ ...this.emptyFilter });
  }

  @Watch('strategies', { deep: true })
  changeForm(value: any) {
    console.log(this.strategies);
    this.$emit('changeStrategies', this.strategies);
  }
}
</script>
