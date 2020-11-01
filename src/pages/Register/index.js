import React from "react";
import "./register.scss";
import { RegisterBG } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBG} className="bg-image" alt="ilustrasi register" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Fullname" placeholder="Input Fullname" />
        <Gap height={18} />
        <Input label="Email" placeholder="Input Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Input Password" />
        <Gap height={20} />
        <Button title="Register" />
        <Gap height={60} />
        <Link title="kembali ke login" />
      </div>
    </div>
  );
};

export default Register;
