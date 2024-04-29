<script setup>
import Tree from "../Generals/Tree.vue";
import Repeat from "~/components/Icons/Repeat.vue";
import Item from "~/components/Icons/Item.vue";
import Folder from "~/components/Icons/Folder.vue";
import { onMounted } from "vue";
import ArrowTree from "~/components/Icons/Arrows/ArrowTree.vue";
const opened = ref(false);
const { text, arrowIcon, icon, leftIcon, item, itemIcon, noRepeat, displayTitle,secondaryTitle, returnValue } = defineProps([
  "text",
  "displayTitle",
  "returnValue",
  "arrowIcon",
  "itemIcon",
  "leftIcon",
  "item",
  'noRepeat',
  "secondaryTitle"
]);
onMounted(() => {
  let items = document.querySelectorAll(".tree li .item-row");
  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (!item.classList.contains("selected")) {
        clearSelected();
        item.classList.add("selected");
      }
    });
  });
  function clearSelected() {
    let items = document.querySelectorAll(".tree li .item-row");
    items.forEach(item => {
      item.classList.remove('selected')
    })
  }
});
function openTree() {
  opened.value = !opened.value;
}
</script>
<template>
  <ul class="tree">
    <li>
      <div class="row item-row" @click.stop="openTree" v-if="item">
        <div class="gap-4 row">
          <!-- Arrow  -->
          <!-- <div class="icon" :class="[{ opened: opened }]" v-if="item?.child?.length !== 0">
            <component
              :is="arrowIcon ? arrowIcon : ArrowTree"
            />
          </div> -->
          <!-- Folder Icon or Item Icon -->
          <!-- <div class="icon rowIcon" v-if="itemIcon">
          <component :is="itemIcon" />
        </div> -->
          <div class="icon rowIcon">
            <component :is="Item" />
          </div>
          <!-- Text  -->
          <span># {{ item[displayTitle] }} {{item[secondaryTitle] ? item[secondaryTitle].name : ''}}</span>
        </div>

        <!-- Left Icon -->
        <div class="icon">
          <component :is="leftIcon" />
        </div>
      </div>
      <div v-if="opened">
        <TransitionGroup appear name="fade">
          <Tree
            v-for="(child, i) in item?.child"
            :key="i"
            :icon="child.child.length === 0 ? Item : Folder"
            :leftIcon="noRepeat ? undefined : Repeat"
            :item="child"
          />
        </TransitionGroup>
      </div>
    </li>
  </ul>
</template>
