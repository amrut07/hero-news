// We can attach props to route to fetch the right article and redirect page to the proper direction.
// Here I'm pass the meta static value but we can achieve this functionality with extra logic.
import { createWebHistory, createRouter } from "vue-router";
import HeadTemplate from "@/views/head-news/HeadTemplate.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HeadTemplate,
    meta: { field_id: "128666", field_type: "landing_page" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// router.beforeEach(async (to) => {
//   if (to.path === "/") {
//     return nextTick();
//   }
// });
export default router;
