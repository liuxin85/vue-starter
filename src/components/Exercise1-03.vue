<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <ul>
      <li>{{ items[0] }}</li>
      <li>{{ items[1] }}</li>
      <li>{{ items[2] }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: 'my list component!',
      subtitle: 'Vue js basics',
      items: ['item1', 'item2', 'item3']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/typography.scss';

h1 {
  font-size: 50px;
  color: $color-blue;
}
</style>
