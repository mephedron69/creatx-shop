<template>
  <div>
    <Header />
    <router-view class="main" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue';
import Footer from './components/layouts/Footer.vue';

export default {
  name: "App",
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss">

#app {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

  html,body,p {
    overflow-x: hidden;
    margin: 0 ;
    padding: 0 ;
  }
</style>