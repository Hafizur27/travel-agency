

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../../assets/images/logIn.json";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const {createUser, updateUserData} = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      createUser(data.email , data.password)
      .then((result)=> {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserData(loggedUser, data.username)
        reset()
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={login} loop={true} className="w-2/3" />
          </div>
          <div className="">
            <form
              className="card-body bg-yellow-100  shadow-2xl p-6 md:mt-16 rounded-2xl border border-black"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h4 className="font-bold mb-2">Please Register Now</h4>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="username"
                  {...register("username", { required: true })}
                  className="input input-bordered"
                />
                {errors.username && (
                  <span className="text-red-500">name is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">password must be six character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    please provide uppercase and special character
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="SignUp"
                  className="btn bg-orange-600 text-white hover:bg-orange-400"
                />
              </div>
            </form>
            <p>
              <small className="text-orange-600 ml-6 text-sm">
                Already have an account? please{" "}
                <Link to="/login" className="font-bold">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Register