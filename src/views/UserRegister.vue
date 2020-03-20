<template>
  <div class="home">
    <UserRegisterForm />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import UserRegisterForm from "@/components/UserRegisterForm.vue";

export default defineComponent({
  components: {
    UserRegisterForm
  }
});
</script>
