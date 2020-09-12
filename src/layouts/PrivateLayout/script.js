import { CONSTANTS } from "@/constants";

export default {
  name: "PrivateLayout",
  components: {},
  data() {
    return {
      currentItem: "",
      dataInfo: CONSTANTS.dataInfo,
      dataList: CONSTANTS.dataList,
      menuItems: [],
      //dummy data
      groupItems: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    setCurrentItem(val) {
      if (val == this.currentItem) {
        this.currentItem = "";
      } else {
        this.currentItem = val;
      }
      this.groupItems = CONSTANTS.groupItems;
    },
    closeList() {

    }
  },
  created() {
    this.menuItems = this.$t("components.menuItems");
  }
};