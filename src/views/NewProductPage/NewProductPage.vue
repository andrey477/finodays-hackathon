<template>
  <div></div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Filter } from '@/types/filter';
import { getFilterBlocks } from '@/api/filter';

@Component
export default class NewProductPage extends Vue {
  filters: Filter.Response[] = [];

  error = false;

  loading = true;

  created(): void {
    this.fetchFilterBlocks();
  }

  async fetchFilterBlocks(): Promise<void> {
    try {
      this.loading = true;
      this.filters = await getFilterBlocks();
    } catch (error) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  }

  // // TODO delete
  // async fetchFakeApi() {
  //   try {
  //     this.filters = await getPosts();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
</script>
