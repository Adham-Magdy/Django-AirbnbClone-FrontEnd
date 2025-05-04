import { getSessionAccessToken } from "../lib/action";

const apiService = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get: async function (url: string): Promise<any> {
    const token = await getSessionAccessToken();

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "GET",
        headers: {
          ACCEPT: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response:", json);
          resolve(json);
        })
        .then((error) => {
          reject(error);
        });
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: async function (url: string, data: any): Promise<any> {
    const token = await getSessionAccessToken();
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: data,
        headers: {
          ACCEPT: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response: ", json);
          resolve(json);
        })
        .then((error) => {
          reject(error);
        });
    });
  },
};

export default apiService;
