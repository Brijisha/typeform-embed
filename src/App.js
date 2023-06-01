import React, { useEffect } from "react";
import "./App.css";

const TypeformEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://gk0s3ngwwn4.typeform.com/c/FaksmCBS";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="typeform-embed w-100 h-screen flex justify-center items-center">
      <iframe
        title="Typeform Embed"
        src="https://gk0s3ngwwn4.typeform.com/c/FaksmCBS"
        className="border-none"
        style={{ height: "50vh", width: "50vw" }}
      ></iframe>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto">
      <h1 className="text-4xl font-bold mb-8">Typeform Embed Example</h1>
      <TypeformEmbed />
    </div>
  );
};

export default App;
