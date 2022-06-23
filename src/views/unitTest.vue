<template>
  <div
    style="margin-left: 50px; margin-right: 50px; text-align: left; width: 100%"
  >
    <div style="width: 250px">
      <h1>Question7: 程序图</h1>
      <div>
        <img style="width: 800px" :src="image1" />
        <p>可作程序图如下：</p>
        <img style="width: 800px" :src="image2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "unitTest",
  data() {
    return {
      image1: require("../../program_image/program_analysis.png"),
      image2: require("../../program_image/program_image.png"),
    };
  },
  methods: {},
};
</script>

<style>
</style>