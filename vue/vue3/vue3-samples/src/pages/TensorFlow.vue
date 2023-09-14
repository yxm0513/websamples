<!-- vid not working - https://youtu.be/e-E0UB-YDRk?t=36720 -->
<template>
	<!-- heading -->
	<h1 class="my-5 text-4xl text-center underline font-semibold">
		Object Detection
	</h1>
	<!-- image -->
	<div>
		<div class="flex flex-wrap justify-center">
		  	<img
		  		ref="imgRef"
			  	src="https://images.unsplash.com/photo-1567581935884-3349723552ca"
			  	class="p-1 bg-white border rounded max-w-sm"
			  	alt="Image"
			  	crossorigin="anonymous"
			/>
			<video
		  		autoplay="true"
		  		ref="videoRef"
			  	class="p-1 bg-white border rounded max-w-sm"
			/>
		</div>
		<br>
		<div class="justify-center text-center">
			<!--  detect button -->
			<button @click="detect" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> 
				<span v-if="isLoading == true">Loading...</span>
				<span v-else>Detect Object</span>
			</button>
			<!-- stream buttons -->
			<button @click="openCam" v-if="isStreaming == false" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> 
				Open Camera
			</button>
			<button @click="stopStreaming" v-else class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> 
				Stop Recording
			</button>
			<button @click="takeShot" v-if="isStreaming == true" class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> 
				Take Shot
			</button>
			<!-- result -->
			<br>
			<div v-if="result.length > 0" class="text-center">
				<p class="text-2xl font-semibold capitalize">{{result[0].class}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	// dependicies
	require('@tensorflow/tfjs-backend-cpu');
	require('@tensorflow/tfjs-backend-webgl');
	const cocoSsd = require('@tensorflow-models/coco-ssd');
	import { ref } from 'vue';

	export default {
	  name: 'TensorFlow',
	  setup() {
	  	//ref
	  	const imgRef = ref('')
	  	const videoRef = ref({})
	  	const result = ref([])
	  	const isLoading = ref(false)
	  	const isStreaming = ref(false)

	  	// detect img
	  	async function detect() {
	  		isLoading.value = true
	  		const img = imgRef.value;
		  	const model = await cocoSsd.load();
		 	const predictions = await model.detect(img);
		    result.value = predictions;
		    isLoading.value = false
	  	}

	  	//open cam
	  	async function openCam() {
	      if (navigator.mediaDevices.getUserMedia) {
	        const devices = await navigator.mediaDevices.enumerateDevices();
	        const cams = devices.filter((device) => device.kind === "videoinput");
	        const camId = cams[0].deviceId;
	        const video = cams.length === 1 ? true : { deviceId: { exact: camId } };
	        navigator.mediaDevices.getUserMedia({ video: video }).then((stream) => {
	          isStreaming.value = true;
	          videoRef.value.srcObject = stream;
	        });
	      }
	  	}
	  	//stop cam
	  	function stopStreaming() {
	      const stream = videoRef.value.srcObject;
	      const tracks = stream.getTracks();
	      tracks.map((track) => track.stop());
	      isStreaming.value = false;
	  	}

	  	//take shot
	    function takeShot() {
	      const canvas = document.createElement("canvas");
	      const ctx = canvas.getContext("2d");
	      ctx.drawImage(videoRef.value, 0, 0, 600, 200);
	      const data = canvas.toDataURL("image/png");
	      imgRef.value.setAttribute("src", data);
	    }

	  	//return
	  	return { imgRef, result, detect, isLoading, openCam, videoRef, isStreaming, stopStreaming, takeShot }
	  }
	}
</script>
