<template>
  <div class='yv-collapse-item'>
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YvCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String
    }
  },
  inject: ['eventBus'],
  data() {
    return {
      open: false,
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', (names) => {
      this.open = names.indexOf(this.name) >= 0
    })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    },
  }
}
</script>

<style scoped lang="scss">
$grey: #999;
$border-radius: 4px;
.yv-collapse-item {
  .title {
    margin: -1px;
    padding: 0 8px;
    border: 1px solid $grey;
    background-color: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    min-height: 32px;
  }

  &:first-child {
    .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }

  &:last-child {
    .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }

  .content {
    padding: 8px;
  }
}
</style>
