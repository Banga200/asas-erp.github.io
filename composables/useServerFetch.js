export const useServerFetch = async (request, opts) => {
  const config = useRuntimeConfig();
  // const token = useCookie("token")
  
  // const local = useCookie("local")
  if (process.client) {
    const token = JSON.parse(localStorage.getItem("token"));
    const local = JSON.parse(localStorage.getItem("local"));
    const url = localStorage.getItem('url')
    return await $fetch(request, {
      baseURL: url,
      headers: {
        language: local,
        "Authorization": `Bearer ${token ? token.value : 'null'}`
      },
      ...opts,
    });
  }
};
