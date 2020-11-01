import React from "react";
import { LoginBG, RegisterBG } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBG} className="bg-image" alt="image login" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Input Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Input Password" />
        <Gap height={20} />
        <Button title="Login" />
        <Gap height={60} />
        <Link title="belum punya akun?, silahkan login" />
      </div>
    </div>
  );
};

export default Login;
