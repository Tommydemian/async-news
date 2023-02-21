<template>
<section>
  <div class="max-w-7xl mx-auto">
    <SearchBar @custom-change="dataChanged" />

    <Dropdown />

    <div class="dis-grid max-w-7xl">
        <NewsCard :elements="docs" />
    </div>
    </div>
</section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import SearchBar from "../components/SearchBar.vue";
import Dropdown from "../components/Dropdown.vue";

import NewsCard from "../components/NewsCard.vue";



// refs
const docs = ref([]);

const newValue = ref('');

async function fetchData(){  
  const xhr = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${newValue.value}&fq=news_desk:("Sports")&page=0&api-key=${import.meta.env.VITE_NYT_KEY}`);
  const response = xhr.data.response

  const docsArr = response.docs.filter(doc => doc.multimedia[0] !== undefined)
  .map(doc => {
  const dateSring = `${doc.pub_date}`
  const date = new Date(dateSring)
  const formattedDate = date.toLocaleDateString('en-US')
  return { ...doc, pub_date: formattedDate}
})  
docs.value = docsArr
}

  
const dataChanged = (value) => {
  const replacedValue = value.replace(/\s+/g, '-')
  newValue.value = replacedValue;    
  if (newValue.value.trim() !== ''){
      fetchData()
  };

};
</script>

<style scoped>
.dis-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 1em;
}

</style>
