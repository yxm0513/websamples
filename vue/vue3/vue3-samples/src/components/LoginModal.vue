<template>
  <section 
  	class="z-20 h-screen w-screen bg-black fixed top-0 opacity-50"
  	@click="closeLoginModal"
  >
  </section>
	<div class="inset-0 absolute border-green-800">
		<div class="flex h-full">
			<div class="m-auto shadow-lg p-2 rounded-md bg-white z-30 w-1/3 p-1">
				<h1 class="text-center text-2xl underline font-semibold">Login</h1>
				<!-- google login -->
				<section class="my-5 px-4">
					<button 
							@click="loginWithGoogle"
            	class="bg-red-800 hover:bg-red-900 py-2 text-white rounded shadow-md p-1 w-full hover:shadow-sm focus:outline-none focus:ring">
            	Login With Google
           </button>
				</section>
				<section class="mx-10">
					<hr class="my-3 w-full border-green-800 opacity-25">					
				</section>
				<form @submit.prevent="formSubmit" class="p-1 m-1">
					<!-- email input -->
					<div class="my-4 px-3">
						<label for="emailId">Email</label>
						<br>
						<input 
							type="email" 
							name="emailId" 
							placeholder="Enter Your E-mail" 
							v-model="enteredEmail" 
							ref="emailInputRef"
							required="true"
							class="w-full shadow-md text-lg hover:shadow-lg focus:outline-none focus:ring focus:border-green-800 text-lg"
						>
					</div>
					<!-- pass input -->
					<div class="my-4 px-3">
						<label for="passInput">Password</label>
						<br>
						<input 
							type="password" 
							name="passInput" 
							placeholder="Enter A Strong Password" 
							v-model="enteredPass" 
							required="true"
							class="w-full shadow-md text-lg hover:shadow-lg focus:outline-none focus:ring focus:border-green-800 text-lg"
						>
					</div>
					<!-- submit btn -->
					<div class="my-5 px-2">
            <button 
            	:type="btnLoading == true ? '' : 'submit'" 
            	:disabled="btnLoading == true ? true : false"
            	:class="btnLoading == true ? 'bg-red-800 cursor-wait' : 'bg-green-800'"
            	class="py-2 text-white rounded shadow-md p-1 w-full hover:shadow-sm focus:outline-none focus:ring">
            	{{ btnLoading == true ? '🕓' : 'Login' }}
            </button>
          </div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
	import app from '../firebase';
	import { 
		getAuth, 
		signInWithEmailAndPassword, 
		GoogleAuthProvider, 
		signInWithPopup } from "firebase/auth";


	export default {
	  name: 'LoginModal',
	  emits: ['close-login-modal'],
	  data () {
	    return {
	    	btnLoading: false,
	    	enteredEmail: '',
	    	enteredPass: ''
	    }
	  },
	  mounted() {
	  	this.$refs.emailInputRef.focus()
	  },
	  methods: {
	  	loginWithGoogle() {

	  		let provider = new GoogleAuthProvider();
	  		this.btnLoading = true

				signInWithPopup(getAuth(), provider)
				  .then((result) => {
				    this.btnLoading = false
				  	this.closeLoginModal()
				  }).catch((error) => {
				    alert(error.message)
				    this.btnLoading = false
				  });
	  	},
	    formSubmit (e) {
	    	this.btnLoading = true
				signInWithEmailAndPassword(getAuth(), this.enteredEmail, this.enteredPass)
				.then((userCredential) => {
				  	this.btnLoading = false
				  	this.closeLoginModal()
				})
				.catch((error) => {
				  alert(error.message)
				  this.btnLoading = false
				});
	    },
	    closeLoginModal() {
	    	this.$store.state.loginModal = false
	    }
	  }
	}
</script>
