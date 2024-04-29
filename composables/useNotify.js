import { ref } from "vue";
const notify = ref({
  message: '',
  color: ''
})
export default function () {
   
  function successHandle(message) {
    notify.value.message = message;
    notify.value.color = 'success';

    resetSnack()
  }
  function infoHandle(message) {
    notify.value.message = message;
    notify.value.color = 'neutral'
    
    resetSnack()
    
  }

  function errorHandle(message) {
    notify.value.message = message;
    notify.value.color = 'danger'
    
    resetSnack()
    
  }
  function warningHandle(message) {
    notify.value.message = message;
    notify.value.color = 'warning'
    
    resetSnack()
    
  }

  function resetSnack() {
    setTimeout(() => {
      notify.value.message  = ''
      notify.value.color  = ''
    },3000)
  }

  return {successHandle,infoHandle,warningHandle, errorHandle, notify};
}