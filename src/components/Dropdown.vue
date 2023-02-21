<template>
    <button class="relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200">
        <p class="px-5">Dropwdown</p>
        <span @click="toggleDisplay" class="border-l p-2 hover:bg-gray-100">
            <Icon icon="ic:round-keyboard-arrow-down" />
        </span>
    </button>
    <div v-if="!isDisplayed" class="absolute min-w-max w-max bg-white shadow-md mt-1 rounded" 
    >
        <ul class="text-left border rounded">
            <li v-for="newdesk in newsDeskValues" class="px-4 py-1 hover:bg-gray-100 border-b cursor-pointer">{{newdesk}}</li>
            
        </ul>
    </div>
<!-- 
    <div v-bind="containerProps" class="h-screen p-2 rounded">
        <div v-bind="wrapperProps" class="max-w-sm mx-auto">
            <div v-for="{index, data} in list "
            :key="index"
            >
            <p>{{data}}</p>
            </div>

        </div>
    </div> -->
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

import { useVirtualList } from '@vueuse/core'

const isDisplayed = ref(false);
const toggleDisplay = () => isDisplayed.value = !isDisplayed.value;


const newsDeskValues = ref([
'Adventure Sports',
'Arts & Leisure',
'Arts',
'Automobiles',
'Blogs',
'Books',
'Booming',
'Business Day',
'Business',
'Cars',
'Circuits',
'Classifieds',
'Connecticut',
'Crosswords & Games',
'Culture',
'DealBook',
'Dining',
'Editorial',
'Education',
'Energy',
'Entrepreneurs',
'Environment',
'Escapes',
'Fashion & Style',
'Fashion',
'Favorites',
'Financial',
'Flight',
'Food',
'Foreign',
'Generations',
'Giving',
'Global Home',
'Health & Fitness',
'Health',
'Home & Garden',
'Home',
'Jobs',
'Key',
'Letters',
'Long Island',
'Magazine',
'Market Place',
'Media',
`Men's Health`,
'Metro',
'Metropolitan',
'Movies',
'Museums',
'National',
'Nesting',
'Obits',
'Obituaries',
'Obituary',
'OpEd',
'Opinion',
'Outlook',
'Personal Investing',
'Personal Tech',
'Play',
'Politics',
'Regionals',
'Retail',
'Retirement',
'Science',
'Small Business',
'Society',
'Sports',
'Style',
'Sunday Business',
'Sunday Review',
'Sunday Styles',
'T Magazine',
'T Style',
'Technology',
'Teens',
'Television',
'The Arts',
'The Business of Green',
'The City Desk',
'The City',
'The Marathon',
'The Millennium',
'The Natural World',
'The Upshot', 
'The Weekend', 
'The Year in Pictures',
'Theater',
'Then & Now',
'Thursday Styles',
'Times Topics',
'Travel',
'U.S.',
'Universal',
'Upshot',
'UrbanEye',
'Vacation',
'Washington',
'Wealth',
'Weather',
'Week in Review',
'Week',
'Weekend',
'Westchester',
'Wireless Living',
`Women's Health`,
'Working',
'Workplace',
'World',
'Your Money'
])

const {list, containerProps, wrapperProps} = useVirtualList( newsDeskValues.value, {
    itemHeight: 96
} 

)

</script>

<style lang="scss" scoped>

</style>