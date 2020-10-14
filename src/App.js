import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import * as yup from "yup";
import OnboardForm from "./components/OnboardForm";
// import schema from './components/FormSchema';

const initFormValues = { name: "", email: "", password: "", tos: false };
const initFormErrors = { name: "", email: "", password: "", tos: "" };
const initUsers = [];
const initDisabled = true;

function App() {
  const [users, setUsers] = useState(initUsers);
  const [formValues, setFormValues] = useState(initFormValues);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const [disabled, setDisabled] = useState(initDisabled);

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((result) => {
        setUsers([result.data], ...users);
        setFormValues(initFormValues);
      })
      .catch((err) => {
        debugger;
      });
  };

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos.trim()
    }
    postNewUser(newUser);
  }

  // adjust disabled everytime formValues changes.

  return (
    <div className='App'>
      <OnboardForm />
    </div>
  );
}

export default App;
