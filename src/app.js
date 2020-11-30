import Vue from 'vue'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Row from './components/Row'
import Col from './components/Col'
import Container from './components/Container'
import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'
import Footer from './components/Footer'
import Tabs from './components/Tabs'
import TabsHead from './components/TabsHead'
import TabsItem from './components/TabsItem'
import TabsBody from './components/TabsBody'
import TabsPane from './components/TabsPane'
import Toast from './components/plugin'
import Popover from './components/Popover'
import Collapse from './components/Collapse'
import CollapseItem from './components/CollapseItem'
import Carousel from './components/Carousel'
import CarouselItem from './components/CarouselItem'
import Pagination from './components/Pagination'

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
