<script setup lang="ts">
import { ref } from "vue";
import { cloneDeep } from "lodash-es";
import Seal from "./components/Seal.vue";
import type { Options } from "./seal/types";
import { ElForm, ElFormItem, ElSwitch } from "element-plus";
const defaultOption: Options = {
  type: "company",
  shape: "circle",
  showTransparent: true,
  color: "red",
  width: 300,
  height: 300,
  border: { visible: true, color: "red", width: 6, radius: 140 },
  innerBorder: { visible: true, color: "red", width: 1, radius: 130 },
  innerLoopLine: { visible: false, color: "red", width: 2, radius: 80 },
  fiveStar: { visible: true, color: "red", size: 30 },
  text: {
    visible: true,
    color: "red",
    radius: 120,
    text: "",
    fontSize: 30,
    startDegree: 25,
    fontWeight: 600,
  },
  subText: {
    visible: true,
    color: "red",
    text: "",
    fontSize: 24,
    distance: 75,
    fontWeight: 600,
  },
  centerText: { visible: false, color: "red", text: "", fontSize: 24 },
  serNo: {
    visible: true,
    color: "red",
    radius: 120,
    text: "",
    fontSize: 18,
    startDegree: 45,
    fontWeight: 600,
  },
};
const form = ref<Options>(cloneDeep(defaultOption));
</script>

<template>
  <div class="preview">
    <Seal v-bind="form" />
  </div>
  <div class="option-edit">
    <h3>配置面板</h3>
    <ElForm>
      <ElFormItem label="基本配置">
        <ElSwitch v-model="form.showTransparent" />
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style scoped></style>
