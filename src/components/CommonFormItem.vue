<script setup lang="ts">
import type { TextOptions } from '@/seal/types'
import { ElFormItem, ElSwitch, ElInput, ElColorPicker } from 'element-plus'
import { computed } from 'vue'

export type Fileds = 'visible' | 'color' | 'text'
export interface Prop {
  modelValue: Pick<TextOptions, Fileds>
}
interface Emits {
  (event: 'update:ModelValue', value: Pick<TextOptions, Fileds>): void
}
const props = defineProps<Prop>()
const emits = defineEmits<Emits>()
const form = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:ModelValue', value)
  },
})
</script>
<template>
  <ElFormItem label="是否显示">
    <ElSwitch v-model="form.visible" />
  </ElFormItem>
  <ElFormItem label="颜色">
    <ElColorPicker v-model="form.color" />
  </ElFormItem>
  <ElFormItem label="文案">
    <ElInput v-model="form.text" controls-position="right" maxlength="15" />
  </ElFormItem>
</template>
