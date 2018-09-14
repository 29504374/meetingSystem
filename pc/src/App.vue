<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
@import url('./style/global.css');
html
{
  margin: 0;
  padding: 0;
  width: var(--global-width-full);
  height: var(--global-height-full);
}
body
{
  margin: 0;
  padding: 0;
  width: var(--global-width-full);
  height: var(--global-height-full);
  background: #eef2f9;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
