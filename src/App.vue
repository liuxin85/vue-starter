<script lang="ts">
// import { RouterView } from 'vue-router'
// import Exercise from './components/Exercise2-06.vue'
import Greeting from './components/Greeting.vue'
import Vue from 'vue'

const possibleGreetings = [
  { greeting: 'Hello', who: 'Vue.js' },
  { greeting: 'Hey', who: 'Everyone' },
  { greeting: 'Hi', who: 'JavaScript' }
]

export default {

  data() {
    return {
      currentIndex: 0,
 
    }
  },
  computed: {
    currentGreeting() {
      return possibleGreetings[this.currentIndex]
    },
    greeting() {
      return this.currentGreeting.greeting
    },
    who() {
      return this.currentGreeting.who
    }
  },
  methods: {
    newGreeting() {
      this.currentIndex =
        this.currentIndex === possibleGreetings.length - 1 ? 0 : this.currentIndex + 1
    }
  },
  components: {
    Greeting
  }
}
</script>

<template>
  <!-- <RouterView /> -->
  <div id="app">
    <Greeting :greeting="greeting" :who="who" />
    <button @click="newGreeting()">New Greeting</button>
  </div>
</template>

<style lang="scss">
@import './styles/global.scss';
@import './styles/typography.scss';
</style>
