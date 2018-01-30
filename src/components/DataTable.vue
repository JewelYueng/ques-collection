<template>
  <div class="table">
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        v-for="col in columns"
        :key="col.value"
        :prop="col.value"
        :label="col.label">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'data-table',
  data () {
    return {
    }
  },
  props: ['tableData', 'columns', 'canMerge'],
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (this.canMerge) {
        if (columnIndex === 0 || columnIndex === 1) {
          if (rowIndex === 0) {
            return [this.tableData.length, 1]
          } else {
            return [0, 0]
          }
        }
      } else {
        return [1, 1]
      }
    }
  }
}
</script>
<style lang="less">
  .table {
    text-align: center;
    th {
      text-align: center;
    }
  }
</style>
