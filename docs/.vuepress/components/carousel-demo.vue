<template>
  <div class="carousel-demo-con">
    <div class="basic-demo">
      <div class="text-con">
        基本用法，可通过selected属性设置默认选中的轮播图
      </div>
      <div class="carousel-con">
        <yv-carousel
          :selected.sync="selected1"
          :autoPlay="false"
        >
          <yv-carousel-item
            v-for="item in list1"
            :key="item.name"
            :name="item.name"
          >
            <div class="flex-center item-con">
              {{item.content}}
            </div>
          </yv-carousel-item>
        </yv-carousel>
      </div>
    </div>
    <div class="auto-demo">
      <div class="text-con">
        可通过autoPlay和autoPlayDelay来设置自动轮播和轮播的间隔时长
      </div>
      <div class="carousel-con">
        <yv-carousel :selected.sync="selected2" :auto-play-delay="1000">
          <yv-carousel-item
            v-for="item in list2"
            :key="item.name"
            :name="item.name"
          >
            <div class="flex-center item-con">
              {{item.content}}
            </div>
          </yv-carousel-item>
        </yv-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  import Carousel from '../../../src/components/Carousel'
  import CarouselItem from '../../../src/components/CarouselItem'
  export default {
    name: "carousel-demo",
    components: {
      YvCarousel: Carousel,
      YvCarouselItem: CarouselItem
    },
    data() {
      return {
        selected1: 'first',
        selected2: 'first',
        list1: [
          {
            name: 'first',
            content: '1'
          },
          {
            name: 'second',
            content: '2'
          },
          {
            name: 'third',
            content: '3'
          }
        ],
        list2: [
          {
            name: 'first',
            content: '1'
          },
          {
            name: 'second',
            content: '2'
          },
          {
            name: 'third',
            content: '3'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
.carousel-demo-con {
  .basic-demo, .auto-demo {
    margin-top: 20px;
    .text-con {
      margin: 5px;
      font-size: 14px;
      color: #666;
    }
    .carousel-con {
      border: 1px solid #999;
      border-radius: 4px;
    }
    .item-con {
      height: 150px;
    }
  }
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
