import { useState } from "react";
import axios from "axios";
import style from "./style.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [data, setData] = useState({
    Name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
      <div className="m-2">
        <h4>Sign up</h4>
      </div>
      <form className="mt-4 m-4" onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="exampleInputText1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control col-lg-6 col-md-6"
            onChange={handleChange}
            value={data.Name}
            id="exampleInputText1"
            aria-describedby="text"
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control col-lg-6 col-md-6"
            onChange={handleChange}
            value={data.email}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label htmlFor="category" className="mb-3 mt-3">
            Category
          </label>
          <br />
          <select id="category" className="col-md-12">
            <option value="Student" selected='student'>Student</option>
            <option value="Library">Library</option>
          </select>
        </div>
        <div className="mb-3 mt-2 mt-5">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control col-lg-6 col-md-6"
            onChange={handleChange}
            value={data.password}
            id="exampleInputPassword1"
          />
        </div>
        {error && <div className={style.error_msg}>{error}</div>}
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </>



  )
}

export default Signup;