// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>{{ greeting }} {{ who }}</div>
</template>

<script lang="ts">
export default {
    props: ['greeting', 'who']
}
</script>
