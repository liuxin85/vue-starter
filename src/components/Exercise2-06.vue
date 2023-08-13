<template>
  <div class="container">
    <h1>Async fetch</h1>
    <button @click="getApi()">Learning something profound</button>

    <blockquote v-if="quote">{{ quote }}</blockquote>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      axiosResponse: {}
    }
  },
  computed: {
    quote() {
      return this.axiosResponse && this.axiosResponse.slip ? this.axiosResponse.slip.advice : null
    }
  },
  methods: {
    async getApi() {
      return await axios.get('https://api.adviceslip.com/advice').then((response) => {
        // console.log(response)
        this.axiosResponse = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
blockquote {
  position: relative;
  width: 100%;
  padding: 1.2em 30px 1.2em 30px;
  background: #ededed;
  border-left: 8px solid #78c0a8;
  font-size: 24px;
  color: #555555;
  line-height: 1.6;
}
</style>
