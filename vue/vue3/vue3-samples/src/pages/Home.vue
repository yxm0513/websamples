<template>
	<h1 class="my-5 font-semibold text-center text-black text-2xl hover:underline">
		Vue 3 Tutorial
	</h1>
	<section class="animate-bounce mx-10 rouded-sm shadow-md p-4 h-1/5 text-center">
		<code class="my-5 font-semibold text-center text-black text-2xl cursor-not-allowed ">
			User: {{isUser ? loggedUserName : 'Anonymous'}}
		</code>
	</section>
</template>

<script>
	import { getAuth, onAuthStateChanged } from "firebase/auth";
  	import app from '../firebase';

	export default {
	  name: 'Home',
	  data () {
	    return {
	      isUser:false,
	      loggedUserName:'',
	      store: this.$store.state
	    };
	  },
	  mounted() {
	 	onAuthStateChanged(getAuth(), (user) => {
		    if (user) {
		        this.isUser = true
		        this.loggedUserName = user.email
		    } else {
		        this.isUser = false
		        this.loggedUserName = null
		    }
	      });
	  }
	}
</script>
