export default defineNuxtRouteMiddleware(async (to, from) => {
  const { errorHandle } = useNotify();
  // let user = useCookie("user");
  let user = null
  if (process.client) {
    user = JSON.parse(localStorage.getItem('user'))
  }
  if (user) {
    if (to.meta.page === "Home") {
      return;
    } else {
      if (user.inventoryCanAccessModules[to.meta.userAccess] === false) {
        if (to.href === from.href) {
          return navigateTo("/");
        }
        errorHandle("ليس لديك صلاحية الدخول");
        return abortNavigation();
      } else if (
        user.purchaseCanAccessModules[to.meta.userAccess] === false
      ) {
        if (to.href === from.href) {
          return navigateTo("/");
        }
        errorHandle("ليس لديك صلاحية الدخول");
        return abortNavigation();
      } else if (
        user.salesCanAccessModules[to.meta.userAccess] === false
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
