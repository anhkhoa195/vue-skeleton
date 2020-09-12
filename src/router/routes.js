import ROUTE_PATHS from "./paths";
import MemberManagement from "@/views/member-management/index.vue";
import MemberDetail from "@/views/member-detail/index.vue";

export default [
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
