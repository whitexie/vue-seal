<script lang="ts" setup>
import type { BorderOptions } from '@/seal/types'
import {
  ElFormItem,
  ElSwitch,
  ElInputNumber,
  ElColorPicker,
} from 'element-plus'
import { computed } from 'vue'
export interface Prop {
  modelValue: Required<BorderOptions>
  title: string
}
const props = defineProps<Prop>()
const emits = defineEmits<{
  (e: 'update:modelValue', value: Required<BorderOptions>): void
}>()
const form = computed({
  get() {
    return props.modelValue
  },
  set(value: Required<BorderOptions>) {
    emits('update:modelValue', value)
  },
})
</script>
<template>
  <h4 class="w-full flex-shrink-0 py-10px font-bold">
    {{ title }}
  </h4>
  <ElFormItem label="是否显示">
    <ElSwitch v-model="form.visible" />
  </ElFormItem>
  <ElFormItem label="颜色">
    <ElColorPicker v-model="form.color" />
  </ElFormItem>
  <ElFormItem label="线宽">
    <ElInputNumber v-model="form.width" controls-position="right" :min="1" />
  </ElFormItem>
  <ElFormItem label="半径">
    <ElInputNumber v-model="form.radius" controls-position="right" :min="1" />
  </ElFormItem>
</template>
