<script setup>
import Avatar from './Avatar.vue';
import User from '~/components/Icons/User.vue';
const props = defineProps(['isEdit', 'icon', "username", "date"])
</script>
<template>
    <div class="d-flex  gap-8">
        <Avatar :size="'sm'" :borderColor="props.isEdit ? 'warning' : 'primary'" :icon="props.icon ? props.icon : User"/>
        <div class="flex-column gap-4" v-if="!isEdit">
            <h5 class="title-white">{{props.username}}</h5>
            <p>تاريخ الإنشاء : {{new Date(props.date).toLocaleDateString()}}</p>
        </div>
        <div v-if="props.isEdit" class="flex-column gap-4">
            <h5 class="title-white">{{props.username}}</h5>
            <p>تاريخ اخر تعديل : {{new Date(props.date).toLocaleDateString()}}</p>
        </div>
    </div>
</template>