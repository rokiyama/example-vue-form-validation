<template>
  <UserForm />
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import UserForm from "@/components/UserForm.vue";

export default defineComponent({
  components: {
    UserForm
  }
});
</script>
