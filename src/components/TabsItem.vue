<template>
  <div
    class='yv-tabs-item'
    :class="TabsItem"
    :data-name='name'
    @click="selectTab"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YvTabsItem",
  inject: ['eventBus'],
  props:{
    disabled:{
      type: Boolean,
      default: false
    },
    name:{
      type: [Number,String],
      required: true
    }
  },
  computed:{
    TabsItem() {
      return {
        [`current-tabs-item`]: this.active,
        [`tabs-item-disabled`]: this.disabled
      }
    }
  },
  data(){
    return {
      active:false
    }
  },
  created(){
    if (this.eventBus) {
      this.eventBus.$on('update:selected',(name,vm) => {
        this.active = name === this.name
      })
    }
  },
  methods:{
    selectTab() {
      if (this.disabled) return
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style scoped lang="scss">
$tab-item-current-color: #337480;
$tab-item-color: #333;
.yv-tabs-item{
  display: flex;
  align-items: center;
  padding: .4em 1em;
  flex-shrink: 0;
  font-weight: bold;
  color: $tab-item-color;
  cursor: pointer;
  &.current-tabs-item{
    color: $tab-item-current-color;
    font-weight: bold;
    vertical-align: top;
  }
  &.tabs-item-disabled{
    color: #999;
    cursor: not-allowed;
  }
}
</style>