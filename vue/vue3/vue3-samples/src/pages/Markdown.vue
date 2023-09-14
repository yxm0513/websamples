<template>

	<!-- heading -->
	<h1 class="my-5 text-4xl text-center underline font-semibold">
		Markdown Application
	</h1>

	<!-- editor -->
	<section class="flex justify-between h-screen m-1 p-1 shadow">
		<article class="w-1/2 border shadow-lg rounded-md mx-1">
			<textarea 
				class="w-full h-full" 
				placeholder="Enter Some To Get Marked..."
				ref="markedTextboxRef"
				:value="textToBeMarked" 
				@input="updateText"
			>
			</textarea>
		</article>
		<article class="w-1/2 overflow-hidden bg-gray-100 p-3 border shadow-lg rounded-md mx-1" v-html="markedText">
		</article>
	</section>

</template>

<script>
	import { marked } from 'marked';
	import debounce from '../utilities/mixins/debounce';

	export default {
	  name: 'Markdown',
	  mixins: [debounce],
	  data () {
	    return {
	    	textToBeMarked: '# **Mark Down** Editor _Vue Js_',
	    }
	  },
	  mounted() {
	  	this.$refs.markedTextboxRef.focus()
	  },
	  methods: {
	    updateText (e) {
	    	let task = () => (this.textToBeMarked = e.target.value);
	    	this.debounce(task, 300)
	    }
	  },
	  computed: {
	    markedText () {
	      return marked.parse(this.textToBeMarked);
	    }
	  }
	}
</script>
