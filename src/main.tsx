import React from "react";
import ReactDOM from "react-dom";
import Main from "../lib/App.tsx";
import { userInfoHandler, resourcesHandler, volumesHandler } from "./handlers.tsx";

ReactDOM.render(
  <React.StrictMode>
    <Main
  userInfoHandler={userInfoHandler}
  resourcesHandler={resourcesHandler}
  volumesHandler={volumesHandler}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
