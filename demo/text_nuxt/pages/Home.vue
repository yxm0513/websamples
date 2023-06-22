<template>
  <div>
     <NuxtLogo />
     <Tutorial/>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  transition: {
    name: 'page',
    mode: 'out-in'
  }

}
</script>

<!--<style>-->
<!--  .home-enter-active, .home-leave-active { transition: opacity 0.5s; }-->
<!--  .home-enter, .home-leave-active { opacity: 0; }-->
<!--</style>-->
