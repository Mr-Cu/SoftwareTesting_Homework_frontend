<template>
  <div
    style="margin-left: 50px; margin-right: 50px; text-align: left; width: 100%"
  >
    <el-card>
      <h1 style="margin-left: 20px">ATM系统</h1>
      <el-divider></el-divider>
      <el-upload
        class="upload-demo"
        action="http://localhost:5000/question5"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="100"
        :on-exceed="handleExceed"
        :on-success="Success"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">上传测试用例</el-button>
        <div class="el-upload__tip">只能上传csv文件，且不超过500kb</div>
      </el-upload>
      <el-divider class="divider2"></el-divider>
      <div>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="0" label="序号"> </el-table-column>
          <el-table-column prop="1" label="输入指令"> </el-table-column>
          <el-table-column prop="2" label="预期输出"> </el-table-column>
          <el-table-column prop="3" label="实际输出"> </el-table-column>
          <el-table-column prop="4" label="是否通过"> </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "atmsystem",
  data() {
    return {
      tableData: [],
      fileList: [],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 100 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    // eslint-disable-next-line no-unused-vars
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // eslint-disable-next-line no-unused-vars
    Success(response, file, fileList) {
      this.tableData = response;
    },
  },
};
</script>

<style scoped>
.divider2 {
  margin-bottom: 5px;
}
.el-card {
  border-radius: 20px;
  width: 80%;
  margin-left: 50px;
  margin-bottom: 20px;
}

.upload-demo {
  margin-top: 20px;
  text-align: center;
}
</style>
