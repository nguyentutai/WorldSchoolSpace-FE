// Signin.tsx
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, message, Spin } from "antd";
import { useState } from "react";
import { axiosInstance } from "../../config/axiosConfig";
import { useUser } from "../../components/shared/UserContext";

const Signin = () => {
  const { setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/auth/login", {
        email: values.email,
        password: values.password,
      });

      const { access_token, user } = response.data;

      if (access_token) {
        localStorage.setItem("token", access_token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user); 

        message.success("Login successful!");
        navigate("/"); 
      } else {
        message.error("No token received. Please check your credentials.");
      }
    } catch (error) {
      message.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex flex-col mx-auto mt-5 bg-white rounded-lg">
      <div className="flex justify-center w-full h-full my-auto lg:justify-normal draggable">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center xl:p-7">
            <div className="flex flex-col w-full h-full p-6 text-center bg-white border shadow-lg rounded-3xl">
              <h3 className="mb-3 text-2xl font-medium text-gray-900 sm:text-3xl">
                Get Started
              </h3>
              <div className="flex justify-center">
                <p className="mb-4 text-gray-600">Don't have an account?</p>
                <Link
                  to="/signup"
                  className="ml-1 text-blue-500 cursor-pointer"
                >
                  Sign up
                </Link>
              </div>

              <div className="flex items-center mb-3 mt-5">
                <hr className="flex-grow border-gray-300" />
                <p className="mx-2 text-gray-600">or login with email</p>
                <hr className="flex-grow border-gray-300" />
              </div>

              <Form
                name="basic"
                autoComplete="off"
                layout="vertical"
                onFinish={onFinish}
                className="space-y-4"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                  className="w-full sm:w-[400px]"
                >
                  <Input
                    className="h-[50px] text-lg"
                    placeholder="Email address"
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    className="h-[50px] text-lg"
                    placeholder="Password"
                  />
                </Form.Item>

                <div className="flex justify-between">
                  <div className="flex space-x-1">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-gray-600">
                    <span className="font-bold text-blue-600 cursor-pointer hover:underline">
                      Forgot your password?
                    </span>
                  </Link>
                </div>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full h-[50px]"
                  >
                    {loading ? <Spin /> : "Signin"}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
