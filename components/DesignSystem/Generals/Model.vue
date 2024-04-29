<script setup>
import Close from "~/components/Icons/Close.vue";
import Button from "../Buttons/Button.vue";
import Info from "~/components/Icons/Info.vue";
import ToolTip from "./ToolTip.vue";
import {ref, onMounted} from 'vue';
const {headerText,headerIcon, title,content,confirmText,cancelText, confirmColor, component, iconToolTip, iconToolTipPosition} = defineProps(['headerText','headerIcon', 'title','content', 'confirmText', 'cancelText' ,'confirmColor', 'component',"iconToolTip", "iconToolTipPosition"]);
const show = defineModel('show');
const emit = defineEmits(['confirm', 'cancle'])

onMounted(() => {
  let confirmButton = document.querySelector('.confirmButton')
  if (confirmButton) {
    confirmButton.focus()
  }
  // confirmButton.value.focus()
})
function confirm() {
  emit('confirm')
}
function closeDialog() {
  show.value = false;
  emit('cancle')
}   
</script>
<template>
  <div class="overlay" :class="[{'show': show }]" @click.self="closeDialog" @keypress.esc.self="closeDialog">
    <div class="model">
      <div class="header">
        <div class="row gap-10 align-center">
          <span class="text">{{ headerText }}</span>
          <ToolTip :text="iconToolTip" :position="iconToolTipPosition" v-if="headerIcon">
            <div class="icon">
              <component :is="headerIcon"/>
            </div>
          </ToolTip>
        </div>
        <div class="icon" @click.stop="closeDialog">
          <Close />
        </div>
        
      </div>
      <div class="content">
        <h3 class="title">{{ title }}</h3>
        <div >
          <slot/>
        </div>

        <div class="actions row">
          <Button :text="cancelText ? cancelText : 'إلغاء'" :outline="true"   @click.capture="closeDialog"/>
          <Button :text="confirmText ? confirmText : 'نعم'" :color="confirmColor" @click.capture="confirm" class="confirmButton"/>
        </div>
      </div>
    </div>
  </div>
</template>
