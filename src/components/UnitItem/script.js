import { formatDateTime } from "@/utils/common";

export default {
  name: "UnitItem",
  props: {
    title: {
      type: String,
      default: "",
    },
    listItems: {
      type: Array,
      default: [],
    },
    requiredField: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * Format date YYYY/MM/DD hh:m
     * @param {String} date is date time or date
     * @returns format date
     */
    displayDate(date) {
      return formatDateTime(date);
    },
  },
};
