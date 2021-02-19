import Vue from 'vue'
import Button from './components/button/Button'
import ButtonGroup from './components/button/ButtonGroup'
import Row from './components/layout/Row'
import Col from './components/layout/Col'
import Container from './components/container/Container'
import Header from './components/container/Header'
import Aside from './components/container/Aside'
import Main from './components/container/Main'
import Footer from './components/container/Footer'
import Tabs from './components/tabs/Tabs'
import TabsHead from './components/tabs/TabsHead'
import TabsItem from './components/tabs/TabsItem'
import TabsBody from './components/tabs/TabsBody'
import TabsPane from './components/tabs/TabsPane'
import Toast from './components/plugin'
import Popover from './components/popover/Popover'
import Collapse from './components/collapse/Collapse'
import CollapseItem from './components/collapse/CollapseItem'
import Carousel from './components/carousel/Carousel'
import CarouselItem from './components/carousel/CarouselItem'
import Pagination from './components/pagination/Pagination'

const components = [
  Button,
  ButtonGroup,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Tabs,
  TabsHead,
  TabsItem,
  TabsBody,
  TabsPane,
  Popover,
  Collapse,
  CollapseItem,
  Carousel,
  CarouselItem,
  Pagination
]

components.forEach(component => {
  Vue.component(component.name, component)
})

Vue.use(Toast)

new Vue({
  el: '#app',
  data() {
    return {
      loading: false,
      selects: ['1', '2'],
      slidesList: [
        {
          id: 1,
          text: '第一个'
        },
        {
          id: 2,
          text: '第二个'
        },
        {
          id: 3,
          text: '第三个'
        }
      ],
      selectSlide: '1',
      currentPage: 5
    }
  },
  methods: {
    handleClick() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    handleToast() {
      this.$toast({
        message: `0-10000随机数： ${Math.floor(Math.random() * 10000)}`,
        closeButton: {
          text: '关闭',
          callback() {
            console.log('close toast')
          }
        },
        autoClose: 3,
        position: 'top'
      })
    },
    onPageChange(page) {
      this.currentPage = page
    }
  }
})
