//TODO: adding user mod https://youtu.be/e-E0UB-YDRk?t=33584
<template>
	<!-- heading -->
	<h1 class="my-5 text-4xl text-center underline font-semibold">
		User Crud App
	</h1>
	<!-- create -->
	<Create @user-created="addUser"/>
	<!-- data -->
	<section class="m-8" @click="isModalOpen = false">
		<div class="flex flex-col shadow-2xl">
		  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
		    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
		      <div class="overflow-hidden">
		        <table class="min-w-full">
		          <thead class="border-b">
		            <tr>
		              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
		                #
		              </th>
		              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
		                First
		              </th>
		              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
		                E-mail
		              </th>
		              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
		                Avatar
		              </th>
		            </tr>
		          </thead>
		          <tbody>
		            <tr v-for="user in state.users" :key="user.id" class="border-b">
		              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
		              	<button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" @click="deleteUser(user._id)">
		              		Delete
		              	</button>
		              </td>
		              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
		                {{user.name}}
		              </td>
		              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
		                {{user.email}}
		              </td>
		              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
		                <img :src="user.avatar" class="rounded-full h-14 w-14">
		              </td>
		            </tr>
		          </tbody>
		        </table>
		      </div>
		    </div>
		  </div>
		  <div class="flex justify-between">
		    <button 
			    class="font-semibold hover:underline px-10 text-white border rounded py-2 m-4 bg-green-800" 
			    @click="prevPage" 
			    :class="state.users.page === 1 ? 'opacity-50' : ''"
			    :disabled="state.users.page === 1"
			>
				Prev
			</button>
		    <button 
			    class="font-semibold hover:underline px-10 text-white border rounded py-2 m-4 bg-green-800" 
			    @click="nextPage"
			    :class="state.users.page === 2 ? 'opacity-50' : ''"
			    :disabled="state.users.page === 2"
		    >
				Next
			</button>
		  </div>
		</div>
	</section>	
</template>

<script>
	import { onMounted, reactive } from 'vue';
	import axios from 'axios';
	import Create from '../components/UserCrud/create';

	export default {
	  name: 'UserCrud',
	  components: {Create},
	  setup() {
	  	// variables
	  	const state = reactive({
	  		users: {},
	  		form: {
	  			name: '',
	  			email: '',
	  			avatar: '',
	  		}
	  	})

	  	//data fetch
		axios.defaults.baseURL = process.env.VUE_APP_API_URL;
	  	onMounted(async () => {
	  		const { data } = await axios.get(`/users`)
	  		state.users = data
	  		// state.users.data.pop()
	  	})

	  	//buttons
	  	async function nextPage() {
	  		const { data } = await axios.get(`/users?page=2`)
	  		state.users = data
	  		state.users.data.pop()
	  	}
	  	async function prevPage() {
	  		const { data } = await axios.get(`/users?page=1`)
	  		state.users = data
	  		state.users.data.pop()
	  	}

	  	// add user to list
	  	function addUser(data) {
	  		state.users.push(data)
	  	}

	  	//delete user
	  	async function deleteUser(id) {
	  		await axios.delete(`/users/${id}`)
	  		state.users = state.users.filter(user => user._id !== id)
	  	}

	  	return { state, nextPage, prevPage, deleteUser, addUser }
	  }
	}
</script>
