<script setup >
const {size, src,text, icon, background, dark, borderColor ,outline} = defineProps(['size', 'src', 'icon', 'text', 'background', 'outline','dark', 'borderColor'])
</script>
<template>
    <div class="avatar " :class="[{'dark': dark}, borderColor, {'outline': outline}, size]" :style="{backgroundColor: background}">
        <img :src="src" v-if="src"/>
        <div class="icon" v-if="icon">
            <component :is="icon"/>
        </div>
        <span v-if="text">{{ text }}</span>
    </div>
</template> 