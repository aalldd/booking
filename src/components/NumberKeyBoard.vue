<template>
  <div class="numberPad">
    <div class="field">
      <input type="number"
             :value="output"
             ref="numberBox"
             @focus="stopKeyBoard"
             placeholder="在这里输入开销金额吧~">
      <Icon name="duigou" @click.native="ok"></Icon>
    </div>
    <div class="buttons" ref="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <!--      <button @click="remove">删除</button>-->
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <!--      <button @click="clear">清空</button>-->
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <!--      <button @click="ok" class="ok">OK</button>-->
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button @click="remove" class="remove">
        <Icon name="leftArrow"></Icon>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: {Icon}
})
export default class NumberPad extends Vue {
  output = '';

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent as string;
    if (this.output.length === 16) {
      return;
    }
    if (this.output === '0') {
      if (input === '.') {
        this.output += input;
      } else {
        this.output = this.output.slice(0, -1);
      }
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {
      return;
    }
    this.output += input;
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }
  }

  clear() {
    this.output = '0';
  }

  ok() {
    this.$emit('update:number', parseFloat(this.output));
    this.$emit('submit', parseFloat(this.output));
    this.output = '';
  }
  //手机上点击输入框总是跳出默认的输入框很麻烦
  stopKeyBoard(){
    (this.$refs.numberBox as HTMLInputElement).setAttribute('readonly','readonly')
    setTimeout(()=>{
      (this.$refs.numberBox as HTMLInputElement).removeAttribute('readonly')
    },100)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  .field {
    position: relative;
    border: 1px solid #ccc;
    margin: 20px 30px;
    border-radius: 6px;
    padding: 4px 0;
    background-color: #E9F7F9;

    input {
      width: 100%;
      border: none;
      outline: none;
      background-color: inherit;
      text-align: center;
      color: #21B2C1;
    }

    .icon {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }

  .buttons {
    min-height: 14em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    > button {
      width: 33%;
      background-color: transparent;
      border: none;
      font-size: 24px;
      color: #000000;

      &.remove {
        font-size: 20px;
      }
    }
  }
}
</style>
