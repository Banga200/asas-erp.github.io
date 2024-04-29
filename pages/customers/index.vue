<script setup>
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import Add from "~/components/Icons/Buttons/Add.vue";
import Edit from "~/components/Icons/Edit.vue";
import Delete from "~/components/Icons/Delete.vue";
import Refresh from "~/components/Icons/Refresh.vue";
import MoreDotsVertical from "~/components/Icons/MoreDotsVertical.vue";
import Barcode from "~/components/Icons/Barcode.vue";
import Save from "~/components/Icons/Save.vue";
import Printer from "~/components/Icons/Printer.vue";
import ArrowDown from "~/components/Icons/Arrows/ArrowDown.vue";
import User from "~/components/Icons/User.vue";
import OpenTree from "~/components/Icons/OpenTree.vue";
import Avatar from "~/components/DesignSystem/Generals/Avatar.vue";
import InvoicesTree from "~/components/Invoices/Sales/InvoicesTree.vue";
import Badge from "~/components/DesignSystem/Generals/Badge.vue";
import Block from "~/components/Icons/Block.vue";
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";
import ComboBox from "~/components/DesignSystem/Inputs/ComboBox.vue";
import Tab from "~/components/DesignSystem/Generals/Tab.vue";
import ExtraInformation from "~/components/Invoices/Tabs Contents/Customers/ExtraInformation.vue";
import CustomerBalance from "~/components/Invoices/Tabs Contents/Customers/CustomerBalance.vue";
import DiscountsOnInvoices from "~/components/Invoices/Tabs Contents/Customers/DiscountsOnInvoices.vue";
const selectedTab = ref('ExtraInformation');
const customersTabs = shallowRef({
    ExtraInformation,
    CustomerBalance,
    DiscountsOnInvoices
})
</script>
<template>
  <div class="row">
    <div class="right-side-tree col-12 col-md-2">
      <InvoicesTree />
    </div>
    <div class="content customers col-12 col-md-10">
      <!-- Buttons  -->
      <section class="top-buttons row justify-space-center">
        <!-- right side  -->
        <div class="d-flex align-center gap-6">
          <Button :color="'primary'" :text="'جديد'" :rightIcon="Add" />
          <Button :color="'warning'" :onlyIcon="true" :rightIcon="Edit" />
          <Button :color="'danger'" :onlyIcon="true" :rightIcon="Delete" />
          <Button :color="'neutral'" :onlyIcon="true" :rightIcon="Refresh" />
          <Button
          :menuLocation="'left'"
            :color="'neutral'"
            :onlyIcon="true"
            :rightIcon="MoreDotsVertical"
          :menu="true" :menuItems="[{ text:'إلغاء التوقيف', rightIcon: Block, color:'danger'}, {text: 'نص مقترح'}]"/>
            <Badge :color="'danger'" :rightIcon="Block" :text="'محظور'" :size="'md'"/>
        </div>
        <!-- left side  -->
        <div class="d-flex align-center gap-6">
          <!-- Avatars  -->
          <div class="avatar-group">
            <Avatar :icon="User" :borderColor="'primary'" :size="'md'" />
            <Avatar :icon="User" :borderColor="'warning'" :size="'md'" />
            <Avatar :text="'+10'" :borderColor="'warning'" :size="'md'" />
          </div>
          <Button :color="'primary'" :text="'حفظ'" :rightIcon="Save" />
        </div>
      </section>
      <!-- Details  -->
      <section>
        <!-- row 1  -->
        <div class="row mb-8">
            <div class="col-6 col-md-2">
                <TextBox :label="'الرقم'"/>
            </div>
            <div class="col-6 col-md-2">
                <ComboBox :label="'الفروع'"/>
            </div>
            <div class="row col-12 mb-4 col-md-4 flex-column-end">
                <div class="col-11 pl-8"><TextBox :label="'الاسم (عربي)'"/></div>
                <div class="col-1"><Button :onlyIcon="true" :rightIcon="OpenTree" :color="'neutral'"/></div>
            </div>
            <div class="col-12 mb-4 col-md-4">
                <TextBox :label="'الاسم (انجليزي)'"/>
            </div>
        </div>
        <!-- row 2  -->
        <div class="row">
            <div class="col-12 col-md-2">
                <ComboBox :label="'المندوب'"/>
            </div>
            <div class="col-12 col-md-3">
                <TextBox :label="'الشخص المسؤول'"/>
            </div>
            <div class="col-12 col-md-3">
                <TextBox :label="'رقم التسجيل الضريبي'"/>
            </div>
            <div class="col-12 col-md-2">
                <ComboBox :label="'معرف اَخر'"/>
            </div>
            <div class="col-12 col-md-2">
                <TextBox :label="'رقم الهوية الوطنية'"/>
            </div> 
        </div>
      </section>
      <!-- Tabs  -->
      <section class="mt-16">
        <div class="flex-column gap-8" >
              <div class="row align-center tabs-container">
                  <div class="col-2">
                    <Tab
                    :text="'تفاصيل إضافية'"
                    :color="
                      selectedTab === 'ExtraInformation' ? 'primary' : ''
                    "
                    @click="selectedTab = 'ExtraInformation'"
                  />
                  </div>
                  <div class="col-2">
                    <Tab
                    :text="'أرصدة العميل'"
                    @click="selectedTab = 'CustomerBalance'"
                    :color="
                      selectedTab === 'CustomerBalance' ? 'primary' : ''
                    "
                  />
                  </div>
                  <div class="col-2">
                    <Tab
                    :text="'الخصومات على الفواتير'"
                    @click="selectedTab = 'DiscountsOnInvoices'"
                    :color="selectedTab === 'DiscountsOnInvoices' ? 'primary' : ''"
                  />
                  </div>
              </div>
              <!-- Tabs Content -->
              <div>
                <component :is="customersTabs[selectedTab]" />
              </div>
            </div>
      </section>
    </div>
  </div>
</template>
