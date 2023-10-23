// import { useEffect } from "react";
import { useState } from "react";

function Register() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [userErrorData, setUserErrorData] = useState({
    name: "require",
    username: "require",
    password: "require",
    confirmPassword: "require",
    email: "require",
  });
  const handle = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setUserData({ ...userData, [name]: value });
    // setUserData((prevState) => ({
    //     ...prevState,
    //     [name]: value,
    //   }));
    if (name === "email") {
      setUserErrorData((prevState) => ({
        ...prevState,
        [name]:
          value.trim().length === 0
            ? "Required"
            : emailRegex.test(value)
            ? ""
            : "Enter a valid email",
      }));
    } else if (name === "name") {
      setUserErrorData((prevState) => ({
        ...prevState,
        [name]: value.length === 0 ? "Required" : "",
      }));
    } else if (name === "username") {
      setUserErrorData((prevState) => ({
        ...prevState,
        [name]:
          value.length === 0
            ? "Required"
            : value.includes(" ")
            ? "do not include space"
            : "",
      }));
    } else if (name === "password") {
      setUserErrorData((prevState) => ({
        ...prevState,
        [name]:
          value.trim().length === 0
            ? "Required"
            : value.length < 8
            ? "Must be at least 8 characters"
            : passRegex.test(value)
            ? ""
            : "Must contain at least one lowercase, one uppercase, and one special character",
      }));
    } else if (name === "confirmPassword") {
      setUserErrorData((prevState) => ({
        ...prevState,
        [name]:
          value.length === 0
            ? "Required"
            : value !== userData.password
            ? "Must be same pass"
            : "",
      }));
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            value={userData.name}
            onChange={(e) => handle(e)}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
          />
          <div id="name" className="form-text text-danger">
            {userErrorData.name}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
            value={userData.username}
            onChange={(e) => handle(e)}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="username"
          />
          <div id="username" className="form-text text-danger">
            {userErrorData.username}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            value={userData.email}
            onChange={(e) => handle(e)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-danger">
            {userErrorData.email}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={userData.password}
            onChange={(e) => handle(e)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            aria-describedby="passHelp"
          />
          <div id="passHelp" className="form-text text-danger">
            {userErrorData.password}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={(e) => handle(e)}
            type="password"
            className="form-control"
            id="confirmPassword"
            aria-describedby="confirmPassword"
          />
          <div id="confirmPassword" className="form-text text-danger">
            {userErrorData.confirmPassword}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={Object.values(userErrorData).some((error) => error !== "")}
        >
          Submit
        </button>
      </form>
    </>
  );
}
export default Register;

// const [userData, setUserData] = useState({
//   username: "",
//   password: "",
//   email: "",
// });

// const handleChange = (event) => {
//   const { name, value } = event.target;
//   setUserData((prevState) => ({
//     ...prevState,
//     [name]: value,
//   }));
// };

// return (
//   <>
//     <div classNameName="container">
//       <h1>Register</h1>
//       <input
//         type="text"
//         name="username"
//         value={userData.username}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         value={userData.password}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         value={userData.email}
//         onChange={handleChange}
//       />
//     </div>
//   </>
// );
