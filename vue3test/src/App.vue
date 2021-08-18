<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">Test</router-link>
    <test-component></test-component>
    <Icon name="icon-Home" :style="{width: 50, height: 50}"/>
    <svg width="50" height="50" viewBox="0 0 100 100">
      <use href="#more" />
    </svg>
  </div>
  <router-view/>
</template>
<script>
import Icon from './components/Icon/icon.vue'
import testComponent from './components/Icon/test.vue'
export default {
  name: '',
  data () {
    return {
      a: "test00"
    }
  },
  components: {
    Icon,
    testComponent
  }
}
</script>
<style lang="scss" scoped>

</style>
