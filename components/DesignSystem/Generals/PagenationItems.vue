<script setup>
import ArrowRightDouble from '../../Icons/Arrows/ArrowRightDouble.vue';
import ArrowRight from '../../Icons/Arrows/ArrowRight.vue';
import ArrowLeftDouble from '../../Icons/Arrows/ArrowLeftDouble.vue';
import ArrowLeft from '../../Icons/Arrows/ArrowLeft.vue';
import Button from '../Buttons/Button.vue';
const commonStore = useCommonStore();
const {InvoicesTree} = storeToRefs(commonStore)
</script>
<template>
    <div class="Pagenation_Items  row">
        <Button :onlyIcon="true" :icon="ArrowRightDouble" :outline="true" :size="'x-small'"/>
        <Button :onlyIcon="true" :icon="ArrowRight" :outline="true" :size="'x-small'"/>

        <span class="total flex-grow">{{InvoicesTree?.currentPage}}/{{InvoicesTree?.totalPages}}</span>

        <Button :onlyIcon="true" :icon="ArrowLeft" :outline="true" :size="'x-small'"/>
        <Button :onlyIcon="true" :icon="ArrowLeftDouble" :outline="true" :size="'x-small'"/>
    </div>
</template>