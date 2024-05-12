<script setup>
import Tree from "../Generals/Tree.vue";
import Repeat from "~/components/Icons/Repeat.vue";
import Item from "~/components/Icons/Item.vue";
import Folder from "~/components/Icons/Folder.vue";
import { onMounted } from "vue";
import ArrowTree from "~/components/Icons/Arrows/ArrowTree.vue";
const emit = defineEmits(['setItem'])
const opened = ref(false);
const props = defineProps([
  "text",
  "displayTitle",
  "returnValue",
  "arrowIcon",
  "itemIcon",
  "leftIcon",
  "item",
  "index",
  "selectedFirst",
  'noRepeat',
  "secondaryTitle"
]);
onMounted(() => {
  let items = document.querySelectorAll(".tree li .item-row");
  items.forEach((item, index) => {
    if (props.selectedFirst) {
        items[0].classList.add("selected");
    }
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
function openTree(item, index) {
  emit('setItem', item[props.returnValue], index)
  opened.value = !opened.value;
}
</script>
<template>
  <ul class="tree">
    <li>
      <div class="row item-row" @click.stop="openTree(props.item, props.index)" v-if="props.item">
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
          <span># {{ props.item[displayTitle] }} {{props.item[secondaryTitle] ? props.item[secondaryTitle].name : ''}}</span>
        </div>

        <!-- Left Icon -->
        <div class="icon" v-if="props.leftIcon">
          <component :is="props.leftIcon" />
        </div>
      </div>
      <div v-if="opened">
        <TransitionGroup appear name="fade">
          <Tree
            v-for="(child, i) in props.item?.child"
            :key="i"
            :icon="child.child.length === 0 ? Item : Folder"
            :leftIcon="noRepeat ? undefined : Repeat"
            :item="child"
            @click.stop="openTree(child, i)"/>
        </TransitionGroup>
      </div>
    </li>
  </ul>
</template>
