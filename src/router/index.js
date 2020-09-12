import Vue from "vue";
import VueRouter from "vue-router";
import MemberManagement from "@/views/member-management/index.vue";
import MemberDetail from "@/views/member-detail/index.vue";
import ROUTE_PATHS from "./paths";

Vue.use(VueRouter);

const routes = [
    {
    name: "MemberManagement",
    title: "MemberManagement",
    path: ROUTE_PATHS.MEMBER_MANAGEMENT,
    meta: {
        isPublic: true,
    },
    component: MemberManagement
    },
    {
    name: "MemberManagementDetail",
    title: "MemberManagementDetail",
    path: ROUTE_PATHS.MEMBER_MANAGEMENT_DETAIL,
    meta: {
        isPublic: true,
    },
    component: MemberDetail
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
