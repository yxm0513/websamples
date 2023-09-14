<template>
	<nav class="overflow-x-scroll w-full bg-gradient-to-r from-green-800 to-green-500 px-2 py-2 text-white text-2xl flex">
		<div v-for="link in links" :key="link">
			<router-link :to="link.path" class="mx-5">{{ link.name }}</router-link>
		</div>
		<div class="absolute right-10">
			<button 
				@click="openLoginModal"
				v-if="currentUser == null"
				class="rounded-sm shadow-md bg-yellow-300 text-black border border-black px-3 hover:underline">
				Login
			</button>
			<button 
				@click="signOutUser"
				v-else
				class="rounded-sm shadow-md bg-yellow-300 text-black border border-black px-3 hover:underline"
			>
			Logout
			</button>
		</div>
	</nav>
</template>

<script>
	import { routes } from '../router';
	import { getAuth, signOut } from "firebase/auth";
	import app from '../firebase';

	export default {
		name: 'Nav',
		data() {
			return {
				links: routes,
			}
		},
		computed: {
		  currentUser () {
		    return this.$store.state.currentUser;
		  }
		},
		methods: {
		  signOutUser() {
		    signOut(getAuth()).catch((error) => {
			  alert(error.message)
			});
		  },
		  openLoginModal() {
			this.$store.state.loginModal = true
		  }
		}
	}
</script>
