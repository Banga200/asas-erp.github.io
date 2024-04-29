<script setup>
import ArrowRightDouble from '../../Icons/Arrows/ArrowRightDouble.vue';
import ArrowRight from '../../Icons/Arrows/ArrowRight.vue';
import ArrowLeftDouble from '../../Icons/Arrows/ArrowLeftDouble.vue';
import ArrowLeft from '../../Icons/Arrows/ArrowLeft.vue';
import Button from '../Buttons/Button.vue';
</script>
<template>
    <div class="Pagenation_Items row">
        <Button :onlyIcon="true" :rightIcon="ArrowRightDouble" :outline="true" :size="'small'"/>
        <Button :onlyIcon="true" :rightIcon="ArrowRight" :outline="true" :size="'small'"/>
        <div class="row">
            <span class="total">12/30</span>
        </div>
        <Button :onlyIcon="true" :rightIcon="ArrowLeft" :outline="true" :size="'small'"/>
        <Button :onlyIcon="true" :rightIcon="ArrowLeftDouble" :outline="true" :size="'small'"/>
    </div>
</template>