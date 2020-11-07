<template>
  <div class="yv-pagination" :class="{hide: hideIfOnePage === true && totalPage <= 1}">
    <span class="yv-pagination-nav prev" :class="{disabled:currentPage===1}"
          @click="onClickPage(currentPage-1)">
      <yv-icon name="left"></yv-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="yv-pagination-item current">{{ page }}</span>
      </template>
      <template v-else-if="page === '...'">
        <yv-icon class="yv-pagination-separator" name="dots"></yv-icon>
      </template>
      <template v-else>
        <span class="yv-pagination-item other" @click="onClickPage(page)">{{ page }}</span>
      </template>
    </template>
    <span class="yv-pagination-nav next" :class="{disabled: currentPage===totalPage}"
          @click="onClickPage(currentPage+1)">
      <yv-icon name="right"></yv-icon>
    </span>
  </div>
</template>

<script>
import Icon from './Icon'

function unique (array) {
  // return [...new Set(array)]
  // array = [1 1 2 3 4 5 20]
  const object = {}
  array.map((number) => {
    object[number] = true
  })
  return Object.keys(object).map((s) => parseInt(s, 10))
}

export default {
  name: "Pagination",
  components: {
    YvIcon: Icon
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    pages() { // 依赖了 totalPage 和 currentPage
      return unique([1, this.totalPage,
        this.currentPage,
        this.currentPage - 1, this.currentPage - 2,
        this.currentPage + 1, this.currentPage + 2]
        .filter((n) => n >= 1 && n <= this.totalPage)
        .sort((a, b) => a - b))
        .reduce((prev, current, index, array) => {
          prev.push(current)
          array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...')
          return prev
        }, [])
    }
  },
  methods: {
    onClickPage (n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit('update:currentPage', n)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/pagination";

.yv-pagination {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  $width: 20px;
  $height: 20px;
  $font-size: 12px;

  &.hide {
    display: none;
  }

  &-separator {
    width: $width;
    font-size: $font-size;
  }

  &-item {
    margin: 0 4px;
    padding: 0 4px;
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: $width;
    height: $height;
    font-size: $font-size;
    cursor: pointer;

    &.current, &:hover {
      border-color: $blue;
    }

    &.current {
      cursor: default;
    }
  }

  &-nav {
    margin: 0 4px;
    border-radius: $border-radius;
    background: $grey;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: $height;
    width: $width;
    font-size: $font-size;
    cursor: pointer;

    &.disabled {
      cursor: default;

      svg {
        fill: darken($grey, 30%);
      }
    }
  }
}
</style>