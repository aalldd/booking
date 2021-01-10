<template>
  <svg class="icon">
    <use :xlink:href="`#${name}`"/>
  </svg>
</template>

<script lang='ts'>
/* eslint-disable */
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}
import Vue from 'vue';
import {Prop, Component} from 'vue-property-decorator';

@Component
export default class icon extends Vue {
  @Prop({default: ''}) readonly name: string | undefined;
}
</script>

<style scoped lang='scss'>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
