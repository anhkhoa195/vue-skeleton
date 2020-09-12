export default {
  name: "Button",
  props: {
    name: {
      type: String,
      default: "",
    },
    isBlink: {
      type: Boolean,
      default: false,
    },
    onRequest: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * Send event button when click
     */
    handleSubmit() {
      this.$emit("event-button");
    },
  },
};