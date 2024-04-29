export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("move-next-on-enter", {
    mounted(el, binding) {
      el.addEventListener("keyup", (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
            const inputs = Array.from(document.querySelectorAll('input'));
            const index = inputs.indexOf(el.querySelector('input'));
            if (index < inputs.length && inputs[index].value.trim()) {
              inputs[index + 1].focus();
              inputs[index + 1].select();

              
            }
        }
      });
    },
    
  });
  
});
