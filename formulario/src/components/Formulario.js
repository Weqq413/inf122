import React from "react";
import "../styles/Styles.css";
import { useState } from "react";

const initialState = {
  userName: "",
  fullName: "",
  age: ""
};

function Formulario() {
  const [form, setValues] = useState(initialState);

  const [display, setDisplay] = useState(false);

  const printValues = (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  const updateField = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={printValues}>
      <div>
        <label htmlFor="userName">
          Nombre de Usuario:
          <input
            value={form.userName || ""}
            name="userName"
            onChange={updateField}
          />
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="fullName">
          Nombre Completo:
          <input
            value={form.fullName || ""}
            name="fullName"
            type="text"
            onChange={updateField}
          />
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="age">
          Edad:
          <input value={form.age || ""} name="age" onChange={updateField} />
        </label>
      </div>
      <br />
      <button>Submit</button>
      {display && (
        <>
          <h4>Solicitud enviada a la base de datos con los datos de solicitud siguientes</h4>
          <ul>
            <li>Nombre de Usuario: {form.userName.toUpperCase()}</li>
            <li>Nombre completo: {form.fullName.toUpperCase()}</li>
            <li>Edad: {form.age}</li>
          </ul>
        </>
      )}
    </form>
  );
}

export default Formulario;