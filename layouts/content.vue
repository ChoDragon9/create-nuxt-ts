<template>
  <div class="wrap">
    <div class="navi">NAVI</div>
    <div class="gnb">GNB</div>
    <nuxt />
  </div>
</template>

<style>
html,
body {
  height: 100%;
}
.navi {
  height: 80px;
}
.gnb {
  height: 150px;
}
.wrap > div {
  border: solid 1px #2e495e;
  background: #00c48d;
}
</style>
