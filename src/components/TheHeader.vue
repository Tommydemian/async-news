<template>
  <header class="p-8 bg-slate-400 text-white">
    <div class="max-w-7xl flex justify-between items-center mx-auto">
      <div><Icon class="w-8 h-8" icon="fluent:news-20-regular" /></div>
      <nav>
        <div>
          <Icon @click="displayMobileMenu" v-if="!hambMenuDisplayed" class="w-8 h-8 absolute z-10 top-8 right-6 sm:hidden" icon="ic:round-menu" />
          <Icon @click="displayMobileMenu" v-if="hambMenuDisplayed" class="w-8 h-8 absolute z-10 top-8 right-6 smhidden" icon="ic:round-close" />
        </div>
        <ul :class="{'hidden': !hambMenuDisplayed}" role="list" class="list-none absolute bg-slate-600 text-white p-4 rounded-md inset-0 left-1/3 
        sm:relative sm:flex sm:bg-inherit sm:gap-5">
          <li class="pt-4 sm:pt-0" v-for="link in links">
            <router-link :to="link.link">{{link.name}}</router-link>
          </li>
        </ul>
      </nav>
      <div class="hidden sm:block">
        searcbar
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

import { Icon } from '@iconify/vue';

const hambMenuDisplayed = ref(false);

function displayMobileMenu(){
  hambMenuDisplayed.value = !hambMenuDisplayed.value;
};

const links = [
  {name: 'Home', link: 'home'},
  {name: 'About', link: 'about'},
  {name: 'News', link: 'news'},
  {name: 'Products', link: 'products'},
  {name: 'Catalog', link: 'catalog'},
]

</script>

<style lang="scss" scoped>

</style>