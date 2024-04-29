export const useServerFetch = async (request, opts) => {
  const config = useRuntimeConfig();
  const token = useCookie("token");
  const local = useCookie("local")
  return await $fetch(request, {
    baseURL: config.public.apiBase,
    headers: {
      language: local.value,
      "Authorization": `Bearer  ${token.value}`
    },
    ...opts,
  });
};
