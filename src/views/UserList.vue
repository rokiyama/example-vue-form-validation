<template>
    <UserList :users="users" />
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import UserList from "@/components/UserList.vue";
import { Technologies } from "@/constants"

export default defineComponent({
  components: {
    UserList
  },
  setup() {
    return {
      users: [{id: 1, displayName: "user1", email: "user1@example.com", interested: Technologies. }]
    }
  }
});
</script>
