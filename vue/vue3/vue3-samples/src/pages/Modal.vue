<template>
	<section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h2 class="text-3xl my-7 hover:underline">Re Usable Modal</h2>
      <div>
        <!-- btns -->
        <button @click="openRedModal" class="w-full my-1 bg-green-800 p-2 text-white shadow">
          Open Modal 1 (Red)
        </button>
        <button @click="openBlueModal" class="w-full my-1 bg-green-800 p-2 text-white shadow">
          Open Modal 2 (Blue)
        </button>
      </div>
      <!-- modals -->
      <ReusableModal v-if="isRedModalOpen" @close-modal="closeRedModal">
        <h1 class="text-center animate-bounce text-red-600 underline text-3xl">Red Modal</h1>
      </ReusableModal> 
      <ReusableModal v-if="isBlueModalOpen" @close-modal="closeBlueModal">
        <template #heading>
          <span class="text-blue-600">Blue</span> Modal Op
        </template>
        <template v-slot:body>  
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          </p>
        </template>
      </ReusableModal> 
      <!--  -->
    </div> 
  </section>
</template>

<script>
  import ReusableModal from '../components/ReusableModal.vue';
  import { ref } from 'vue';

  export default {
    name: 'Modal',
    components: { ReusableModal },
    setup() {
      //varianles
      let isRedModalOpen = ref(false)
      let isBlueModalOpen = ref(false)

      //off Modal
      const closeRedModal = () => isRedModalOpen.value = false;
      const closeBlueModal = () => isBlueModalOpen.value = false;

      //on modal
      const openRedModal = () => isRedModalOpen.value = true;
      const openBlueModal = () => isBlueModalOpen.value = true;

      //returning
      return { isRedModalOpen, isBlueModalOpen, closeRedModal, closeBlueModal, openRedModal, openBlueModal }
    }
  }
</script>