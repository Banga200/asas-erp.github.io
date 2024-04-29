<script setup>
import TextBox from '~/components/DesignSystem/Inputs/TextBox.vue';
</script>
<template>
    <div class="grid-3 gap-4">
        <div >
          <TextBox :label="'التكلفة'"  :readOnly="true"/>
        </div>
        <div >
          <TextBox :label="'الربح'"  :readOnly="true"/>
        </div>
        <div>
            <TextBox :label="'نسبة الربح'"  :readOnly="true"/>
        </div>
      </div>
</template>