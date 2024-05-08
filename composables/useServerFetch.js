export const useServerFetch = async (request, opts) => {
  const config = useRuntimeConfig();
  // const token = useCookie("token")
  
  // const local = useCookie("local")
  if (process.client) {
    const token = JSON.parse(localStorage.getItem("token"));
    const local = JSON.parse(localStorage.getItem("local"));
    return await $fetch(request, {
      baseURL: config.public.apiBase,
      headers: {
        language: local,
        "Authorization": `Bearer ${token ? token.value : 'null'}`
      },
      ...opts,
    });
  }
};
