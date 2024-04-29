<script setup>
import Dashboard from "~/components/Icons/Dashboard.vue";
import Sales from "~/components/Icons/Sales.vue";
import Bars from "~/components/Icons/Bars.vue";
import Avatar from "../Generals/Avatar.vue";
import LogOut from "~/components/Icons/LogOut.vue";
import Setteing from "~/components/Icons/Setteing.vue";
import SidebarItemGroup from "~/components/DesignSystem/Sidebar/SidebarItemGroup.vue";
import SidebarItem from "./SidebarItem.vue";
import { onMounted, onUnmounted } from "vue";
import Accounting from "~/components/Icons/Accounting.vue";
import Store from "~/components/Icons/Store.vue";
import Purchases from "~/components/Icons/Purchases.vue";

const userStore = useUserStore();
const {User} = storeToRefs(userStore)
onMounted(() => {
  window.addEventListener("click", () => {
    collapsed.value = true;
  });
  document.getElementById("sidebar").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  let mainItems = document.querySelectorAll(".sidebar-item-container");
  mainItems.forEach((element, index) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      if (element.classList.contains("select-main-item")) {
        element.classList.remove("select-main-item");
        document
          .querySelectorAll(".side-Item")
          [index].classList.remove("select-main-item");
        element.querySelector(".subItem").classList.remove("show");
      } else {
        if (
          !element.parentElement.parentElement.parentElement.classList.contains(
            "select-main-item"
          )
        ) {
          mainItems.forEach((item, i) => {
            item.classList.remove("select-main-item");
            document
              .querySelectorAll(".side-Item")
              [i].classList.remove("select-main-item");
            if (document.querySelectorAll(".subItem")[i]) {
              document.querySelectorAll(".subItem")[i].classList.remove("show");
            }
          });
        }
        element.querySelector(".subItem").classList.add("show");
        document
          .querySelectorAll(".side-Item")
          [index].classList.add("select-main-item");
        element.classList.add("select-main-item");
      }
    });
  });
});
const items = [
  {
    text: "نظام الإدارة",
    icon: Sales,
    child: [
      {
        text: "العمليات",
        icon: "",
        child: [
          { text: "الفروع", icon: "", child: [], link: "" },
          { text: "المستودعات", icon: "", child: [], link: "" },
          { text: "مراكز التكلفة", icon: "", child: [], link: "" },
          { text: "المندوبين", icon: "", child: [], link: "" },
          { text: "المجموعة الضريبية", icon: "", child: [], link: "" },
          { text: "طرق الدفع", icon: "", child: [], link: "" },
          { text: "المستخدمين", icon: "", child: [], link: "" },
          // {
          //   text: "العملات (لا يتم عرضها في الوقت الحالي يتم اخفاؤها الى وقت لاحق)",
          //   icon: "",
          //   child: [],
          //   link: ''
          // },
          // {
          //   text: "البنوك (لا يتم عرضها في الوقت الحالي يتم اخفاؤها الى وقت لاحق)",
          //   icon: "",
          //   child: [],
          //   link: ''
          // },
        ],
      },
      {
        text: "اعداد النظام",
        icon: "",
        child: [
          { text: "اعدادات النظام", icon: "", child: [], link: "" },
          { text: "نظام المحاسبة", icon: "", child: [], link: "" },
        ],
      },
    ],
  },
  {
    text: "نظام المحاسبة",
    icon: Accounting,
    child: [
      {
        text: "العمليات",
        icon: "",
        child: [
          { text: "كروت الحساب", icon: "", child: [], link: "" },
          { text: "الصناديق", icon: "", child: [], link: "" },
          { text: "سندات القبض", icon: "", child: [], link: "" },
          { text: "سندات الصرف", icon: "", child: [], link: "" },
          { text: "القيود المحاسبية", icon: "", child: [], link: "" },
          { text: "اشعار مدين", icon: "", child: [], link: "" },
          { text: "اشعار دائن", icon: "", child: [], link: "" },
          { text: "الترحيل", icon: "", child: [], link: "" },
        ],
      },
      {
        text: "تقارير محاسبية",
        icon: "",
        child: [
          { text: "تقرير كشف حساب", icon: "", child: [], link: "" },
          {
            text: "تقرير اليومية (بدل تقرير القيد المحاسبي)",
            icon: "",
            child: [],
            link: "",
          },
          { text: "تقرير السندات", icon: "", child: [], link: "" },
          { text: "تقرير الاشعارات", icon: "", child: [], link: "" },
          { text: "تقرير ميزان المراجعة", icon: "", child: [], link: "" },
          {
            text: "القوائم المالية (قائمة منسدلة)",
            icon: "",
            child: [],
            link: "",
          },
          { text: "التدفقات النقدية", icon: "", child: [], link: "" },
          { text: "قائمة الدخل", icon: "", child: [], link: "" },
          { text: "الميزانية العمومية", icon: "", child: [], link: "" },
        ],
      },
    ],
  },
  {
    text: "نظام المخزون",
    icon: Store,
    child: [
      {
        text: "العمليات",
        icon: "",
        child: [
          { text: "الأصناف", icon: "", child: [], link: "" },
          { text: "الوحدات", icon: "", child: [], link: "" },
          { text: "التصنيفات", icon: "", child: [], link: "" },
          { text: "التحويل بين الفروع", icon: "", child: [], link: "" },
          { text: "التحويل بين المستودعات", icon: "", child: [], link: "" },
          { text: "صرف بضاعة من مندوب", icon: "", child: [], link: "" },
          { text: "استلام بضاعة من مندوب", icon: "", child: [], link: "" },
          { text: "جرد اول المدة", icon: "", child: [], link: "" },
          { text: "أصناف تالفة", icon: "", child: [], link: "" },
          { text: "فروقات الجرد", icon: "", child: [], link: "" },
          { text: "استلام تشغيلي ", icon: "", child: [], link: "" },
          { text: "صرف تشغيلي", icon: "", child: [], link: "" },
        ],
      },
      {
        text: "تقارير المخزون",
        icon: "",
        child: [
          { text: "تقارير الأصناف", icon: "", child: [], link: "" },
          { text: "تقارير المخزون", icon: "", child: [], link: "" },
        ],
      },
    ],
  },
  {
    text: "نظام المبيعات",
    icon: Sales,
    child: [
      {
        text: "العمليات",
        icon: "",
        child: [
          { text: "عرض السعر", icon: "", child: [], link: "/sales-system/offerPrice", lock: User.value?.salesCanAccessModules?.canAccessOfferPrice},
          {
            text: "فاتورة المبيعات",
            icon: "",
            child: [],
            link: "/sales-system/salesInvoice",
          },
          { text: "فاتورة مرتجع المبيعات", icon: "", child: [], link: "" },
          { text: "العملاء", icon: "", child: [], link: "" },
          {
            text: "حجز بضاعة (بدل الحجز الداخلي)",
            icon: "",
            child: [],
            link: "",
          },
          // {
          //   text: "طلب حجز (بدل الحجز الخارجي) لا يتم عرضها في الوقت الحالي",
          //   icon: "",
          //   child: [],
          //   link: "",
          // },
        ],
      },
      {
        text: "تقارير المبيعات",
        icon: "",
        child: [
          { text: "تقارير فواتير المبيعات", icon: "", child: [], link: "" },
          {
            text: "تقارير فواتير مرتجع المبيعات",
            icon: "",
            child: [],
            link: "",
          },
        ],
      },
    ],
  },
  {
    text: "نظام المشتريات",
    icon: Purchases,
    child: [
      {
        text: "العمليات",
        icon: "",
        child: [
          { text: "طلب شراء", icon: "", child: [], link: "" },
          { text: "فاتورة المشتريات", icon: "", child: [], link: "" },
          { text: "فاتورة مرتجع مشتريات", icon: "", child: [], link: "" },
        ],
      },
      {
        text: "تقارير المشتريات",
        icon: "",
        child: [
          { text: "تقرير فواتير المشتريات", icon: "", child: [], link: "" },
          {
            text: "تقرير فواتير مرتجع المشتريات",
            icon: "",
            child: [],
            link: "",
          },
        ],
      },
    ],
  },
];

const collapsed = ref(true);
function collapse() {
  collapsed.value = !collapsed.value;
}
function showSidebar() {
  collapsed.value = false;
}
function logOut() {
  userStore.LogOut();
}
</script>
<template>
  <div class="side-container" :class="{ collapse: collapsed }" id="sidebar">
    <div class="icon" @click.stop="collapse">
      <Bars />
    </div>
    <div class="items">
      <SidebarItem
        :text="'الرئيسية'"
        :link="'/'"
        :rightIcon="Dashboard"
        v-model:collapse="collapsed"
      />
      <SidebarItemGroup
        :item="item"
        :index="i"
        v-for="(item, i) in items"
        :key="i"
       
        @openSidebar="showSidebar"
        v-model:collapse="collapsed"
      />
    </div>
    <div class="bottom-items">
      <div class="user">
        <div class="avatar-container">
          <Avatar :src="'/images/logo.png'" :size="'md'" />
        </div>
        <div v-if="!collapsed">
          <p>اسم المستخدم</p>
          <p>user@gmail.com</p>
        </div>
      </div>
      <SidebarItem
        :text="'تسجيل الخروج'"
        :rightIcon="LogOut"
        v-model:collapse="collapsed"
      @click.stop="logOut"/>
      <SidebarItem
        :text="'الإعدادات'"
        :rightIcon="Setteing"
        v-model:collapse="collapsed"
      />
    </div>
  </div>
</template>
