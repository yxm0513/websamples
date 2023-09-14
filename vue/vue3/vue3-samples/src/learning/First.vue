<template>
  <h1>{{title}}</h1>
  <div v-html="html"></div>
  <br><br><br>
  <h5 v-show="isClicked != true">If Show Text</h5>
  <button>Click</button>
  <h4 v-if="isClicked">You Clicked</h4>
  <h4 v-else-if="isClicked == null">Else Null Clicked</h4>
  <h4 v-else>You Don't Clicked</h4>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
      title: 'Hi',
      html: `<details>This Is Html Details</details>`,
      isClicked: true
    }
  }
}
</script>

<style>
  body {
    background-color: black;
    color: white;
  }
</style>

