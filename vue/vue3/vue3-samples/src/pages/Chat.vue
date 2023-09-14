//TODO: computed
<template>
	<section class="flex w-full">
		<div class="m-auto w-full flex flex-wrap justify-center">
			<h1 class="text-center text-3xl my-4 w-full">Real Time Chat</h1>
			<div class="border border-green-800 rounded-lg w-10/12 md:w-4/12">
				<!-- chats -->
				<div class="h-auto p-2">
					<div 
						v-for="chat in state.chats"
						:key="chat.message"
						class="text-white mx-1 p-2"
						:class="chat.userId === userId ? 'text-right' : ''"
					>
						<span class="bg-green-700 m-1 p-2 rounded-lg">
							{{chat.message}}
						</span>
						
					</div>
				</div>
				<!-- input -->
				<div class="h-8 p-2">
					<div class="flex">
		        <input
			        v-model="state.message"
			        placeholder="Enter New Message"
			        @keydown.enter="sendMsg"
			        class="p-1 h-sm border border-green-800 rounded-lg shadow w-full"
		        />
		        <button
			        class="bg-green-800 p-2 h-sm text-white shadow rounded-lg"
			        @click="sendMsg"
		      	>Send
	      		</button>        		
        	</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { getDatabase, ref, onValue, set, push } from "firebase/database";
	import { onMounted, reactive, computed } from 'vue';
	import { getAuth } from "firebase/auth";
	import { useStore } from 'vuex';

	export default {
	  name: 'Chat',
	  setup () {
	  	// state
	  	let state = reactive({
	  		chats: {},
	  		message: "",
	  		collection: null
	  	})

	  	// fetching msgs on load
	  	onMounted(async () => {
	  		const db = getDatabase()
	  		state.collection = ref(db, 'chats/')
	  	})
      
	  	// db & store
     	const db = getDatabase();
			const starCountRef = ref(db, 'chats/');
			onValue(starCountRef, (snapshot) => {
			  const data = snapshot.val();
			  state.chats = data
		});
		const store = useStore().state

	  	//send msg
	  	let userId = computed(() => {
	  		if(store.currentUser == null) return 'None';
	  		else return store.currentUser.uid;
	  	})

	  	const sendMsg = async() => {
	  		if(state.message == "") return;
	  		const db = getDatabase();
			const chatsRef = ref(db, 'chats/');
			const newChat = push(chatsRef);
			set(newChat, {
				message: state.message,
				userId: userId.value
			})
			state.message = ""
	  	}

	  	//return
	  	return { state , sendMsg, userId }
	  }
	}
</script>
