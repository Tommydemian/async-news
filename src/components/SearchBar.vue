<template>
<div class="m-4">
    <input type="text" v-model="dataSearch" name="" placeholder="Search for news..." class="border-solid border-b-2 p-2 focus:border-none focus-within:border-none ">
    <Button :buttonText="'search'" :type="'button'" class="m-2" @click="$emit('customChange', dataSearch)" />
</div>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';

const emit = defineEmits(['customChange']);

const dataSearch = ref(''); 
</script>

<style scoped>  
  input,
  button {
    margin: 0;
  }

  input:focus {
    outline: none;
  }
</style>