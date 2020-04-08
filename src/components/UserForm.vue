<template>
  <form @submit.prevent="onSubmit">
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>

    <div>
      <label for="name">Name</label>
      <input v-model="name" type="text" />
    </div>

    <div>
      <label for="email">Email</label>
      <input v-model="email" type="email" min="0" />
    </div>

    <div>
      <label for="interested">Interested technology</label>
      <div v-for="technology in technologies" :key="technology">
        <input type="radio" v-model="interested" :value="technology" />
        <label :for="technology">{{ technology }}</label>
      </div>
      <div v-show="interested === OTHER_TECHNOLOGY">
        <input v-model="otherTechnology" type="text" />
      </div>
    </div>

    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

const OTHER_TECHNOLOGY = "Other";

export default defineComponent({
  setup() {
    const technologies = ["Vue.js", "React", "Angular", OTHER_TECHNOLOGY];
    const state = reactive({
      errors: [] as Array<string>,
      name: null,
      email: null,
      interested: null,
      otherTechnology: null
    });
    return {
      technologies,
      OTHER_TECHNOLOGY,
      ...toRefs(state),
      onSubmit() {
        state.errors = [];
        if (!state.name) {
          state.errors.push("Name required.");
        }
        if (!state.email) {
          state.errors.push("Email required.");
        }
        if (!state.interested) {
          state.errors.push("Interested required.");
        } else if (
          state.interested === OTHER_TECHNOLOGY &&
          !state.otherTechnology
        ) {
          state.errors.push("Other technology required if you choos 'Other'.");
        }
        if (state.errors.length < 1) {
          console.log(
            "Validation OK",
            state.name,
            state.email,
            state.interested
          );
        }
      }
    };
  }
});
</script>
