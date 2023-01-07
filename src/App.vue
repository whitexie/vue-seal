<script setup lang="ts">
import { ref } from 'vue'
import { cloneDeep } from 'lodash-es'
import Seal from './components/Seal.vue'
import CommonFormItem from './components/CommonFormItem.vue'
import type { BorderOptions, Options, TextOptions } from './seal/types'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElOption,
  ElSelect,
  ElSwitch,
  ElScrollbar,
} from 'element-plus'

// 深度遍历类型，所有可选属性都变成必须属性
export type DeepRequired<T> = {
  [K in keyof T]-?: DeepRequired<T[K]>
}

// 将指定属性变为可选属性
export type ToParitalDes<T extends object, U extends keyof T> = Partial<
  Pick<T, U>
> &
  Omit<T, U>

// 表单不需要的字段
type OmitOptions = Omit<
  Options,
  'text' | 'subText' | 'centerText' | 'serNo' | 'border'
>
interface FormOptions extends OmitOptions {
  text: ToParitalDes<Required<TextOptions>, 'distance'>
  subText: ToParitalDes<Required<TextOptions>, 'radius' | 'startDegree'>
  centerText: ToParitalDes<
    Required<TextOptions>,
    'distance' | 'radius' | 'startDegree'
  >
  serNo: ToParitalDes<Required<TextOptions>, 'radius' | 'distance'>
  border: ToParitalDes<BorderOptions, 'shape'>
}

const defaultOption: FormOptions = {
  type: 'company',
  shape: 'circle',
  showTransparent: true,
  color: 'red',
  width: 300,
  height: 300,
  border: {
    visible: true,
    color: 'red',
    width: 6,
    radius: 140,
  },
  innerBorder: {
    visible: true,
    color: 'red',
    width: 1,
    radius: 130,
  },
  innerLoopLine: {
    visible: false,
    color: 'red',
    width: 2,
    radius: 80,
  },
  fiveStar: { visible: true, color: 'red', size: 30 },
  text: {
    visible: true,
    color: 'red',
    radius: 120,
    text: '上海某某某网络科技有限公司',
    fontSize: 30,
    startDegree: 25,
    fontWeight: 600,
    distance: 75,
  },
  subText: {
    visible: true,
    color: 'red',
    text: '',
    fontSize: 24,
    distance: 75,
    fontWeight: 600,
    radius: 120,
  },
  centerText: {
    visible: false,
    color: 'red',
    text: '',
    fontSize: 24,
    fontWeight: 600,
  },
  serNo: {
    visible: true,
    color: 'red',
    radius: 120,
    text: '',
    fontSize: 18,
    startDegree: 45,
    fontWeight: 600,
  },
}
const form = ref<FormOptions>(cloneDeep(defaultOption))
</script>

<template>
  <div class="flex-c-c">
    <div
      class="flex justify-center w-80vw border border-1 border-solid border-#ddd"
    >
      <div class="preview flex-c-c w-320px mt-10px">
        <Seal v-bind="form" />
      </div>
      <div class="option-edit flex-1 p-10px">
        <h2>配置面板</h2>
        <ElScrollbar height="500">
          <ElForm :inline="true" size="default" label-position="top">
            <h4 class="w-full flex-shrink-0 py-10px font-bold">基本配置</h4>
            <ElFormItem label="印章类型">
              <ElSelect v-model="form.type" style="width: 120px">
                <ElOption label="公司印章" value="company" />
                <ElOption label="个人印章" value="personal" />
              </ElSelect>
            </ElFormItem>
            <ElFormItem label="印章类型">
              <ElSelect v-model="form.shape" style="width: 120px">
                <ElOption label="圆形" value="circle" />
                <ElOption label="椭圆" value="ellipse" />
                <ElOption label="方形" value="square" />
              </ElSelect>
            </ElFormItem>
            <ElFormItem label="显示透明背景">
              <ElSwitch v-model="form.showTransparent" />
            </ElFormItem>
            <ElFormItem label="画布宽度">
              <ElInputNumber
                v-model="form.width"
                :disabled="true"
                controls-position="right"
              />
            </ElFormItem>
            <ElFormItem label="画布高度">
              <ElInputNumber
                v-model="form.height"
                :disabled="true"
                controls-position="right"
              />
            </ElFormItem>

            <!-- 边线、内边线、内环线配置 -->
            <BorderFormItem v-model="form.border" title="边线配置" />
            <BorderFormItem v-model="form.innerBorder" title="内边线配置" />
            <BorderFormItem v-model="form.innerLoopLine" title="内环线配置" />

            <!-- 主文字配置 -->
            <h4 class="w-full flex-shrink-0 py-10px font-bold">主文字配置</h4>
            <CommonFormItem v-model="form.text" />
            <ElFormItem label="半径">
              <ElInputNumber
                v-model="form.text.radius"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>
            <ElFormItem label="字体大小">
              <ElInputNumber
                v-model="form.text.fontSize"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>
            <ElFormItem label="字体起始位置角度">
              <ElInputNumber
                v-model="form.text.startDegree"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>
            <ElFormItem label="字体粗细">
              <ElInput
                v-model="form.text.fontWeight"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>

            <!-- 副文字配置 -->
            <h4 class="w-full flex-shrink-0 py-10px font-bold">副文字配置</h4>
            <CommonFormItem v-model="form.subText" />
            <ElFormItem label="字体大小">
              <ElInputNumber
                v-model="form.subText.fontSize"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>
            <ElFormItem label="距离">
              <ElInputNumber
                v-model="form.subText.startDegree"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>
            <ElFormItem label="字体粗细">
              <ElInput
                v-model="form.subText.fontSize"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>

            <!-- 中心文字配置 -->
            <h4 class="w-full flex-shrink-0 py-10px font-bold">副文字配置</h4>
            <CommonFormItem v-model="form.centerText" />
            <ElFormItem label="字体大小">
              <ElInputNumber
                v-model="form.centerText.fontSize"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>
            <ElFormItem label="字体粗细">
              <ElInput
                v-model="form.centerText.fontWeight"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>

            <!-- 序列号配置 -->
            <h4 class="w-full flex-shrink-0 py-10px font-bold">序列号配置</h4>
            <CommonFormItem v-model="form.text" />
            <ElFormItem label="半径">
              <ElInputNumber
                v-model="form.serNo.radius"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>
            <ElFormItem label="字体大小">
              <ElInputNumber
                v-model="form.serNo.fontSize"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>
            <ElFormItem label="字体起始位置角度">
              <ElInputNumber
                v-model="form.serNo.startDegree"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>
            <ElFormItem label="字体粗细">
              <ElInput
                v-model="form.serNo.fontWeight"
                controls-position="right"
                :min="1"
              />
            </ElFormItem>
          </ElForm>
        </ElScrollbar>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
