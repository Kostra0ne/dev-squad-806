import { useState, useEffect } from "react";
import axios from "axios";
/* 

// ----- Custom Hook useForm -----

*/

export function useForm(initialValues = {}) {
  const [formValues, setFormValues] = useState(initialValues);

  function handleChange(event) {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.type === "file"
        ? event.target.files[0]
        : event.target.value;

    const key = event.target.name;
    setFormValues({
      ...formValues,
      [key]: value,
    });
  }

  return {
    formValues,
    handleChange,
  };
}

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

export function useTimer(intervalValue) {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setInterval(() => {
      // console.log(timer);
      setTimer(function (currentValue) {
        console.log(currentValue, " I am previous value");
        // currentValue++;
        return currentValue + 1;
      });
    }, intervalValue);
  }, [intervalValue]);

  return timer;
}
