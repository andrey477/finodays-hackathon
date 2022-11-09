<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="form.name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="form.email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="form.select"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="form.checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
  </v-form>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class FiltersBlock extends Vue {
  form = {
    name: '',
    email: '',
    select: null,
    checkbox: false,
  };

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  valid = true;

  mounted() {
    console.log(this.$refs.form);
  }

  get nameRules(): any[] {
    return [
      (v: any) => !!v || 'Name is required',
      (v: any) =>
        (v && v.length <= 10) || 'Name must be less than 10 characters',
    ];
  }

  get emailRules(): any[] {
    return [
      (v: any) => !!v || 'E-mail is required',
      (v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ];
  }

  // validate() {
  //   this.$refs.form.validate();
  // }
  //
  // reset() {
  //   this.$refs?.form?.reset();
  // }
  //
  // resetValidation() {
  //   this.$refs.form.resetValidation();
  // }
}
</script>
