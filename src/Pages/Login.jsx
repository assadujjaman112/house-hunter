import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-4/5 md:w-3/5 mx-auto bg-slate-200 px-8 py-6 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-5">Login Now</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full gap-5">
          <div className="flex flex-col w-1/2">
            <label htmlFor="" className="mb-1 pl-3">
              Name
            </label>
            <input
              {...register("name")}
              placeholder="Your Name.."
              className=" input "
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="" className="mb-1 pl-3">
              Name
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Your Role
              </option>
              <option>House Owner</option>
              <option>House Renter</option>
            </select>
          </div>
        </div>
        <div className="flex w-full mt-3 gap-5">
          <div className="flex flex-col w-1/2">
            <label htmlFor="" className="mb-1 pl-3">
              Phone
            </label>
            <input
              placeholder="Mobile No.."
              {...register("mobile")}
              className=" input "
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="" className="mb-1 pl-3">
              Email
            </label>
            <input
              placeholder="Your Email.."
              {...register("email")}
              className=" input "
            />
          </div>
        </div>
        <div className="flex w-full mt-3 gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="" className="mb-1 pl-3">
              Password
            </label>
            <input
              placeholder="Password.."
              {...register("password")}
              type="password"
              className=" input "
            />
          </div>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="submit"
          value="Login Now"
          className="btn btn-block mt-5 bg-slate-900 text-white hover:text-black"
        />
      </form>
    </div>
  );
};

export default Login;
