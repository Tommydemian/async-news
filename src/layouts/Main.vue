<template>
    <div
    ref="main"
    v-viewportHeight
    class="w-full scroll-smooth overflow-y-scroll flex flex-col justify-between"
  >
    <div class="h-full">
      <TheHeader :class="hideHeader ? 'hideHeader' : 'showHeader'" />
      <main>
        <div>
          <router-view class="h-full overflow-x-hidden" />
        </div>
      </main>
      <TheFooter />
    </div>
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

