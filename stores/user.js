import { defineStore } from "pinia";
import { useRouter } from "vue-router";
export const useUserStore = defineStore("user", () => {
  const { handleCodesMessage } = useHandleCodes();
  const { errorHandle } = useNotify();
  const router = useRouter();
  // State
  const User = ref(null);
  const Token = ref(null);
  const Permissions = ref(null);
  const loading = ref(false);
  async function Login(payload) {
    try {
      const response = await useServerFetch("/management/userAccount/login", {
        headers: {
          language: "ar",
        },
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (res.code === "200") {
            setTokenToCookie(
              res.data.viewData.token,
              res.data.viewData.tokenExpiresOn
            );
            setUser(res.data.viewData);
          } else {
            handleCodesMessage(
              res.code,
              res.data[0] ? res.data[0].viewMessage : ""
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function LogOut() {
    try {
      const response = await useServerFetch("/management/userAccount/logout", {
        method: "POST",
      })
        .then((res) => {
          if (res.code === "200") {
            router.push("/login");
            clearUser();
          } else {
            handleCodesMessage(
              res.code,
              res.data[0] ? res.data[0].viewMessage : ""
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function CheckPermissions(id) {
    try {
      await useServerFetch("/management/userAccount/permissions", {
        params: {
          ModuleId: id,
        },
      }).then((res) => {
        if (res.code === "200") {
          if (!res.data.viewData.canAccess) {
            router.push("/");
            Permissions.value = res.data.viewData;
            errorHandle("ليس لديك صلاحية الدخول");
          } else {
            Permissions.value = res.data.viewData;
          }
        } else {
          handleCodesMessage(res.code, res.data[0]?.viewMessage);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  function setTokenToCookie(token, expire) {
    // const cookie = useCookie('token', {
    //   maxAge: (expireTokenDate.getTime() - Date.now()) / 1000,

    // })
    if (process.client) {
      setWithExpiry("token", token, expire);
    }
    // cookie.value = token;
    Token.value = token;
    if (token) {
      router.push("/");
    }
  }
  function setWithExpiry(key, value, expire) {
    
    const item = {
      value: value,
      expire: expire
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
  function getWithExpiry(key) {
    
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);

    const expireTokenDate = new Date(item.expire)
    const expiryInMilliseconds = expireTokenDate.getTime() ;
    
    const now = new Date();
    console.log(now.toUTCString() , item.expire)
    if (now.getTime() > expiryInMilliseconds) {
      localStorage.removeItem(key);
      localStorage.removeItem('user');
      return null;
    }
    return item.value;
  }
  function setToken(token) {
    Token.value = token;
  }
  function setUser(data) {
    if (data.token) {
      delete data.token, delete data.tokenExpiresOn;
      User.value = data;
      // const cookie = useCookie('user');
      // cookie.value = User.value
      localStorage.setItem("user", JSON.stringify(User.value));
    }
    else {
      localStorage.setItem("user", JSON.stringify(data));
    }
  }
  function clearUser() {
    if (process.client) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      // const cookie = useCookie('token');
      // cookie.value = null,
      User.value = null;
      Token.value = null;
    }
  }
  return {
    User,
    Permissions,
    setUser,
    setTokenToCookie,
    setToken,
    Login,
    LogOut,
    CheckPermissions,
    setWithExpiry,
    getWithExpiry,
  };
});
