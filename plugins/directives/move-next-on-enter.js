export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("move-next-on-enter", {
    mounted(el, binding) {
      el.addEventListener("keyup", (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
            const inputs = Array.from(document.querySelectorAll('input'));
            let index = inputs.indexOf(el.querySelector('input'));
              while (inputs[index + 1].hasAttribute('disabled') || inputs[index + 1].hasAttribute('readonly') ) {
                index++;
                inputs[index + 1].focus();
              }

             if (index < inputs.length && inputs[index + 1].value.trim()) {
                
                inputs[index + 1].select();
              }
              
        }
      });
    },
    
  });
  
});
