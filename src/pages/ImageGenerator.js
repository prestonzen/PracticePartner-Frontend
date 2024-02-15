import React, { useState } from "react";
import ResultCard from "../components/ResultCard";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const ImageGenerator = () => {
  const [selectedValue, setSelectedValue] = useState("Generate from Image");
  const [selectedPrompt1, setSelectedPrompt1] = useState("");
  const [selectedPrompt2, setSelectedPrompt2] = useState("");
  const [selectedFile1, setSelectedFile1] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handlePrompt1Change = (event) => {
    setSelectedPrompt1(event.target.value);
  };

  const handlePrompt2Change = (event) => {
    setSelectedPrompt2(event.target.value);
  };

  const handleFileChange = (event, fileNumber) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };

  return (
    <div className="w-[80%]">
      <div className="flex md:flex-row mx-8 px-28 sm:flex-col w-full">
        <div className="flex flex-col md:w-1/2">
          <h1 className="px-6 text-center text-3xl my-4 mb-8 font-semibold">
            Image Generator
          </h1>
          <div className="">
            <InputLabel className="" style={{ fontWeight: "bolder" }}>
              Generation Style
            </InputLabel>
            <div className="bg-white h-[40%] rounded-3xl">
              <Select
                value={selectedValue}
                onChange={handleChange}
                //   {(e) =>
                // setUserData({ ...userData, industry: e.target.value })
                //   }
                displayEmpty
                className="bg-white rounded-2xl w-full  pb-4 h-full"
                variant="filled"
                disableUnderline
                defaultValue="Generate from Image"
                autoFocus={false}
              >
                <MenuItem value="Generate from Image">
                  Generate from Image
                </MenuItem>
                <MenuItem value="Generate from Text">
                  Generate from Text
                </MenuItem>
              </Select>
            </div>
          </div>

          {selectedValue === "Generate from Image" && (
            <div className="">
              <InputLabel
                className="text-black font-bold"
                style={{ fontWeight: "bolder" }}
              >
                File Upload
              </InputLabel>
              <label htmlFor="uploadInput1" className="cursor-pointer">
                <div className="bg-white h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition w-full flex flex-col items-center justify-center">
                  {selectedFile1 ? (
                    <img
                      src={URL.createObjectURL(selectedFile1)}
                      alt="Selected"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <img src="upload.png" alt="Upload" className="mb-2" />
                      <span className="text-logo mb-2">
                        Click to upload a photo
                      </span>
                    </div>
                  )}
                </div>
              </label>

              <input
                id="uploadInput1"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange(e)}
              />
            </div>
          )}
          {selectedValue === "Generate from Text" && (
            <div className="flex flex-col">
              <div className="bg-transparent">
                <InputLabel className="" style={{ fontWeight: "bolder" }}>
                  What should the AI create?
                </InputLabel>
                <TextField
                  //   value={userData["aboutAuthor"]}
                  value={selectedPrompt1}
                  multiline
                  rows={4}
                  onChange= {(e) =>
                    handlePrompt1Change( e)
                    }
                  placeholder=""
                  className="bg-white rounded-xl w-full mt-1"
                  variant="filled"
                  InputProps={{
                    style: {
                      border: "none",
                      borderRadius: "0.75rem",
                      // height: "2.5rem",
                      paddingBottom: "0.8rem",
                    },
                    disableUnderline: true,
                  }}
                />
              </div>
              <div className="bg-transparent mt-4">
                <InputLabel className="" style={{ fontWeight: "bolder" }}>
                  What shouldn't the AI create?
                </InputLabel>
                <TextField
                  //   value={userData["aboutAuthor"]}
                  value={selectedPrompt2}
                  multiline
                  rows={4}
                  onChange={(e) =>
                    handlePrompt2Change( e)
                    }
                  placeholder=""
                  className="bg-white rounded-xl w-full mt-1"
                  variant="filled"
                  InputProps={{
                    style: {
                      border: "none",
                      borderRadius: "0.75rem",
                      // height: "2.5rem",
                      paddingBottom: "0.8rem",
                    },
                    disableUnderline: true,
                  }}
                />
              </div>
            </div>
          )}
          <div className="flex sm:justify-center">
            <Link
              to="/generate"
              className={`bg-primary text-white font-bold text-sm rounded-2xl mt-4 px-4 py-4 w-full hover:bg-primary-light 
        transition-colors duration-300 flex justify-center`}
            >
              Generate
            </Link>
          </div>
          <Link
            to="/generate"
            className={`bg-transparent text-black font-semibold text-sm mt-2 px-4 py-4 w-full hover:bg-primary-light 
        transition-colors duration-300 flex justify-start`}
          >
            Advanced Mode
          </Link>
        </div>
        <div className="flex flex-col  px-6">
          <h1 className="px-6 text-center text-3xl font-semibold my-4">
            Results
          </h1>
          <div className="grid md:grid-cols-2">
            <ResultCard imageUrl="result.png" />
            <ResultCard imageUrl="result2.png" />
            <ResultCard imageUrl="result3.png" />
            <ResultCard imageUrl="result4.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
