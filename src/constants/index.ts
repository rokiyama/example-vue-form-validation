const Technology = {
  VueJS: "Vue.js",
  React: "React",
  Angular: "Angular",
  Other: "Other"
};
export type Technologies = typeof Technology[keyof typeof Technology];
