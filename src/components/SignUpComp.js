import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { auth } from '../utlis/firebase';
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SignUpComp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (result) => {
          await sendEmailVerification(result.user);
          toast.success('Verification email sent!');

          // Loop until email is verified
          while (!result.user.emailVerified) {
            // Check email verification status every second
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Refresh the user object to get the latest emailVerified status
            await result.user.reload();
          }

          // Making the API call to sign up
          const response = await axios.post(`${BACKEND_URL}/signup`, formData);

          // Navigate to login page
          navigate('/login');
          toast.success('Signup successful! Please login to continue.');
        }
      );
    } catch (error) {
      // console.error('Signup error:', error.message);
      // Handle error (e.g., show error message)
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((result) => {});
  }, []);

  // const { isAuthenticated, login, logout } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const handleClick = async (e) => {
    try {
      const data = await signInWithPopup(auth, provider);

      const userData = {
        name: data.user.displayName,
        email: data.user.email,
        // password: req.body.password,
        isFree: true,
        freePrompts: 10,
      };

      // setEmail(true);
      navigate('/generate-image');
      await axios.post(
        `${BACKEND_URL}/checkAndStoreUser`,
        JSON.stringify(userData),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          withCredentials: true, 
          credentials: 'include', 
        }
      );
    } catch (error) {
      console.error('Error during login:', error);
      // Handle errors appropriately (e.g., display an error message)
    }
  };

  return (
    <div className="flex flex-col p-4 max-w-[603px] text-zinc-900">
      <div className="self-center text-6xl whitespace-nowrap leading-[63.84px] max-md:text-4xl pb-5">
        Sign up
      </div>
      <div className="flex flex-col p-6 mt-2 text-base font-semibold rounded-xl bg-slate-600 max-md:px-5 max-md:max-w-full">
        <form onSubmit={handleSubmit}>
          <div className="justify-center items-start py-4 pr-16 pl-6 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-6 mt-4 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-6 mt-4 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              required
              onChange={handleChange}
              className="appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              minLength="8"
              pattern="^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$" 
              title="Password must be at least 8 characters long & include one number and one character"
            />
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-6 mt-4 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              minLength="8"
              pattern="^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$" 
              title="Password must be at least 8 characters long & include one number and one character"
            />
          </div>
          <button
            type="submit"
            className="justify-center items-center px-60 py-4 mt-4 whitespace-nowrap bg-sky-700 rounded-xl text-slate-50 max-md:px-5 max-md:max-w-full"
          >
            Sign up
          </button>
        </form>
        <div className="self-center mt-4 text-white whitespace-nowrap">
          <Link to="/login">Already have an account?</Link>
        </div>
        <div className="self-center mt-4 text-white">Or</div>
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="flex justify-between items-center px-10 py-4 mt-4 max-w-full text-sm leading-5 text-gray-600 whitespace-nowrap rounded-3xl bg-slate-50 w-[250px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bcbda48d513fc320a691c4d0e398b0243566d8ca042c74c734fa30ed102de3b?apiKey=56eb52f6aee94ff2b3f01637cae0192d&"
              className="my-auto w-3.5 aspect-square"
              alt="Google Logo"
            />
            <div className="grow text-left pl-4">Sign up with Google</div>
          </button>
        </div>

        <div className="mt-4 text-white max-md:max-w-full">
          By signing up, you are indicating that you have read and agree to the{' '}
          <Link to="/termsofuse">
            <span className="font-bold">Terms of Use </span>
          </Link>
          and
          <Link to="/privacy-policy">
            <span className="font-bold"> Privacy Policy</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpComp;
