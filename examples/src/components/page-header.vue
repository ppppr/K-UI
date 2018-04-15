<template>
  <div class="page-header">
    <div class="page-header__top">
      <h1 class="page-header__logo">
        <a href="#"></a>
      </h1>
      <ul class="page-header__navs">
        <li class="page-header__item">
          <a href="/" class="page-header__link">组件</a>
        </li>
        <li class="page-header__item">
          <a href="https://github.com/SunShineKG/K-UI" class="page-header__github" target="_blank"></a>
        </li>
        <li class="page-header__item">
          <span class="page-header__link"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
};
</script>

<style lang="less">
.page-header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  .page-header__top {
    overflow: hidden;
    height: 60px;
    background-color: #fbfbfb;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
  }
  .page-header__logo {
    float: left;
    & a {
      display: block;
      width: 220px;
      height: 30px;
      line-height: 30px;
      background-image: url('../../assets/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      margin: 18px 0 0 20px;
      padding-left: 115px;
      font-size: 25px;
      font-family: monospace;
      color: #2c3e50;
    }
  }
  .page-header__navs {
    float: right;
  }
  .page-header__item {
    float: left;
    height: 50px;
  }
  .page-header__subnavs {
    line-height: 50px;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
    position: relative;
    z-index: -1;
    & shadow {
      box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
    }
    a,
    span {
      line-height: 50px;
    }
  }
  .page-header__link {
    display: block;
    line-height: 60px;
    color: #333;
    font-size: 16px;
    margin: 0 20px;
    &:hover {
      color: #3388FF;
    }
    &:active {
      color: #3388FF;
    }
  }
  .page-header__github {
    display: inline-block;
    width: 22px;
    height: 60px;
    overflow: hidden;
    background-image: url('../../assets/github.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: 17px;
  }
}
</style>