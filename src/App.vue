<template>
  <v-theme-provider light>
    <v-app>
      <Header />
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import './assets/colors.scss';
import './assets/style.scss';

@Component({
  components: { Header },
})
export default class App extends Vue {}
</script>
