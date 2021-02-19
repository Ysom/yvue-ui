<template>
  <svg class="icon" v-if="name" aria-hidden="true" >
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
  import '../svg'
  export default {
    name: "Icon",
    props: {
      name: {
        type: String
      }
    }
  }
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.2em;
}
</style>
