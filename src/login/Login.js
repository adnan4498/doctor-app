import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import "../login/Login.css";
import { LoginApi } from "../api/LoginApi";
import { useNavigate } from "react-router";


const Login = ({setIsLoggedIn}) => {
  // const navigation = useNavigate
  const [error, setError] = useState(null);
  const [loginData, setLoginData] = useState()
  const navigate = useNavigate();
  
  const fetchLogin = async (values) => {
    const url = "http://localhost:3000/admin/login";
    try {
      // Send a POST request to the login API with user credentials
      const response = await axios.post(url, values);
      const data = response.data;
      console.log(response.status)
      
      // Set authentication token in local storage
      localStorage.setItem("authToken", data.token);
      setIsLoggedIn(true);
      console.log("successfully logged in" , data)
      
      // Use navigate to replace the current location with '/'
      if(response.status === 200){
      navigate("/", { replace: true });
      }
      
    } catch (error) {
      setError("Invalid credentials");
    }
  };
    
    console.log("LOGIN DATA" , loginData)

  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={fetchLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="itee">
          <Form.Item
            className="user-name"
            label="Email"
            name="email" // Change to "email" to match your backend's expectations
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </div>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        {error && <div className="error-message">{error}</div>}
      </Form>
    </div>
  );
};

export default Login;
