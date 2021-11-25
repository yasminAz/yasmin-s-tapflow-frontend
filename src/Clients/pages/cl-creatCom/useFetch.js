import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setName] = useState(null);
  const [isPending, setIsPening] = useState(true);
  const [errorr, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController(); //abort what is going on

    setTimeout(function () {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          console.log("test");
          console.log(data);
          console.log("test");
          setName(data);
          setIsPening(false);
          setError(null);
        })
        .catch((err) => {
          if (err === "AbortError") {
          } else {
            setError(true);
            setIsPening(false);
          }
        });
    }, 1500);

    return () => abortCont.abort(); //cleanup function
  }, [url]);
  return { data, isPending, errorr };
};
export default useFetch;
