import React from "react";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
