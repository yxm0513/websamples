<template>
	<!-- create user btn -->
	<div class="flex justify-between mx-4">
		<button class="font-semibold hover:underline px-10 text-white border rounded py-2 m-4 bg-green-800 shadow-2xl w-1/5 opacity-0">
		</button>
		<button class="font-semibold hover:underline px-10 text-white border rounded-md py-2 m-4 bg-green-700 shadow-2xl w-1/5" @click='isModalOpen = true'>
			Add User
		</button>
	</div>
	<teleport to="body">
		<ReusableModal v-if="isModalOpen" @close-modal="isModalOpen = false">
			<template #heading>
				Create New User
			</template>
			<template #body>	
			<form @submit.prevent="createUser">
				<div class="mb-6">
					<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
					<input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter User Name" required v-model="state.form.name">
				</div>
				<div class="mb-6">
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter Email</label>
					<input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter User E-mail" required v-model="state.form.email">
				</div>
				<div class="mb-6">
					<label for="avatar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Avatar URL</label>
					<input type="text" id="avatar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Image URL" required  v-model="state.form.avatar">
				</div>
				<div class="text-center">
					<button type="submit" class="text-white bg-green-800 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create User</button>
				</div>
			</form>
			</template>
		</ReusableModal>
	</teleport>
</template>

<script>
	import ReusableModal from '../ReusableModal';
	import { ref, reactive } from 'vue';
	import axios from 'axios';

	export default {
	  name: 'create',
	  components: { ReusableModal },
	  setup(_, { emit }) {
	  	//variables
	  	const isModalOpen = ref(false)
	  	const state = reactive({
	  		form: {
	  			name: '',
	  			email: '',
	  			avatar: '',
	  		}
	  	})

	  	//create user
	  	async function createUser() {
	  		const { data } = await axios.post('/users', state.form)
	  		emit('user-created', data)
	  		state.form.email = ''
	  		state.form.name = ''
	  		state.form.avatar = ''
	  		isModalOpen.value = false
	  	}

	  	// return
	  	return { isModalOpen, createUser, state }
	  }
	}
</script>
