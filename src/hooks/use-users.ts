import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export function useUsers() {
  const [isLoading, setLoading] = useState<boolean>(false);

  async function getListUser() {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response?.status === 200) {
        setLoading(false);
        return response?.data;
      } else {
        throw response;
      }
    } catch (err) {
      setLoading(false);
      toast.error("Gagal mengambil data, silahkan coba lagi");
    }
  }

  return {
    isLoading,
    getListUser,
  };
}
