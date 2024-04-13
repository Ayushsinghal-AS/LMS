import { React, useState } from "react";
import axios from "axios";
import style from "./style.css";

const Login = () => {

  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3001";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
  return (
    <>

      <form className="mt-4 m-4" onSubmit={handleSubmit}>
        <div className="m-2">
          <h4>Login</h4>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={handleChange}
							value={data.email}
            className="form-control col-lg-6 col-md-6"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 mt-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={handleChange}
							value={data.password}
            className="form-control col-lg-6 col-md-6"
            id="exampleInputPassword1"
          />
        </div>
        {error && <div className={style.error_msg}>{error}</div>}

        
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

    </>
  )
}

export default Login;