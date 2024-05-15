<script setup>
import ArrowRightDouble from '../../Icons/Arrows/ArrowRightDouble.vue';
import ArrowRight from '../../Icons/Arrows/ArrowRight.vue';
import ArrowLeftDouble from '../../Icons/Arrows/ArrowLeftDouble.vue';
import ArrowLeft from '../../Icons/Arrows/ArrowLeft.vue';
import Button from '../Buttons/Button.vue';
const emit = defineEmits(['setSelectedItem'])
const commonStore = useCommonStore();
const {InvoicesTree} = storeToRefs(commonStore);
let items = ref([])

onUpdated(() => {
    items.value = document.querySelectorAll(".tree li .item-row");
})

function next() {
    if ((InvoicesTree.value?.currentPage !== InvoicesTree.value?.totalCount) && (InvoicesTree.value?.currentPage < InvoicesTree.value?.totalCount)) {
        InvoicesTree.value.currentPage += 1
        clearSelected();
        activeItem(InvoicesTree.value.currentPage -1)
        emit("setSelectedItem", InvoicesTree.value.data[InvoicesTree.value.currentPage -1].gun, InvoicesTree.value.currentPage -1)
    }
    
}
function doubleNext() {
    if (InvoicesTree.value?.currentPage !== InvoicesTree.value?.totalCount) {
        InvoicesTree.value.currentPage = InvoicesTree.value.totalCount
        clearSelected()
        activeItem(InvoicesTree.value.currentPage -1)
        emit("setSelectedItem", InvoicesTree.value.data[InvoicesTree.value.currentPage -1].gun, InvoicesTree.value.currentPage -1)
    }
}
function prev() {
    if ((InvoicesTree.value?.currentPage   !== 1)) {
        InvoicesTree.value.currentPage -= 1
        clearSelected();
        console.log(InvoicesTree.value.currentPage -1)
        activeItem(InvoicesTree.value.currentPage -1)
        emit("setSelectedItem", InvoicesTree.value.data[InvoicesTree.value.currentPage -1].gun, InvoicesTree.value.currentPage -1)
    }
}
function doublePrev() {
    if ((InvoicesTree.value?.currentPage !== 1)) {
        InvoicesTree.value.currentPage = 1
        clearSelected();
        activeItem(InvoicesTree.value.currentPage -1)
        emit("setSelectedItem", InvoicesTree.value.data[InvoicesTree.value.currentPage -1].gun, InvoicesTree.value.currentPage -1)
    }
}
function activeItem(index)  {
    console.log(items.value)
    items.value[index].classList.add("selected")
}
function clearSelected() {
    
    items.value.forEach(item => {
      item.classList.remove('selected')
    })
  }
</script>
<template>
    <div class="Pagenation_Items  row">
        <Button :onlyIcon="true" :icon="ArrowRightDouble" :outline="true" :size="'x-small'"  @click.capture="doublePrev"/>
        <Button :onlyIcon="true" :icon="ArrowRight" :outline="true" :size="'x-small'"  @click.capture="prev"/>

        <span class="total flex-grow"> {{InvoicesTree?.currentPage}} / {{InvoicesTree?.totalCount}}</span>

        <Button :onlyIcon="true" :icon="ArrowLeft" :outline="true" :size="'x-small'" @click.capture="next"/>
        <Button :onlyIcon="true" :icon="ArrowLeftDouble" :outline="true" :size="'x-small'" @click.capture="doubleNext"/>
    </div>
</template>