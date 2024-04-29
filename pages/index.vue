<script setup>
import { ref, onMounted } from "vue";
definePageMeta({
  page: "Home"
})
useHead({
  title: 'الصفحة الرئيسية'
})
const dialog = ref(false);
const items = ref([
  {
    text: "شركة اساس الحاسب",
    child: [
      {
        text: "مؤسسة العقلة",
        child: [
          {
            text: "حسابات الموظفين",
            child: [],
          },
        ],
      },
    ],
  },
  {
    text: "جسر",
    child: [
      {
        text: "كلك اب",
        child: [],
      },
    ],
  },
]);
</script>
<template>
  <div id="home">
    <img src="/images/logo.png" alt="company logo"/>
  </div>
</template>
