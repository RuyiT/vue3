<template>
  <svg :style="{...style}">
    <use :href="iconName"></use>
  </svg>
</template>

<script>
/* eslint-disable */
export default {
  name: "Icon",
  props: {
    name: String,
    style: {
      type: Object
    }
  },
  setup(ctx) {
    const iconName = `#${ctx.name}`;
    return {
      iconName,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
