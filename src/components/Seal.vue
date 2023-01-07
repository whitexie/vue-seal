<script setup lang="ts">
import { Seal } from '@/seal'
import type {
  SealShape,
  SealType,
  FiveStar,
  TextOptions,
  BorderOptions,
} from '@/seal/types'
import { onMounted, ref, watch } from 'vue'

export interface Props {
  /**
   * 印章类型
   * @default 'company'
   */
  type?: SealType
  /**
   * 印章形状
   * @default 'circle'
   */
  shape?: SealShape
  /**
   * 印章颜色
   */
  color?: string
  /**
   * 显示透明背景
   */
  showTransparent?: boolean
  /**
   * 五角星配置
   */
  fiveStar?: FiveStar
  /**
   * 画布宽度
   * @default 300
   */
  width?: number
  /**
   * 画布高度
   * @default 300
   */
  height?: number
  /**
   * 主文字配置，一般是该公司或结构名称
   */
  text?: TextOptions
  /**
   *
   */
  serNo?: TextOptions
  /**
   * 副文字配置
   */
  subText?: TextOptions
  /**
   * 中心文字配置
   */
  centerText?: TextOptions
  /** 边线配置 */
  border?: BorderOptions
  /**
   * 内边线配置
   *  @default
   *   {
   *     visible: true,
   *     width: 1,
   *     shape: 'circle'
   *   }
   */
  innerBorder?: BorderOptions
  /** 内环线配置 */
  innerLoopLine?: BorderOptions
}

const props = defineProps<Props>()
const elRef = ref<HTMLElement | null>(null)
let seal: Seal | undefined
watch(
  props,
  function () {
    seal?.update(props)
  },
  { deep: true },
)
onMounted(() => {
  seal = new Seal(elRef.value as HTMLElement, props)
})
</script>
<template>
  <div ref="elRef"></div>
</template>
<style scoped></style>
