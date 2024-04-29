import { useRouter } from "vue-router";
const {errorHandle, warningHandle} = useNotify();
export default function() {
 
  const router = useRouter();
  function handleCodesMessage(code, message) {
    switch (code) {
      case '400':
        errorHandle(message);
        break;
      case '401':
        warningHandle(message);
        break;
      case '404':
        errorHandle(message);
        break;
    }
  }
    return {
      handleCodesMessage
    }
}
