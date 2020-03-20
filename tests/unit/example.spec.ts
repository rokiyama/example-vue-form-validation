import { shallowMount } from "@vue/test-utils";
import UserRegisterForm from "@/components/UserRegisterForm.vue";

describe("UserRegisterForm.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(UserRegisterForm, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
