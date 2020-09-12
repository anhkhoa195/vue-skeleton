import TableTemplate from "@/components/TableTemplate/index.vue";
import Button from "@/components/Button/index.vue";
import UnitItem from "@/components/UnitItem/index.vue";
import TagName from "@/components/TagName/index.vue";

export default {
  name: "MemberDetail",
  components: {
    TableTemplate,
    Button,
    UnitItem,
    TagName
  },
  data() {
    return {
      title: "システム情報",
      listItems : [{ key: "ECAI ID", value: "73720"}, { key: "123123aaaaa1", value: "12aaaa"},{ key: "12312dddd31", value: "12aaaa"}]
    };
  },
  watch: {},
  computed: {},
  methods: {
    backPage(){
      
    }
  },
  created() { },
};