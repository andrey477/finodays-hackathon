<template>
  <div>
    <MortgageBlock />
    <FiltersBlock />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import FiltersBlock from '@/components/FiltersBlock/FiltersBlock.vue';
import MortgageBlock from '@/components/MortgageBlock/MortgageBlock.vue';
@Component({
  components: { MortgageBlock, FiltersBlock },
})
export default class NewMortgagePage extends Vue {
  error = false;

  loading = true;
}
</script>
