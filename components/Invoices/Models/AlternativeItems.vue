<script setup>
import Search from '~/components/Icons/Inputs/Search.vue';
import TextBox from '~/components/DesignSystem/Inputs/TextBox.vue';
const commonStore = useCommonStore();
const emit = defineEmits(['insertAlternative'])
const {AlternativesItems, SelectedAlternative} = storeToRefs(commonStore);
const selectedItem = ref(null)
function insertAlternative(itemId, index) {
    SelectedAlternative.value = itemId
    emit('insertAlternative')
}
function selectAlternative(itemId, index) {
    SelectedAlternative.value = itemId
    selectedItem.value = itemId
}
</script>
<template>
    <div class="flex-column normal-table model-table mb-8 gap-16">
        <TextBox :leftIcon="Search" :placeholder="'رقم ,اسم الصنف'"/>
        <table >
            <thead>
                <tr>
                    <th>الرقم</th>
                    <th>الصنف</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in AlternativesItems?.data" :key="i" @click="selectAlternative(item.gun, i)" @dblclick="insertAlternative(item.gun, i)" :class="{'selected': selectedItem === item.gun }">
                    <td class="text-center">{{ i + 1 }}</td>
                    <td class="item-column">{{ item.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>