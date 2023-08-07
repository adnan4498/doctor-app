import axios from 'axios';

export async function AxiosConfig({ endpoint, values }) {
  try {
    console.log("last values", values);
    console.log("last url", endpoint);

    const result = await axios.post(endpoint, values);

    console.log("RESULT", result);
    
    const { data, ...response } = result;
    return { data, response };
  } catch (error) {
    throw error; // Rethrow the error to be caught in higher-level functions
  }
}
