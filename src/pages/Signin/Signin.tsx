import { Link, useNavigate } from "react-router-dom";

import { Button, Form, Input, Spin } from "antd";

const Signin = () => {
  return (
    <div className="container flex flex-col mx-auto mt-5 bg-white rounded-lg">
      <div className="flex justify-center w-full h-full my-auto lg:justify-normal draggable">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center xl:p-7">
            <div className="flex flex-col w-full h-full p-6 text-center bg-white border shadow-lg rounded-3xl">
              <h3 className="mb-3 text-2xl font-medium text-gray-900 sm:text-3xl">
                Get's Started
              </h3>
              <div className="flex justify-center">
                <p className="mb-4 text-gray-600">Don't have an account?</p>
                <p className="ml-1 text-blue-500 cursor-pointer">Sign up</p>
              </div>
              <div className="flex justify-center space-x-3 sm:space-x-5">
                <div className="border border-gray-200 px-6 py-2 rounded-lg">
                  <img
                    src="./image/tải xuống.jfif"
                    alt=""
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg"
                  />
                </div>
                <div className="border border-gray-200 px-6 py-2 rounded-lg">
                  <img
                    src="./image/tải xuống (1).png"
                    alt=""
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg"
                  />
                </div>
                <div className="border border-gray-200 px-6 py-2 rounded-lg">
                  <img
                    src="./image/images.png"
                    alt=""
                    className="w-7 h-6 sm:w-8 sm:h-7 rounded-lg"
                  />
                </div>
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
                className="space-y-4"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  className="w-full sm:w-[400px]"
                >
                  <Input
                    className="h-[50px] text-lg"
                    placeholder="Email address"
                  />
                </Form.Item>

                <Form.Item label="Password" name="password">
                  <Input.Password
                    className="h-[50px] text-lg"
                    placeholder="Password"
                  />
                </Form.Item>
                <div className="flex justify-between">
                  <div className="flex space-x-1">
                    <input type="checkbox" name="" id="" />
                    <p>Remember me</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-blue-600 cursor-pointer hover:underline">
                      Forgot your password?
                    </span>
                  </p>
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full h-[50px]"
                  >
                    Signin
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10" />
    </div>
  );
};

export default Signin;
