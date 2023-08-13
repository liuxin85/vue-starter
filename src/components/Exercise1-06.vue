<template>
  <div>
    <h1 v-show="true" v-once v-text="text"></h1>
    <h2 v-show="false" v-html="html"></h2>

    <a  :href="link.url" v-text="link.title"></a>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      // v-text
      text: 'Directive text!',
      // v-html
      html: 'Stylise</br>HTML in <br/><b>your data</b>',
      link:{
        title: 'baidu',
        url: "www.baidu.com"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}
</style>
