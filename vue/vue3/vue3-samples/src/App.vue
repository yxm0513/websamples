<template>

  <!-- Navigation -->
  <Nav />

  <!-- Login Modal -->
  <teleport to="body">
    <LoginModal v-if="this.$store.state.loginModal == true"/>
  </teleport>

  <!-- Router View -->
  <router-view></router-view>

</template>

<script>
  import Nav from './components/Nav';
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import app from './firebase';
  import LoginModal from './components/LoginModal';

  export default {
    name: 'App',
    components: { Nav , LoginModal },
    mounted() {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          this.$store.commit('setLogin', true)
          this.$store.commit('setAuthUser', user)
        } else {
          this.$store.commit('setLogin', false)
          this.$store.commit('setAuthUser', null)
        }
      });
    }
  }
</script>