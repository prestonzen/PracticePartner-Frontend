import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col p-4 max-w-[603px] text-zinc-900">
      <div className="self-center text-6xl whitespace-nowrap leading-[63.84px] max-md:text-4xl">
        Sign up
      </div>
      <div className="flex flex-col p-6 mt-2 text-base font-semibold rounded-xl bg-slate-600 max-md:px-5 max-md:max-w-full">
        <div className="justify-center items-start py-4 pr-16 pl-6 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
          Name
        </div>
        <div className="justify-center items-start py-4 pr-16 pl-6 mt-4 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
          E-mail
        </div>
        <div className="justify-center items-start py-4 pr-16 pl-6 mt-4 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
          Password
        </div>
        <div className="justify-center items-start py-4 pr-16 pl-6 mt-4 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
          Conform password
        </div>
        <div className="justify-center items-center px-16 py-4 mt-4 whitespace-nowrap bg-sky-700 rounded-xl text-slate-50 max-md:px-5 max-md:max-w-full">
          Sign up
        </div>
        <div className="self-center mt-4 text-white whitespace-nowrap">
          Already have an account?
        </div>
        <div className="self-center mt-4 text-white">Or</div>
        <div className="flex flex-col justify-center self-center mt-4 max-w-full text-sm leading-5 text-gray-600 whitespace-nowrap rounded-3xl bg-slate-50 w-[250px]">
          <div className="flex gap-3 justify-between px-4 py-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bcbda48d513fc320a691c4d0e398b0243566d8ca042c74c734fa30ed102de3b?apiKey=56eb52f6aee94ff2b3f01637cae0192d&"
              className="my-auto w-3.5 aspect-square"
            />
            <div className="grow">Sign up with Google</div>
          </div>
        </div>
        <div className="mt-4 text-white max-md:max-w-full">
          By signing up, you are indicating that you have read and agree to the{" "}
          <span className="font-bold">Terms of Use</span> and{" "}
          <span className="font-bold">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}


