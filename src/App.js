import axios from "axios";
import React from "react";

const App = () => {
  async function generateAns() {
    console.log("loadind...!");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YourAPIKey",
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: "Daal Fry kse bnatge hai?" }],
          },
        ],
      },
    });
    console.log(
      response["data"]["candidates"][0]["content"]["parts"][0]["text"]
    );
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={generateAns}>Generate Ans</button>
    </div>
  );
};

export default App;
