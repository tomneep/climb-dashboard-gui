import Stack from "react-bootstrap/Stack";

import { Header } from "./components/Header";
import { UserInfoCard } from "./components/UserInfoCard";
import { ResourcesCard } from "./components/ResourcesCard";
import { VolumesCard } from "./components/VolumesCard";
import { GPUCard } from "./components/GPUCard";

import "./app.css";

function Main({ userInfoHandler, resourcesHandler, volumesHandler }) {
  return (
    <Stack gap={2}>
      <Header />
      <UserInfoCard handler={userInfoHandler} />
      <ResourcesCard handler={resourcesHandler} />
      <VolumesCard handler={volumesHandler} />
      <GPUCard handler={null} />
    </Stack>
  );
}

export default Main;
