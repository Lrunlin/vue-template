import axios from "axios";

axios.defaults.baseURL = process.env.VITE_API_HOST;
axios.interceptors.request.use(
  (config: any) => {
    config.headers.authorization = localStorage.getItem("token");
    config.headers["Cache-Control"] = "no-cache";
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  config => {
    /**访问成功**/
    return config;
  }
  // error => {
  //   console.log(error);

  //   let errorCode: number = error?.response?.status;
  //   /** 响应码对应的错误*/
  //   let responseMessage: string | undefined = (ErrorCodeMessage as any)[errorCode + ""];
  //   /** 服务器返回的message属性*/
  //   let serverErrorMessage = error?.response?.data?.message;

  //   message.error(serverErrorMessage || `${errorCode}:${responseMessage}` || "请求错误");
  //   return Promise.reject(error);
  // }
);
