<template>
  <div class="container">
    <el-container>
      <el-card>
        <h1
          style="
            font-size: 18px;
            margin: 0px;
            margin-left: 20px;
            margin-top: 10px;
          "
          class="header"
        >
          三角形问题
        </h1>
        <el-divider></el-divider>
        <el-tabs type="border-card">
          <el-tab-pane label="边界值分析" name="first">
            <h4>边界值分析</h4>
            <el-upload
              class="upload-demo"
              action="http://localhost:5000/question1"
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
              <div class="el-upload__tip">只能csv文件，且不超过500kb</div>
            </el-upload>
            <el-divider class="divider2"></el-divider>

            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="0" label="序号" width="120">
              </el-table-column>
              <el-table-column prop="1" label="第一条边" width="120">
              </el-table-column>
              <el-table-column prop="2" label="第二条边" width="120">
              </el-table-column>
              <el-table-column prop="3" label="第三条边" width="150">
              </el-table-column>
              <el-table-column prop="4" label="预期输出"> </el-table-column>
              <el-table-column prop="5" label="实际输出"> </el-table-column>
              <el-table-column prop="6" label="是否通过"> </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="等价类分析" name="second">
            <h4></h4>
            <el-upload
              class="upload-demo"
              action="http://localhost:5000/question1"
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
              <div class="el-upload__tip">只能csv文件，且不超过500kb</div>
            </el-upload>
            <el-divider class="divider2"></el-divider>

            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="0" label="序号" width="120">
              </el-table-column>
              <el-table-column prop="1" label="第一条边" width="120">
              </el-table-column>
              <el-table-column prop="2" label="第二条边" width="120">
              </el-table-column>
              <el-table-column prop="3" label="第三条边" width="150">
              </el-table-column>
              <el-table-column prop="4" label="预期输出"> </el-table-column>
              <el-table-column prop="5" label="实际输出"> </el-table-column>
              <el-table-column prop="6" label="是否通过"> </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-card>

      <el-footer style="margin-left: 30px"> </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "triangle",
  data() {
    return {
      uploadActionUrl: "",
      tableData: [],
      fileList: [],
      form: {
        edge1: "",
        edge2: "",
        edge3: "",
      },
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
.el-form {
  width: 90%;
}

.divider2 {
  margin-bottom: 5px;
}

.el-card {
  border-radius: 20px;
  width: 80%;
  margin-left: 50px;
  margin-bottom: 20px;
}

.header {
  margin-left: 50px;
  margin-bottom: 30px;
  text-align: left;
}

.upload-demo {
  margin-top: 0px;
}

.input-form {
  padding-right: 20px;
}
</style>
