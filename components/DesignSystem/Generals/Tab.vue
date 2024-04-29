<script setup>
const {text, color, disabled} = defineProps(['text', 'color', 'disabled'])
</script>
<template>
    <div class="tab " :class="[color, {'disabled': disabled}]">
        <span>{{ text }}</span>
    </div>
</template>