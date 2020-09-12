import { CONSTANTS } from "@/constants";
import { TABLE_COMPONENT_CONSTANT } from "@/constants";
import { formatDateTime } from "@/utils/common";
import Button from "@/components/Button/index.vue";

export default {
  data() {
    return {
      rowsPerPageItems: CONSTANTS.PER_PAGE_ITEMS,
      pagination: {
        rowsPerPage: CONSTANTS.ROW_PER_PAGE
      },
      conditionSearch: "",
      checkAll: false,
      firstCurrentItem: null,
      lastCurrentItem: null,
      currentPage: 1,
      selected: [],
      allSelected: false,
      indeterminate: false
    };
  },
  components: {
    Button
  },
  watch: {
    tableDatas() {
      this.currentPage = 1;
    },
    currentPage(){
      this.firstCurrentItem = (this.currentPage - 1)*this.pagination.rowsPerPage + 1;
      this.lastCurrentItem = this.currentPage*this.pagination.rowsPerPage;
      if(this.lastCurrentItem > this.tableDatas.length){
        this.lastCurrentItem = this.tableDatas.length;
      }
    },
    // selected(newVal) {
    //   // Handle changes in individual flavour checkboxes
    //   if (newVal.length === 0) {
    //     this.indeterminate = false;
    //     this.allSelected = false;
    //   } else if (newVal.length === this.flavours.length) {
    //     this.indeterminate = false;
    //     this.allSelected = true;
    //   } else {
    //     this.indeterminate = true;
    //     this.allSelected = false;
    //   }
    // }
 
  },
  props: {
    tableHeaders: {
      type: Array,
      required: true,
      default: []
    },
    tableDatas: {
      type: Array | Object,
      required: true,
      default: []
    },
    addSlotBtn: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    /**
     * Format date before display with YYYY/MM/DD HH:mm:ss
     * @param {String} date The value of date
     */
    displayDateTime(date) {
      return formatDateTime(date);
    },
    /**
     * Details user info
     */
    detailInfo() {
    },
    /**
     * Download file csv
     */
    downloadCSV(){

    },
    // /**
    //  * Select all item
    //  * @param {*} checked 
    //  */
    // toggleAll(checked) {
    //   this.selected = checked ? this.flavours.slice() : []
    // }
  },
  computed: {
    /**
     * Pagination page base on value of "rowsPerPage"
     *
     * @returns Number of rows each page should have
     */
    pages() {
      if (this.pagination.rowsPerPage == null || this.tableDatas.length == 0) {
        return 0;
      }
      if (
        this.pagination.totalItems > 0 &&
        this.pagination.totalItems <= this.tableDatas.length
      ) {
        return Math.ceil(
          this.pagination.totalItems / this.pagination.rowsPerPage
        );
      } else {
        return Math.ceil(this.tableDatas.length / this.pagination.rowsPerPage);
      }
    }
  },
  created() {
    this.constant = TABLE_COMPONENT_CONSTANT;
    this.firstCurrentItem = 1;
    this.lastCurrentItem = this.currentPage*this.pagination.rowsPerPage;
  }
}