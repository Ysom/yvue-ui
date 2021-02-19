<template>
  <div
    :class="colClass"
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
  const validator = (value) => {
    let valid = true
    Object.keys(value).some(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
        return true
      }
    })
    return valid
  }
  export default {
    name: "YvCol",
    props: {
      span: [String, Number],
      offset: [String, Number],
      phone: {
        type: Object,
        validator: validator
      },
      iPad: {
        type: Object,
        validator: validator
      },
      narrowPC: {
        type: Object,
        validator: validator
      },
      widePC: {
        type: Object,
        validator: validator
      }
    },
    computed: {
      colClass() {
        let {
          span,
          offset,
          phone,
          iPad,
          narrowPC,
          widePC
        } = this
        return [
          'yv-col',
          ...this.createClasses(phone, 'phone-'),
          ...this.createClasses(iPad, 'iPad-'),
          ...this.createClasses(narrowPC, 'narrowPC-'),
          ...this.createClasses(widePC, 'widePC-'),
          ...this.createClasses({ span, offset })
        ]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    methods: {
      createClasses(obj, str = '') {
        if (!obj) return []
        let arr = []
        if (obj.span) {
          arr.push(`yv-col-${str}${obj.span}`)
        }
        if (obj.offset) {
          arr.push(`yv-col-${str}offset-${obj.offset}`)
        }
        return arr
      }
    }
  }
</script>

<style scoped lang="scss">
.yv-col {
  width: 50%;
  @media (min-width: 0px){
    @for $n from 1 through 24 {
      $class-prefix:yv-col-phone-;
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    @for $n from 1 through 24 {
      $class-prefix:yv-col-phone-offset-;
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 577px) {
    @for $n from 1 through 24 {
      $class-prefix: yv-col-iPad-;
      &.#{class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    @for $n from 1 through 24 {
      $class-prefix: yv-col-iPad-offset-;
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 769px) {
    @for $n from 1 through 24 {
      $class-prefix: yv-col-narrowPC-;
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    @for $n from 1 through 24 {
      $class-prefix: yv-col-narrowPC-offset-;
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 993px) {
    @for $n from 1 through 24 {
      $class-prefix: yv-col-;
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    @for $n from 1 through 24 {
      $class-prefix: yv-col-offset-;
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 1201px) {
    @for $n from 1 through 24 {
      $class-prefix: yv-col-widePC-;
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    @for $n from 1 through 24 {
      $class-prefix: yv-col-widePC-offset;
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
}
</style>
