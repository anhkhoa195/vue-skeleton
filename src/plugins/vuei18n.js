import VueI18n from "vue-i18n";
import Vue from "vue";
import { JA } from "@/constants/translate.js";
import ja from "@/assets/lang/ja";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: JA,
  fallbackLocale: JA,
  messages: {
    ja,
  },
});
