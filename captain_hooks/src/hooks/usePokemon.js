import { useEffect, useState } from "react";
import axios from "axios";

export const usePokemon = (url) => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        //Emulating crappy internet in order to show Loading...
        setTimeout(() => {
          setPokemon(res.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [url]);

  return [pokemon, isLoading, setPokemon];
};
