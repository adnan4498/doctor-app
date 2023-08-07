import { AxiosConfig } from "../axios/AxiosConfig";

export async function LoginApi({ url, values }) {
    console.log("2nd url", url);
    console.log("2nd values", values);
  
    try {
      const { data, response } = await AxiosConfig({
        endpoint: url,
        values: values,
      });
  
      console.log("2nd data returned", data);
      console.log("2nd response returned", response);
  
      // Check the response status and handle invalid email or password
      if (response.status === 401) {
        throw new Error("Invalid email or password"); // or handle it differently
      }
  
      return data;
    } catch (error) {
      throw error;
    }
  }
  