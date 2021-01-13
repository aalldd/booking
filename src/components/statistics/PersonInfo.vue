<template>
  <div class="person-info">
    <div class="person-name">
      <h3>Hello,</h3>
      <h4>user</h4>
    </div>
    <div class="person-avatar">
      <img src="../../assets/userAvatar.jpg" alt="">
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class PersonInfo extends Vue {
}
</script>

<style scoped lang='scss'>
.person-info {
  display: flex;
  min-height: 100px;
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 37px;

  .person-name {
    h3 {
      font-size: 30px;
      color: #000;
      margin-bottom: -10px;
    }

    h4 {
      font-size: 28px;
      color: rgba(0, 0, 0, 0.5);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-weight: bold;
    }
  }

  .person-avatar {
    padding: 64px 43px 10px;
    background-color: #fff;
    border-bottom-left-radius: 40px;

    img {
      width: 40px;
    }
  }
}
</style>
