<script setup>
import Close from "~/components/Icons/Close.vue";
import Button from "../Buttons/Button.vue";
import {ref, onMounted} from 'vue';
const {headerText, title,content,confirmText,cancelText, confirmColor, list} = defineProps(['headerText', 'title', 'list','content', 'confirmText', 'cancelText' ,'confirmColor']);
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
    <div class="dialog">
      <div class="header">
        <span class="text">{{ headerText }}</span>
        <div class="icon" @click.stop="closeDialog">
          <Close />
        </div>
      </div>
      <div class="content">
        <h3 class="title">{{ title }}</h3>
        <p>
          {{ content }}
        </p>
        <ul v-if="list" class="list">
            <li v-for="(item, i) in list" :key="i">{{item}}</li>
        </ul>
        <div class="actions row">
          <Button :text="cancelText ? cancelText : 'إلغاء'" :outline="true"   @click.capture="closeDialog"/>
          <Button :text="confirmText ? confirmText : 'نعم'" :color="confirmColor" @click.capture="confirm" class="confirmButton"/>
        </div>
      </div>
    </div>
  </div>
</template>
