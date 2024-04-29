export default defineNuxtRouteMiddleware(async (to, from) => {
  const { errorHandle } = useNotify();
  let user = useCookie("user");
  if (user.value) {
    if (to.meta.page === "Home") {
      return;
    } else {
      if (user.value.inventoryCanAccessModules[to.meta.userAccess] === false) {
        if (to.href === from.href) {
          return navigateTo("/");
        }
        errorHandle("ليس لديك صلاحية الدخول");
        return abortNavigation();
      } else if (
        user.value.purchaseCanAccessModules[to.meta.userAccess] === false
      ) {
        if (to.href === from.href) {
          return navigateTo("/");
        }
        errorHandle("ليس لديك صلاحية الدخول");
        return abortNavigation();
      } else if (
        user.value.salesCanAccessModules[to.meta.userAccess] === false
      ) {
        if (to.href === from.href) {
          return navigateTo("/");
        }
        errorHandle("ليس لديك صلاحية الدخول");
        return abortNavigation();
      } else {
        return;
      }
    }
  } else {
    if (to.path.startsWith("/login")) {
      return;
    }
    return navigateTo("/login");
  }
});
