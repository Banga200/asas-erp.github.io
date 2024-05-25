<script setup>
import Link from '~/components/Icons/Link.vue';
import TextBox from '~/components/DesignSystem/Inputs/TextBox.vue';
import Button from '~/components/DesignSystem/Buttons/Button.vue';
import Eye from '~/components/Icons/Eye.vue';
import Popover from '~/components/DesignSystem/Generals/Popover.vue';
import {useUserStore} from '~/stores/user';
const userStore = useUserStore();
const openPopover = ref(false);
const url = ref('')
const {successHandle} = useNotify()
definePageMeta({
    layout: 'blank',
})
useHead({
    title: "تسجيل الدخول"
})
onMounted(() => {
   let localUrl = localStorage.getItem('url'); 
   if (localUrl) {
        url.value = localUrl
        process.env.VUE_APP_BASE_URL = localUrl
   }
})

const fields = ref({
    username: '',
    password: ''
})
function updateUrl() {
   try {
    localStorage.setItem('url', url.value)
    successHandle("تم تعديل الرابط")
    process.env.VUE_APP_BASE_URL = url.value
    openPopover.value = false
   } catch (error) {
    console.log(error)
   }
}
async function submitLogin() {
    await userStore.Login(fields.value)
}

</script>
<template>
    <div class="card">
        <div @click.stop="openPopover = !openPopover" class="icon mt-8 link">
            <Link/>
        </div>
       <Popover :disableOnclick="true"
            class="w-100"
            :fullWidth="true"
            :position="'bottom-left'"
            :color="'white'"
            :show="openPopover">
            <template v-slot:content>
              <TextBox :label="'تغيير رابط API'" v-model:input="url"/>
              <div class="d-flex mt-4 justify-end gap-4 w-100">
                <Button :text="'تعديل'" :color="'primary'" class="ml-4" @click.capture="updateUrl"/>
                <Button :text="'إلغاء'" :color="'neutral'" @click.capture="openPopover = false"/>
              </div>
            </template>
       </Popover>
       <!-- Content        -->
       <div class="content">
            <!-- Logo  -->
            <div class="text-center">
                <img src="/images/logo.png" alt="logo"/>
            </div>
            <!-- Fields  -->
            <div class="form">
                <form @submit.prevent="submitLogin">
                    <div class="flex-column  gap-18">
                        <TextBox :label="'اسم المستخدم'" v-model:input="fields.username" :moveNext="false"/>
                        <TextBox :label="'كلمة السر'" :type="'password'" :leftIcon="Eye" v-model:input="fields.password" :moveNext="false"/>
                    </div>
                    <Button :color="'primary'" :text="'تسجيل دخول'" :block="true" :type="'submit'"/>
                </form>
            </div>
            <p class="text-center">فترة تجريبية, المتبقي <strong>30</strong> يوم</p>
       </div>
    </div>
</template>