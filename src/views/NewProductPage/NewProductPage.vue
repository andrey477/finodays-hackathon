<template>
  <div>
    <FiltersBlock />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Filter } from '@/types/filter';
import { getFilterBlocks } from '@/api/filter';
import FiltersBlock from '@/components/FiltersBlock/FiltersBlock.vue';
import { getPosts, testApi } from "@/api/fake";
@Component({
  components: { FiltersBlock },
})
export default class NewProductPage extends Vue {
  filters: Filter.Response[] = [];

  error = false;

  loading = true;

  created(): void {
    // this.fetchFilterBlocks();
    this.fetchFakeApi();
    this.fetchFakeApi1();
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

  // TODO delete
  async fetchFakeApi() {
    try {
      await testApi();
    } catch (error) {
      console.error(error);
    }
  }

  async fetchFakeApi1() {
    try {
      await getPosts();
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
