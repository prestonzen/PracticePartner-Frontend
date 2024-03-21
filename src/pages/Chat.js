import axios from 'axios';
import React, { useState } from 'react';
import { useRef, useEffect } from "react";

const Chat = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);

  const [chatMessages, setChatMessages] = useState([]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [inputMessage, setInputMessage] = useState([]);
  // const [rslt,setRslt] = useState("");

  const handleSendMessage = async () => {
    let rslt = "";

    setInputMessage([...inputMessage, inputPrompt]);
    // setInputPrompt('');
    try {
      // Prepare the messages array to send to the backend

      
      const system = {
        "role": "system",
        "content": "You are a helpful assistant designed to output JSON.",
      };
      const message = {
        "role": "user",
        "content": inputPrompt,
      };

      const messages = [system, message];
      

      // Make a POST request to the backend API
      const response = await axios.post(/*'http://localhost:3000/api/generate-image',*/ 'https://api.practicepartner.ai/api/chat', { messages });
      // response = JSON.parse(response)
      // console.log(response);
      // console.log(response)

      const responseData = response.data;

// Parse the JSON string in the 'message' property
const parsedMessage = JSON.parse(responseData.message);

console.log(parsedMessage)
const iterateObject = (obj) => {
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    // console.log(`${key}:`);
    if (typeof value === 'object' && value !== null) {
      // If the value is an object, recursively iterate over it
      iterateObject(value);
    } else {
      // Otherwise, log the value
      // setRslt(prevState => prevState + value);
      rslt+=value
      // console.log(value);
    }
  });
};

iterateObject(parsedMessage);

// Access the content of the message
// const messageContent = parsedMessage.capital;

// console.log(messageContent);
    console.log(rslt);
      // Update the chatMessages state with the response from the backend
      setInputMessage([...inputMessage, inputPrompt]);
      setChatMessages([...chatMessages, rslt]);
      // setRslt("");
  setInputPrompt("");
      // Clear the input field
      // setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };


  useEffect(() => {
    // if (chatMessages.length) {
      // Scroll to the bottom of the chat messages container
      // containerRef.current.scrollTop = containerRef.current.scrollHeight;

      // ref.current?.scrollIntoView(
      //   {behavior:"smooth",block:"end",}
      // );
    // }
    containerRef.current?.lastElementChild?.scrollIntoView();
  }, [chatMessages]);
  return (
    <div className='flex flex-col mt-10 h-svh md:w-[90%] max-md:w-full'>
    <div className="flex flex-col md:mx-12 h-11/12 max-md:mx-1 rounded-lg overflow-hidden">
      <div className="h-full">
        <div className="h-[850px] overflow-y-auto bg-on-primary-container" 
        ref={containerRef}
        >
        
        {inputMessage.map((message, index) => (
          <div key={index} >
              <div
                // key={index}
                
                className={`flex items-center px-4 py-2 ${
                  'bg-on-primary-container'
                }`}
              >
                <img
                  src={'/person_2.png' }
                  alt={index % 2 === 0 ? 'User Logo' : 'AI Logo'}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="bg-transparent text-white p-2">{inputMessage[index]}</div>
              </div>
              <div
                // key={index+1}
                className={`flex items-center px-4 py-2 ${
                   'bg-secondary'
                }`}
              >
                <img
                  src={'/logo.png'}
                  alt={index % 2 === 0 ? 'User Logo' : 'AI Logo'}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="bg-transparent text-white p-2">{chatMessages[index]}</div>
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
        onChange={(e) => setInputPrompt(e.target.value)}
          className="flex-grow px-4 py-3 bg-transparent border-none focus:outline-none text-gray-700 w-[80%] placeholder-black"
          
        />
        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
        onClick={handleSendMessage}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default Chat;
