import React from "react";
import { FormContext } from "./FormContext";
import data from "../json/data.json";
const FormContextProvider = ({ children }) => {
  const lista = [];
  lista.push(data);
  return (
    <div>
      <FormContext.Provider value={{ lista }}>{children}</FormContext.Provider>
    </div>
  );
};

export default FormContextProvider;
