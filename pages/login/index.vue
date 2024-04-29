<script setup>
import Link from '~/components/Icons/Link.vue';
import TextBox from '~/components/DesignSystem/Inputs/TextBox.vue';
import Button from '~/components/DesignSystem/Buttons/Button.vue';
import Eye from '~/components/Icons/Eye.vue';
import {useUserStore} from '~/stores/user';
const userStore = useUserStore();
definePageMeta({
    layout: 'blank',
})
useHead({
    title: "تسجيل الدخول"
})
const fields = ref({
    username: '',
    password: ''
})
async function submitLogin() {
    await userStore.Login(fields.value)
}
</script>
<template>
    <div class="card">
       <div class="icon link">
            <Link/>
       </div>
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