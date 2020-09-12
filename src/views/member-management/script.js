import TableTemplate from "@/components/TableTemplate/index.vue";
import Button from "@/components/Button/index.vue";
import { CONSTANTS } from "@/constants";

export default {
  name: "MemberManagement",
  components: {
    TableTemplate,
    Button
  },
  data() {
    return {
      tableHeaders: CONSTANTS.tableHeaders,
      tableDatas: CONSTANTS.dataTable,
      isFilter: true,
      filter: 0

    };
  },
  watch: {},
  computed: {},
  methods: {
    /**
     * Clear conditions search
     */
    clearConditions() {

    }
  },
  created() { },
};