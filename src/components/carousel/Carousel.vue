<template>
  <div class="yv-carousel"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave"
       @touchstart="onTouchStart"
       @touchend="onTouchEnd"
  >
    <div class="yv-carousel-window" ref="window">
      <div class="yv-carousel-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="yv-carousel-dots">
      <span data-action="prev" @click="onClickPrev">
        <yv-icon name="left"></yv-icon>
      </span>
      <span
        :class="{active: selectedIndex === n-1}"
        v-for="n in childrenLength"
        :key="n"
        :data-index="n-1"
        @click="select(n-1)"
      >
        {{n}}
      </span>
      <span data-action="next" @click="onClickNext">
        <yv-icon name="right"></yv-icon>
      </span>
    </div>
  </div>
</template>

<script>
  import YvIcon from '../icon/Icon'

  export default {
    name: "YvCarousel",
    components: {YvIcon},
    props: {
      selected: {
        type: String,
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      autoPlayDelay: {
        type: Number,
        default: 3000
      }
    },
    computed: {
      selectedIndex() {
        let index = this.names.indexOf(this.selected)
        return index === -1 ? 0 : index
      },
      names() {
        return this.items.map(vm => vm.name)
      },
      items() {
        return this.$children.filter(vm => vm.$options.name === 'YvCarouselItem')
      }
    },
    data() {
      return {
        childrenLength: 0,
        lastSelectedIndex: undefined,
        timerId: undefined,
        startTouch: undefined,
      }
    },
    mounted() {
      this.updateChildren()
      if (this.autoPlay) {
        this.playAutomatically()
      }
      this.childrenLength = this.items.length
    },
    updated() {
      this.updateChildren()
    },
    beforeDestroy() {
      this.pause()
    },
    methods: {
      onMouseEnter() {
        this.pause()
      },
      onMouseLeave() {
        this.playAutomatically()
      },
      onTouchStart(e) {
        this.pause()
        if (e.touches.length > 1) {
          return
        }
        this.startTouch = e.touches[0]
      },
      onTouchEnd(e) {
        let endTouch = e.changedTouches[0]
        let {clientX: x1, clientY: y1} = this.startTouch
        let {clientX: x2, clientY: y2} = endTouch
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        let deltaY = Math.abs(y2 - y1)
        let rate = distance / deltaY
        if (rate > 2) {
          if (x2 > x1) {
            this.select(this.selectedIndex - 1)
          } else {
            this.select(this.selectedIndex + 1)
          }
        }
        this.$nextTick(() => {
          this.playAutomatically()
        })
      },
      onClickPrev() {
        this.select(this.selectedIndex - 1)
      },
      onClickNext() {
        this.select(this.selectedIndex + 1)
      },
      playAutomatically() {
        if (this.timerId) {
          return
        }
        let run = () => {
          let index = this.names.indexOf(this.getSelected())
          let newIndex = index + 1
          this.select(newIndex) // 告诉外界选中 newIndex
          this.timerId = setTimeout(run, this.autoPlayDelay)
        }
        this.timerId = setTimeout(run, this.autoPlayDelay)
      },
      pause() {
        window.clearTimeout(this.timerId)
        this.timerId = undefined
      },
      select(newIndex) {
        this.lastSelectedIndex = this.selectedIndex
        if (newIndex === -1) {
          newIndex = this.names.length - 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        this.$emit('update:selected', this.names[newIndex])
      },
      getSelected() {
        let first = this.items[0]
        return this.selected || first.name
      },
      updateChildren() {
        let selected = this.getSelected()
        this.items.forEach((vm) => {
          let reverse = this.selectedIndex <= this.lastSelectedIndex
          if (this.timerId) {
            if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
              reverse = false
            }
            if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
              reverse = true
            }
          }
          vm.reverse = reverse
          this.$nextTick(() => {
            vm.selected = selected
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .yv-carousel {
    &-window {
      overflow: hidden;
    }

    &-wrapper {
      position: relative;
    }

    &-dots {
      padding: 8px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        width: 20px;
        height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #ddd;
        border-radius: 50%;
        margin: 0 8px;
        font-size: 12px;

        &:hover {
          cursor: pointer;
        }

        &.active {
          background: black;
          color: white;

          &:hover {
            cursor: default;
          }
        }
      }
    }
  }
</style>
