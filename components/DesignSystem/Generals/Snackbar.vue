<script setup>
import Close from '~/components/Icons/Close.vue';
import Link from './Link.vue';
import {ref, onMounted} from 'vue';
const active = ref(false)
const {text, rightActionText, leftActionText, closeIcon, color, multiline, noIcon, stopHide} = defineProps(['text', 'rightActionText', 'leftActionText', 'closeIcon', 'color', 'multiline', 'noIcon', 'stopHide']);
onMounted(() => {
    active.value = true
    if (!stopHide) {
        setTimeout(() =>{active.value = false}, 3000)
    }
   
})
</script>
<template>
    <div class="snackbar-container" :class="[color, {'multiline': multiline}, {'active': active}]">
        <div class="text">
            {{ text }}
        </div>
        <div class="actions">
            <!-- Actions  -->
            <Link :text="rightActionText" v-if="rightActionText" :underline="true" :color="'neutral'"/>
            <Link :text="leftActionText" v-if="leftActionText" :underline="true" :color="'neutral'" @click="$emit('clickLeftAction')"/>
            <!-- close Icon  -->
            <div v-if="!(rightActionText && leftActionText)">
                <div class="icon" v-if="!noIcon" @click="active = null">
                    <component :is="closeIcon ? closeIcon : Close"/>
                </div>
            </div>
            
        </div>
    </div>
</template>