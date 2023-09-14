<template>
	<section class="flex w-full">
		<div class="m-auto">
			<!-- heading -->
			<h1 class="text-2xl text-center hover:underline">Calculator</h1>
			<!-- main Calculator -->
			<div class="my-12 bg-gray-200 rounded-md py-10 px-8 shadow z-10">
				<!-- eval -->
				<blockquote
				v-text="currentNum == '' ? 'Type Something!' : currentNum"
				style="text-align: center"
				:class="currentNum == '' ? 'text-gray-300' : 'text-black'"
				class="shadow-lg rounded-md h-10 text-lg px-4 py-2 z-20 bg-white mb-8 focus:outline-none focus:ring-2"></blockquote>
				<!-- buttons -->
				<div class="grid grid-cols-4 gap-3">
					<!-- nums & signs -->
					<button  
						@click="noClicked('1')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-white hover:underline"
					>{{1}}
					</button>
					<button  
						@click="noClicked('2')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-white hover:underline"
					>{{2}}
					</button>
					<button  
						@click="noClicked('3')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-white hover:underline"
					>{{3}}
					</button>
					<button  
						@click="noClicked('+')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-green-600 hover:underline"
					>+
					</button>
					<button  
						@click="noClicked('4')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-white hover:underline"
					>{{4}}
					</button>
					<button  
						@click="noClicked('5')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-white hover:underline"
					>{{5}}
					</button>
					<button  
						@click="noClicked('6')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-white hover:underline"
					>{{6}}
					</button>
					<button  
						@click="noClicked('-')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-green-600 hover:underline"
					>-
					</button>
					<button  
						@click="noClicked('7')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-white hover:underline"
					>{{7}}
					</button>
					<button  
						@click="noClicked('8')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-white hover:underline"
					>{{8}}
					</button>
					<button  
						@click="noClicked('9')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-white hover:underline"
					>{{9}}
					</button>
					<button  
						@click="noClicked('*')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-green-600 hover:underline"
					>*
					</button>
					<button 
						@click="noClicked('0')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-white hover:underline">
					0</button>
					<!-- equal sign -->
					<button @click="noClicked('=')"
					class="shadow-lg rounded-md col-span-2 text-lg hover:shadow-md px-4 py-2 z-20 hover:underline" 
					style="background: #ffb617;">=</button>
					<!-- last sign -->
					<button  
						@click="noClicked('/')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-green-600 hover:underline"
					>/
					</button>
					<!-- clear options -->
					<button  
						@click="noClicked('C')"
						class="shadow-lg rounded-md text-lg hover:shadow-md px-4 py-2 z-20 bg-blue-400 hover:underline col-span-4"
					>{{'C'}}
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { ref , onMounted, onUnmounted } from 'vue';

	export default {
	  name: 'Calculator',
	  setup() {
	  	//variables
	    let currentNum = ref("");
   		let prevNum = ref("");
	    let selectedOperation = ref('')
	    const operations = ['+', '-', '/', '*']
	    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

	    //key listners
	    onMounted(() => window.addEventListener('keydown', (e) => noClicked(e.key)))
	    onUnmounted(() => window.removeEventListener('keydown', (e) => noClicked(e.key)))

	  	//on click
	  	function noClicked(value) {
	   		if(value === '=' || value == 'Enter') {
	   			calculate()
	   		} else if(value == 'C' || value == 'c') {
	   			clear()
	   		} else if(operations.includes(value)) {
	   			applyOperation(value)
	   		} else if(numbers.includes(value)) {
	   			appendNumber(value)
	   		} else return;
	    }

		//append no
		function appendNumber(value) {
			currentNum.value = currentNum.value + value
		}

		//clear
		const clear = () => (currentNum.value = "");

		//apply opertion
		function applyOperation(opr) {
			prevNum.value = currentNum.value
			currentNum.value = ''
			selectedOperation.value = opr
		}

	    // calculate
	    function calculate() {
	    	if(selectedOperation.value == '/') divide();
	    	if(selectedOperation.value == '*') multiply();
	    	if(selectedOperation.value == '+') sum();
	    	if(selectedOperation.value == '-') subtract();
	    }

		//solve
		function multiply() {
	      currentNum.value = prevNum.value * currentNum.value;
	    }
	    function divide() {
	      currentNum.value = prevNum.value / currentNum.value;
	    }
	    function subtract() {
	      currentNum.value = prevNum.value - currentNum.value;
	    }
	    function sum() {
	      currentNum.value = +prevNum.value + +currentNum.value;
	    }

	    //return
	    return { currentNum, calculate, prevNum, operations, noClicked, selectedOperation }
	  }
	}
</script>
