import { defineStore } from "pinia";
import { useRouter } from "vue-router";
export const useUserStore = defineStore("user", () => {
  const {handleCodesMessage} = useHandleCodes();
  const {errorHandle} = useNotify()
  const router = useRouter();
  // State
  const User = ref(null);
  const Token = ref(null);
  const Permissions = ref(null)
  const loading = ref(false);
  async function Login(payload) {
    try {
      const response = await useServerFetch("/management/userAccount/login", {
        headers: {
          language: 'ar',
        },
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (res.code === '200') {
            setTokenToCookie(res.data.viewData.token, res.data.viewData.tokenExpiresOn);
            setUser(res.data.viewData);
          }
          else {
            handleCodesMessage(res.code, res.data[0] ? res.data[0].viewMessage : '');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {console.log(error)}
  }
  async function LogOut() {
    try {
      const response = await useServerFetch("/management/userAccount/logout", {
        headers: {
          language: 'ar',
          "Authorization": `Bearer ${Token.value}`
        },
        method: "POST",
      })
        .then((res) => {
          if (res.code === '200') {
            router.push('/login');
            clearUser();
          }
          else {
            handleCodesMessage(res.code, res.data[0] ? res.data[0].viewMessage : '');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {console.log(error)}
  }
  async function CheckPermissions(id) {
    try {
      await useServerFetch("/management/userAccount/permissions", {
        params: {
          ModuleId: id
        }
      }).then(res => {
        if (res.code === '200') {
          if(!res.data.viewData.canAccess) {
            router.push('/');
            Permissions.value = res.data.viewData;
            errorHandle("ليس لديك صلاحية الدخول")
          }
          else{
            Permissions.value = res.data.viewData;
          }
        }
        else {
          console.log(res)
          handleCodesMessage(res.code, res.data[0]?.viewMessage);
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  function setTokenToCookie(token, expire) {
    const expireTokenDate = new Date(expire);
    const cookie = useCookie('token', {
      maxAge: (expireTokenDate.getTime() - Date.now()) / 1000
    })
    cookie.value = token;
    Token.value = token
    if (cookie.value) {
      router.push('/')
    }
    
  }
  function setToken(token) {
    Token.value = token
  }
  function setUser(data) {
    if (data) {
      delete data.token,
      delete data.tokenExpiresOn
      User.value = data;
      const cookie = useCookie('user');
      cookie.value = User.value
    }
  }
  function clearUser() {
    localStorage.removeItem("user");
    const cookie = useCookie('token');
    cookie.value = null,
    User.value = null
    Token.value = null
  }
  return {
    User,
    Permissions,
    setUser,
    setTokenToCookie,
    setToken,
    Login,
    LogOut,
    CheckPermissions
  };
});
