import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col items-center text-base whitespace-nowrap max-w-[571px]">
      <div className="text-6xl leading-[63.84px] text-zinc-900 max-md:text-4xl">
        Login
      </div>
      <div className="mt-2 text-slate-900">
        New to Practice Partner?{" "}
        <span className="font-bold">Sign up here!</span>
      </div>
      <div className="flex flex-col self-stretch p-6 mt-2 w-full font-semibold rounded-xl bg-slate-600 text-slate-50 max-md:px-5 max-md:max-w-full">
        <div className="justify-center items-start py-4 pr-16 pl-6 rounded-xl bg-slate-50 text-zinc-900 max-md:px-5 max-md:max-w-full">
          E-mail
        </div>
        <div className="justify-center items-start py-4 pr-16 pl-6 mt-4 rounded-xl bg-slate-50 text-zinc-900 max-md:px-5 max-md:max-w-full">
          Password
        </div>
        <div className="justify-center items-center px-16 py-4 mt-4 bg-sky-700 rounded-xl max-md:px-5 max-md:max-w-full">
          Login
        </div>
        <div className="self-center mt-4">Already have an account?</div>
        <div className="self-center mt-4 text-2xl leading-7">Or</div>
        <div className="flex flex-col justify-center self-center mt-4 max-w-full text-sm leading-5 text-gray-600 rounded-3xl bg-slate-50 w-[250px]">
          <div className="flex gap-3 justify-between px-4 py-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/79a8b03d3bde3e4f63ffd4e1f0fe87f7c5f0fbac5ed06b65f5a422097aedf5ba?apiKey=56eb52f6aee94ff2b3f01637cae0192d&"
              className="my-auto w-3.5 aspect-square"
            />
            <div className="grow">Sign up with Google</div>
          </div>
        </div>
      </div>
    </div>
  );
}


