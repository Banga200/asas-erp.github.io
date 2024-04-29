<script setup>
import Search from "~/components/DesignSystem/Inputs/Search.vue";
import PagenationItems from "~/components/DesignSystem/Generals/PagenationItems.vue";
import DropDown from "~/components/DesignSystem/Inputs/DropDown.vue";
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import Filter from "~/components/Icons/Filter.vue";
import Tree from "~/components/DesignSystem/Generals/Tree.vue";
const userStore = useUserStore();
const {Permissions} = storeToRefs(userStore)
const items = ref([
  {
    text: "شركة اساس الحاسب",
    child: [
      // {
      //   text: "مؤسسة العقلة",
      //   child: [
      //     {
      //       text: "حسابات الموظفين",
      //       child: [],
      //     },
      //   ],
      // },
    ],
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },{
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },

  {
    text: "جسر",
    child: []
  },
  {
    text: "جسر",
    child: []
  },{
    text: "جسر",
    child: []
  },
]);
</script>
<template>
  <div>
    <div class="treeSide">
      <!-- Search  -->
      <Search :placeholder="'رقم الفاتورة, اسم العميل'" />
      <!-- Pagenation  -->
      <PagenationItems />
      <!-- Select DropDown  -->
      <div class="row align-center justify-space-between gap-10">
        <div class="col-9 col">
          <DropDown :text="'كل الفروع'"/>
        </div>
        <div class="col-2 col">
          <Button :onlyIcon="true" :rightIcon="Filter" />
        </div>
      </div>
      <!-- Tree  -->
      <div class="tree-container" v-if="Permissions?.canView">
        <Tree v-for="(item, i) in items" :key="i" :item="item" :noRepeat="true"/>
      </div>
    </div>
  </div>
</template>
