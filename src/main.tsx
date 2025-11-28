import React from "react";
import ReactDOM from "react-dom";
import App from "../lib/App.tsx";
import {
  userInfoHandler,
  resourcesHandler,
  volumesHandler,
} from "./handlers.tsx";

ReactDOM.render(
  <React.StrictMode>
    <App
      userInfoHandler={userInfoHandler}
      resourcesHandler={resourcesHandler}
      volumesHandler={volumesHandler}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
