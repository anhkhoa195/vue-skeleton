<template>
  <div>
    <component v-bind:is="layout"></component>
  </div>
</template>

<script>
import PublicLayout from "@/layouts/PublicLayout/index.vue";
import PrivateLayout from "@/layouts/PrivateLayout/index.vue";

export default {
  computed: {
    layout() {
      //dummy
      return "private-layout";
    }
  },
  components: {
    "private-layout": PrivateLayout,
    "public-layout": PublicLayout
  },
  methods: {
    setLocale(locale) {
      import(`./assets/lang/${locale}.json`).then(msgs => {
        this.$i18n.setLocaleMessage(locale, msgs);
        this.$i18n.locale = locale;
      });
    }
  }
};
</script>
