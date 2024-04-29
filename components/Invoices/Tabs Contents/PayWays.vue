<script setup>
import ComboBox from '~/components/DesignSystem/Inputs/ComboBox.vue';
import TextBox from '~/components/DesignSystem/Inputs/TextBox.vue';
import Delete from '~/components/Icons/Delete.vue';
</script>
<template>
    <table id="pay-way-table">
        <tbody>
            <tr>
                <td>1</td>
                <td><ComboBox :size="'sm'"/></td>
                <td><ComboBox :size="'sm'"/></td>
                <td><TextBox :size="'sm'"/></td>
                <td><div class="icon delete">
                    <Delete/>
                </div></td>
            </tr>
            <tr>
                <td>1</td>
                <td><ComboBox :size="'sm'"/></td>
                <td><ComboBox :size="'sm'"/></td>
                <td><TextBox :size="'sm'"/></td>
                <td><div class="icon delete">
                    <Delete/>
                </div></td>
            </tr>
            <tr>
                <td>1</td>
                <td><ComboBox :size="'sm'"/></td>
                <td><ComboBox :size="'sm'"/></td>
                <td><TextBox :size="'sm'"/></td>
                <td><div class="icon delete">
                    <Delete/>
                </div></td>
            </tr>
            
        </tbody>
    </table>
</template>