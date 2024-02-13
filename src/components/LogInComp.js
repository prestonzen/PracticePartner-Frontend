import * as React from 'react';
import { Link } from 'react-router-dom';

const LogInComp = () => {
  return (
    <div className="flex flex-col p-4 max-w-[603px] text-zinc-900">
      <div className="self-center text-6xl whitespace-nowrap leading-[63.84px] max-md:text-4xl pb-5">
        Log In
      </div>
      <div className=" flex justify-center mt-2 text-slate-900">
        New to Practice Partner? {'  '}
        <Link to="/signup">
          <span className="font-bold"> Sign up here!</span>
        </Link>
      </div>
      <div className="flex flex-col p-6 mt-2 text-base font-semibold rounded-xl bg-slate-600 max-md:px-5 max-md:max-w-full">
        <form>
          <div className="justify-center items-start py-4 pr-16 pl-6 mt-4 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-6 mt-4 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="justify-center items-center px-60 py-4 mt-4 whitespace-nowrap bg-sky-700 rounded-xl text-slate-50 max-md:px-5 max-md:max-w-full"
          >
            Log In
          </button>
        </form>
        <div className="self-center mt-4 text-white whitespace-nowrap">
          Already have an account?
        </div>
        <div className="self-center mt-4 text-white">Or</div>
        <div className="flex justify-center">
          <button className="flex justify-between items-center px-10 py-4 mt-4 max-w-full text-sm leading-5 text-gray-600 whitespace-nowrap rounded-3xl bg-slate-50 w-[250px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bcbda48d513fc320a691c4d0e398b0243566d8ca042c74c734fa30ed102de3b?apiKey=56eb52f6aee94ff2b3f01637cae0192d&"
              className="my-auto w-3.5 aspect-square"
            />
            <div className="grow text-left pl-4">Sign up with Google</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInComp;
