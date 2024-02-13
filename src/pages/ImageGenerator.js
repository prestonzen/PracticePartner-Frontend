import React, { useState } from "react";
import ResultCard from "../components/ResultCard";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

const ImageGenerator = () => {
  const [selectedValue, setSelectedValue] = useState("Generate from Image");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex md:flex-row px-32 sm:flex-col w-full">
        <div className="flex flex-col md:w-1/2">
          <h1 className="px-6 text-center text-3xl my-4 mb-8 font-semibold">
            Image Generator
          </h1>
          <div className="">
          <InputLabel className="" style={{ fontWeight: 'bolder' }}>
              Generation Style
            </InputLabel>
            <Select
              value={selectedValue}
              onChange={handleChange}
              //   {(e) =>
              // setUserData({ ...userData, industry: e.target.value })
              //   }
              displayEmpty
              className="bg-white rounded-3xl w-full mt-1 pb-4 h-[40%]"
              variant="filled"
              disableUnderline
              defaultValue="Generate from Image"
              autoFocus={false}
            >
              <MenuItem value="Generate from Image">
                Generate from Image
              </MenuItem>
              <MenuItem value="Generate from Text">Generate from Text</MenuItem>
            </Select>
          </div>
          
            {selectedValue === "Generate from Image" && (
              <input type="file" accept="image/*" />
            )}
            {selectedValue === "Generate from Text" && (
                <div className="flex flex-col">
                <div className="bg-transparent">
                <InputLabel className="" style={{ fontWeight: 'bolder' }}>
              What should the AI create?
            </InputLabel>
            <TextField
            //   value={userData["aboutAuthor"]}
            value=""
              multiline
              rows={4}
              onChange=""
            //   {(e) =>
                // setUserData({ ...userData, aboutAuthor: e.target.value })
            //   }
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
            <InputLabel className="" style={{ fontWeight: 'bolder' }}>
              What shouldn't the AI create?
            </InputLabel>
            <TextField
            //   value={userData["aboutAuthor"]}
            value=""
              multiline
              rows={4}
              onChange=""
            //   {(e) =>
                // setUserData({ ...userData, aboutAuthor: e.target.value })
            //   }
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
