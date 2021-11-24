import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Input from "@material-tailwind/react/Input";
import H5 from "@material-tailwind/react/Heading5";
import H4 from "@material-tailwind/react/Heading5";

export default function Login() {
  const { loginUser } = useContext(AuthContext);

  //loacl login
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [alert, setAlert] = useState({
    error: false,
    message: "",
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      console.log(loginData);
      if (!loginData.success) {
        setAlert({ error: true, message: loginData.message });
      }
    } catch (error) {
      console.log(error);
      setAlert({ error: true, message: error.message });
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setAlert({ error: false });
    }, 5000);
  }, [alert]);

  return (
    <>
      <Card size="xl" className="flex flex-col justify-center items-center">
        <CardHeader
          color="lightBlue"
          className=" flex flex-col justify-center items-center"
          size="lg"
        >
          <H5 color="red">Trường Đại Học Công Nghiệp</H5>
          <H4 color="white">Admin Login</H4>
        </CardHeader>

        <CardBody>
          {alert.error ? (
            <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
              <span className="text-xl inline-block mr-5 align-middle">
                <i class="fas fa-exclamation-circle"></i>
              </span>
              <span className="inline-block align-middle mr-8">
                <b className="capitalize">Error!</b>
                {alert.message}
              </span>
            </div>
          ) : null}

          <div className="mt-4 mb-8 px-4">
            <Input
              type="text"
              color="lightBlue"
              size="lg"
              outline={true}
              placeholder="Username"
              name="username"
              onChange={(e) => {
                setLoginForm({ ...loginForm, username: e.target.value });
              }}
              value={loginForm.username}
            />
          </div>
          <div className="mb-4 px-4">
            <Input
              color="lightBlue"
              size="lg"
              outline={true}
              type="password"
              value={loginForm.password}
              onChange={(e) => {
                setLoginForm({ ...loginForm, password: e.target.value });
              }}
              placeholder="Password"
              name="password"
            />
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex justify-center">
            <button
              type="submit"
              className="p-2 bg-blue-500 text-lg  text-gray-100 hover:bg-blue-700 transition hover:text-white rounded-lg"
              onClick={onSubmit}
            >
              Đăng Nhập
            </button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
