<template>
	
	<h1 class="text-3xl m-7 text-center font-semibold">Slider</h1>

	<div class="flex flex-wrap w-full justify-center">
		<div v-for="(color, index) in sliders" :key="color" class="w-11/12 h-96 absolute">
			<transition name="fade">
				<div 
					class="w-full h-96"
					v-if="currentSlide == index"
					:class="color"
				></div>
			</transition>
		</div>
	</div>

	<div class="absolute w-full h-96 justify-center flex">
		<div class="absolute bottom-5 justify-center flex">
			<div
				v-for="(slider, index) in sliders"
				:key="slider"
				:class="currentSlide == index ? 'bg-gray-600' : 'bg-gray-400'"
				@click="makeActive(index)"
				class="w-4 h-4 rounded-full mx-1 cursor-pointer"></div>
		</div>
	</div>

</template>

<script>
	export default {
	  name: 'Slider',
	  data () {
	    return {
	    	currentSlide: 0,
	    	sliders: [' bg-purple-300',' bg-green-300',' bg-blue-300'],
	    	slideInterval: '',
	    }
	  },
	  methods: {
	    makeActive (index) {
	      this.currentSlide = index;
	    }
	  },
	  mounted () {
	  	this.slideInterval = setInterval(() => {
			this.currentSlide == 2 ? this.currentSlide = 0 : this.currentSlide = this.currentSlide + 1;
	  	}, 1690)
	  },
	  beforeUnmount () {
	  	clearInterval(this.slideInterval)
	  }
	}
</script>

<style>
	body {
		overflow: hidden;
	}
	.fade-enter-active,
	.fade-leave-active {
	  transition: all 1s ease;
	}
	.fade-enter-from {
	  opacity: 0;
	  transform: translateX(-100%);
	}
	.fade-leave-to  {
	  opacity: 0;
	  transform: translateX(100%);
	}
</style>