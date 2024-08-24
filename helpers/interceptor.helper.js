// import tokenHelper from './token.helper'

export default {
  // do something before request sent
  async requestInterceptor(config) {
    return config;
  },

  // do something with error request before throw
  errorReqInterceptors(err) {
    return Promise.reject(err);
  },

  // response Interceptors
  async responseInterceptor(response) {
    return response;
  },

  // handle response if error on response
  errorRespInterceptor(err = null) {
    if (err) {
      const url = err.config?.url;
      if (err.code == "ERR_CANCELED") {
        console.log(url + " is CANCELED");
      }
      return Promise.reject(err);
    }
  },
};
