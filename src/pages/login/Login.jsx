import "./login.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/userSlice";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (form.username.length === 0 || form.password.length === 0) {
      setError("Fill all form!");
      setIsLoading(false);
    } else {
      try {
        // fetch data
        const res = await apiRequest.post("/auth/login", form);

        // redux dispatch action
        dispatch(login(res.data.userInfo));

        // restart states
        setIsLoading(false);
        setError(null);
        setForm({
          username: "",
          password: "",
        });
        navigate("/");
      } catch (error) {
        setIsLoading(false);
        setError(error.response.data.message);
      }
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
