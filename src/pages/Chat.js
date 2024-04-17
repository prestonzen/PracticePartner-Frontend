import axios from "axios";
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { toast } from 'react-toastify';

const BACKEND_URL=process.env.REACT_APP_BACKEND_URL;

const Chat = ({setIsSubscribed}) => {
  const containerRef = useRef(null);

  const [chatMessages, setChatMessages] = useState([]);
  const [inputPrompt, setInputPrompt] = useState("");
  const [inputMessage, setInputMessage] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChatMessages = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/chat`,{ withCredentials: true });
  
        const responseData = response.data;
  
        // Extract input messages from the response and update state
        responseData.chats.forEach((chat) => {
          setInputMessage((prevInputMessages) => [
            ...prevInputMessages,
            chat.question,
          ]);
          setChatMessages((prevChatMessages) => [
            ...prevChatMessages,
            chat.answer,
          ]);
        });
      } catch (error) {
        console.error("Error fetching chat messages:", error);
        if (error.response && error.response.status === 401) {
          // Redirect to the login page
          navigate('/login');
        }
      }finally{
        setPageLoading(false);
      }
    };
  
    // Call the fetchChatMessages function when the component mounts
    fetchChatMessages();
  
  },[])

  const handleSendMessage = async () => {
    setLoading(true);
    // setInputMessage([...inputMessage, inputPrompt]);
    // setInputPrompt('');
    try {
      // Prepare the messages array to send to the backend

      const system = {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      };
      const message = {
        role: "user",
        content: inputPrompt,
      };

      const messages = [system, message];

      // Make a POST request to the backend API
      const response = await axios.post(
        `${BACKEND_URL}/chat`,
        { messages },
        {
          withCredentials: true,
          credentials: 'include'
        }
      );

      const responseData = response.data.message;

      // console.log(responseData);
      // Update the chatMessages state with the response from the backend
      setInputMessage([...inputMessage, inputPrompt]);
      setChatMessages([...chatMessages, responseData]);
      // setRslt("");
      setInputPrompt("");
      // Clear the input field
      // setInputMessage('');
    } catch (error) {
      console.error("Error sending message:", error);
      if (error.response && error.response.status === 401) {
        // Redirect to the plan page
        setIsSubscribed(false);
        toast.error('Please subscribe to continue!');
        navigate('/plan');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    containerRef.current?.lastElementChild?.scrollIntoView();
  }, [chatMessages]);


  if (pageLoading) {
    // Render loading indicator or placeholder while data is being fetched
    return (<div className="bg-primary-container w-full flex justify-center items-center h-svh">
    <PropagateLoader color="#006590" loading={true} size={15} />
  </div>);
  }

  return (
    <div className="flex flex-col mt-10 md:w-[90%] max-md:w-full">
      <div className="flex flex-col md:mx-12 max-md:mx-1 rounded-lg overflow-hidden">
        <div className="">
          <div
            className="h-[550px] 2xl:h-[650px] overflow-y-auto bg-on-primary-container"
            ref={containerRef}
          >
            {inputMessage.map((message, index) => (
              <div key={index}>
                <div
                  // key={index}

                  className={`flex items-center px-4 py-2 ${"bg-on-primary-container"}`}
                >
                  <img
                    src={"/person_2.png"}
                    alt={index % 2 === 0 ? "User Logo" : "AI Logo"}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div className="bg-transparent text-white p-2">
                    {inputMessage[index]}
                  </div>
                </div>
                <div
                  // key={index+1}
                  className={`flex items-center px-4 py-2 ${"bg-secondary"}`}
                >
                  <img
                    src={"/logo.png"}
                    alt={index % 2 === 0 ? "User Logo" : "AI Logo"}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div className="bg-transparent text-white p-2">
                    {chatMessages[index]}
                  </div>
                </div>
              </div>
            ))}
            {/* <div ref={ref}></div> */}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-1 mt-4 md:mx-12 sm:mx-8 bg-white border border-primary rounded-lg ">
        <input
          type="text"
          placeholder="Ask Something"
          value={inputPrompt}
          disabled={loading}
          onChange={(e) => setInputPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          className="flex-grow px-4 py-3 bg-transparent border-none focus:outline-none text-gray-700 w-[80%] placeholder-black"
        />
        <button
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
          disabled={loading}
          onClick={handleSendMessage}
        >
{loading ? (
            <svg
              className="animate-spin h-5 w-5 mr-3 border-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0117.709 7H20c0 6.627-5.373 12-12 12v-3.291z"
              ></path>
            </svg>
          ) : (
            "Generate"
          )}
        </button>
      </div>
    </div>
  );
};

export default Chat;
