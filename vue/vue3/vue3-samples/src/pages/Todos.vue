<template>
  <section class="m-10 text-center justify-center">
    <h1 class="text-4xl font-bold underline">Todos ({{ todosLength }})</h1>
    <div class="m-10">
      <ul>
        <div
          v-for="(todo, index) in todos"
          :key="todo.name"
          class="flex justify-between p-2"
        >
          <li>
            {{ index + 1 + " - " + todo.name }}
          </li>
          <button class="noselect" @click="removeTodo(index)">x</button>
        </div>
      </ul>
    </div>
    <form @submit.prevent="addTodo">
      <input
        class="border border-green-800 p-2 outline-none"
        type="text"
        v-model.trim="newTodo"
        ref="newTodoRef"
        placeholder="Enter A Todo"
      />
      <button
        class="bg-green-800 p-2 text-white shadow mt-5"
        @keydown.enter="submit"
        type="submit"
        :disabled="isButtonDisabled"
      >
        Add Todo
      </button>
    </form>
  </section>
</template>

<script>
  import { ref, onMounted, computed } from 'vue';

  export default {
    name: 'Todos',
    setup () {
      // input system
      let newTodoRef = ref('')
      let newTodo = ref('');
      onMounted(() => {
        newTodoRef.value.focus()
      })

      // btn disable
      let isButtonDisabled = computed({
        get: () => newTodo.value === '' ? true : false
      })

      // todos 
      let todos = ref([
        { name : 'Work' },
        { name : 'Eat' },
        { name : 'Sleep' },
      ]);

      //add todo
      function addTodo() {
        todos.value.push({ name : newTodo.value });
        newTodo.value = '';
      }

      // remove todo
      function removeTodo(index){
        todos.value = todos.value.filter((todo,i) => i != index)
      };


      //todos count
      const todosLength = computed({
        get: () => todos.value.length,
      })


      return { newTodo, todos, removeTodo, addTodo, newTodoRef, todosLength, isButtonDisabled }
    }
  }
</script>