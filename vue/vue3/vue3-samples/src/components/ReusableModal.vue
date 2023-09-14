<template>
 	<section 
  		class="z-20 h-screen w-screen bg-black fixed left-0 top-0 opacity-50"
  		@click="closeModal"
  	></section>
	<div class="inset-0 absolute border-green-800">
		<div class="flex h-full">
			<div class="m-auto shadow-lg p-6 rounded-md bg-white z-30 w-1/3 p-1">
				<h1 class="text-center text-2xl hover:underline">
					<slot name="heading">Heading</slot>
				</h1>
				<slot name="body">
					<details>
					  <summary>Error</summary>
					  <p>No Data Was Provided In Modal!</p>
					</details>
				</slot>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'ReusableModal',
	  setup( _ , { emit }){
	  	//close modal
	  	function closeModal() {
	  		emit('close-modal')
	  	}


	  	//returning
	  	return { closeModal }
	  }
	}
</script>
