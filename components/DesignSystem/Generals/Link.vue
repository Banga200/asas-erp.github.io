<script setup>
import ArrowRight from '~/components/Icons/Arrows/ArrowRightLong.vue';
const {text, href, target, rightIcon, leftIcon, underline, color} = defineProps(['text', 'href', 'target', 'rightIcon', 'leftIcon', 'underline', 'color'])
</script>
<template>
    <div class="row link" :class="[{'underline': underline}, color]">
        <div class="icon" v-if="rightIcon">
            <component :is="rightIcon"/>
        </div>
        <NuxtLink :to="href" :target="target" >
        {{ text }}
        </NuxtLink>
        <div class="icon" v-if="leftIcon">
            <component :is="leftIcon"/>
        </div>
    </div>
</template>  