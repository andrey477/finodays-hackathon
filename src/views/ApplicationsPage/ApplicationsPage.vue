<template>
  <v-container class="container">
    <Loader v-if="loading" />
    <div v-if="applications && !loading">
      <h1>Список заявок</h1>
      <div class="mt-6">
        <application-card
          v-for="application in applications.result"
          :key="application.id"
          :result="application"
        />
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { CreditApplication } from '@/types/creditApplication';
import { getAllApplication } from '@/api/mortgage';
import ApplicationCard from '@/components/ApplicationCard/ApplicationCard.vue';
import Loader from '@/components/Loader/Loader.vue';
@Component({
  components: { Loader, ApplicationCard },
})
export default class ApplicationsPage extends Vue {
  applications: CreditApplication.All.Data | null = null;

  loading = false;

  created(): void {
    this.fetchApplications();
  }

  async fetchApplications(): Promise<void> {
    try {
      this.loading = true;
      this.applications = await getAllApplication();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  max-width: 800px;
}
</style>
