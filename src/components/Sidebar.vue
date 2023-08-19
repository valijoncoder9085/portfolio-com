<template>
  <div v-if="this.$route.path === '/login'">
    <Login/>
  </div>
  <div v-else>
    <header id="header">
      <Header/>
    </header>
    <main class="container main" :class="filterBackground(this.$route.path)">
      <RouterView/>
    </main>
    <footer class="footer">
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
export default {
  components: {
    Login,
    Header,
    Footer
  },
  data() {
    return {}
  },
  methods: {
    filterBackground(event) {
      switch (event) {
        case '/':
          return ''
        case '/home':
          return 'home';
        case '/about':
          return 'about';
        case '/setting':
          return 'setting'
      }
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.home {
  background-color: greenyellow;
}

.about {
  background-color: red;
}

.setting {
  background-color: yellow;
}

#header {
  padding: 0 20px;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 30px 0;
}

.main {
  min-height: 100vh;
}

.footer {
  padding: 0 20px;
  background-color: red;
}
</style>