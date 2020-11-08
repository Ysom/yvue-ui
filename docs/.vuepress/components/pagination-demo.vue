<template>
  <div class="pagination-demo-con">
    <yv-pagination
      :total-page="totalPage"
      :current-page="currentPage"
      @change="onPageChange"
    ></yv-pagination>
  </div>
</template>

<script>
import Pagination from '../../../src/components/Pagination'

export default {
  name: "pagination-demo",
  components: {
    YvPagination: Pagination
  },
  data() {
    return {
      currentPage: 1,
      totalPage: 10
    }
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page
    }
  }
}
</script>

<style scoped lang="scss">
.pagination-demo-con {
  margin-top: 20px;
}
</style>