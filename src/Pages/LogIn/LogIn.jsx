
import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import login from "../../assets/images/logIn.json";
const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <Lottie animationData={login} loop={true} className="w-2/3" />
          </div>
          <div className="">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body bg-yellow-100  shadow-2xl p-6 md:mt-16 rounded-2xl border border-black"
            >
              <h4 className="font-bold mb-2">Please LogIn</h4>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  {...register("username", { required: true })}
                  placeholder="Enter your username"
                  className="input input-bordered "
                />
                {errors.username && (
                  <span className="text-red-500">user name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="input input-bordered "
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control relative mb-1 ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />

                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-600 text-white hover:bg-orange-400"
                  type="submit"
                  value="LogIn"
                />
              </div>
            </form>
            

            <p>
              <small className="text-orange-600 ml-6 text-sm">
                New Here? please{" "}
                <Link to="/register" className="font-bold">
                  Register
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
