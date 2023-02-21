<template>
    <div class="w-full scroll-smooth flex flex-col min-h-screen text-black">
      <TheHeader/>
      <main class="flex-1">
        <div>
          <router-view class="h-full overflow-x-hidden" />
        </div>
      </main>
      <TheFooter />
    </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';

export default {
    components: {
        TheHeader, 
        TheFooter
    },
    setup () {
        

        return {}
    }
}
</script>

