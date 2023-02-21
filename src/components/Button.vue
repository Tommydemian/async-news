<template>
    <button :type="props.type" class="inline-flex border py-1 px-2 bg-white focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200">
        {{ props.buttonText }}
    </button>
</template>

<script setup>
const props = defineProps({
    buttonText: {
        type: String,
        required: true
    }, 
    type: {
        type: String,
        required: true
    }
});
</script>

<style lang="scss" scoped>

</style>