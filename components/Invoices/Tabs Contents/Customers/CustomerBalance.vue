<script setup>
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";
import Calendar from "~/components/Icons/Calendar.vue";
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import MoreDotsVertical from "~/components/Icons/MoreDotsVertical.vue";
import ComboBox from "~/components/DesignSystem/Inputs/ComboBox.vue";
import Branch from "./Branch.vue";
import Tab from "~/components/DesignSystem/Generals/Tab.vue";
const selectedBranch = ref('Branch');

const BranchesTabs = shallowRef({
    Branch
})
</script>
<template>
  <div class="grid-5">
    <div>
      <ComboBox :label="'السعر الإفتراضي'" />
    </div>
    <div>
      <TextBox :label="'حد المديونية'" />
    </div>
    <div>
      <TextBox :label="'مدة الإستحقاق'" />
    </div>
    <div>
      <ComboBox :label="'مدة التحقق من تعمير الذمم'" />
    </div>
    <div>
      <ComboBox :label="'تمكين العميل المؤقت'" />
    </div>
  </div>
  <!-- Tabs  -->
  <div class="flex-column gap-8 mt-16">
    <div class="row align-center tabs-container">
      <div class="col-2">
        <Tab
          :text="'اسم الفرع'"
          :color="selectedBranch === 'Branch' ? 'primary' : ''"
          @click="selectedBranch = 'Branch'"
        />
      </div>
      
    </div>
    <!-- Tabs Content -->
    <div>
      <component :is="BranchesTabs[selectedBranch]" />
    </div>
  </div>
</template>
