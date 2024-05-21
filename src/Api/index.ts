import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const get = (url: string, params?: any) => {
  return instance
    .get(url, {
      params,
    })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return {
          success: true,
          data: res.data,
        };
      } else {
        return {
          success: false,
          data: [],
        };
      }
    });
};

export const put = (url: string, params?: any, data?: any) => {
  return instance
    .put(url, {
      params,
      data,
    })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return {
          success: true,
          data: res.data,
        };
      } else {
        return {
          success: false,
          data: [],
        };
      }
    });
};

export const deleteM = (url: string, params?: any) => {
  return instance
    .delete(url, {
      params,
    })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return {
          success: true,
          data: res.data,
        };
      } else {
        return {
          success: false,
          data: [],
        };
      }
    });
};

export const post = (url: string, params?: any) => {
  return instance
    .post(url, {
      params,
    })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return {
          success: true,
          data: res.data,
        };
      } else {
        return {
          success: false,
          data: [],
        };
      }
    });
};
