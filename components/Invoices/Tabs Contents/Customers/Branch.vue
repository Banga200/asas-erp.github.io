<script setup>
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";
import Calendar from "~/components/Icons/Calendar.vue";
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import MoreDotsVertical from "~/components/Icons/MoreDotsVertical.vue";
import ComboBox from "~/components/DesignSystem/Inputs/ComboBox.vue";

const selectedBranch = ref('');

const BranchesTabs = shallowRef({

})
</script>
<template>
  <div class="grid-5">
    <div>
      <TextBox :label="'مدين إفتتاحي'" :readOnly="true"/>
    </div>
    <div>
      <TextBox :label="'دائن إفتتاحي'" :readOnly="true"/>
    </div>
    <div>
      <TextBox :label="'مدين حالي'" :readOnly="true"/>
    </div>
    <div>
      <TextBox :label="'دائن حالي'" :readOnly="true"/>
    </div>
    <div>
      <TextBox :label="'رصيد العميل'" :readOnly="true"/>
    </div>
  </div>
</template>
