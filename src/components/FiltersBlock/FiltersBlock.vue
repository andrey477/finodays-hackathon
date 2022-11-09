<template>
  <div>
    <h1>Стратегии</h1>
    <v-form ref="form">
      <v-row>
        <v-col>
          <v-text-field
            v-for="num in filters.length"
            :key="num - 1"
            v-model="filters[num - 1].name"
            label="Название стратегии"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-for="num in filters.length"
            :key="num - 1"
            v-model="filters[num - 1].operation"
            label="Операнд"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-for="num in filters.length"
            :key="num - 1"
            v-model="filters[num - 1].value"
            label="Значение"
          />
        </v-col>
      </v-row>
    </v-form>
    <v-btn @click="addCount">Добавить</v-btn>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Watch } from 'vue-property-decorator';
import { Strategy } from '@/types/strategy';

@Component
export default class FiltersBlock extends Vue {
  filters: Strategy.Filter[] = [];

  emptyFilter: Strategy.Filter = {
    name: '',
    value: '',
    operation: '',
  };

  created() {
    this.filters.push({ ...this.emptyFilter });
  }

  addCount(): void {
    this.filters.push({ ...this.emptyFilter });
  }

  @Watch('filters', { deep: true })
  changeForm(value: any) {
    console.log(this.filters);
  }
}
</script>
