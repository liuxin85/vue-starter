<template>
  <div>
    <h1>Vue Lifecycle hooks</h1>
    <ul>
      <li v-for="(item, n) in list" :key="n">{{ item }} <a @click="deleteItem(item)">Delete</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      list: ['Apex Legends', 'A Plague Talse: Innocence', 'Art sqool']
    }
  },
  // beforeCreate() {
  //   alert('beforeCreate: data is static, thats it')
  // },
  // created() {
  //   alert('created: data and events ready, but no DOM')
  // },

  // beforeMount() {
  //   alert('beforeMount: $el not ready')
  // },
  // mounted() {
  //   alert('mounted: DOM ready to use')
  // },
  beforeUpdate() {
    alert('before update: we know an update is about to happen, and have the data')
  },
  updated() {
    alert('updated: virtual DOM will update afeter you clicke ok')
  },
  beforeUnmount() {
    alert('beforeUnmount: about to blow up this component')
  },
  unmounted() {
    alert('unmounted: this component has been unmounted')
  },

  methods: {
    deleteItem(value: string) {
      this.list = this.list.filter((item) => item !== value)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;
}

li {
  display: block;
  list-style: none;

  + li {
    margin-top: 10px;
  }
}

a {
  display: inline-block;
  background: #4fc08d;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
