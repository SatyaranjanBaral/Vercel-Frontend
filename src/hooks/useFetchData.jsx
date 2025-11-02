import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);     // fetched data
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null); // error message

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // ✅ Get token from localStorage
        const token = localStorage.getItem("token");

        // ✅ Send request with Authorization header
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Failed to fetch data");
        }

        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
