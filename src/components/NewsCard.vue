<template>
    <div v-for="doc in elements" :key="doc.id" class="py-8">
        <div class=" bg-slate-200 rounded-lg p-4 text-left w-min">
            <h1 class="font-bold text-2xl max-w-2xl mx-auto">{{ doc.headline.main }}</h1>
            <p class="my-4 max-w-prose mx-auto">{{ doc.abstract  }}</p>
            <span>See full article on: <br> <a class="text-blue-400" :href="doc.web_url">{{doc.web_url}}</a></span> 
            <img class="max-w-full mx-auto block rounded-md my-1" :src="'https://www.nytimes.com/' + doc.multimedia[0]?.url" :alt="doc.headline.main">
            <!-- fecha de publicacion -->
            <small class="ml-auto block">{{ doc.pub_date }}</small>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    elements: Array, 
    required: true,
});

</script>

