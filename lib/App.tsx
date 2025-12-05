import Stack from "react-bootstrap/Stack";

import { Header } from "./components/Header";
import { UserInfoCard, UserInfo } from "./components/UserInfoCard";
import { ResourcesCard, ResourceStats } from "./components/ResourcesCard";
import { VolumesCard, VolumeType } from "./components/VolumesCard";
// import { GPUCard } from "./components/GPUCard";

import "./app.css";

interface AppProps {
  userInfoHandler: () => Promise<UserInfo>;
  resourcesHandler: () => Promise<ResourceStats>;
  volumesHandler: () => Promise<VolumeType[]>;
}

function App({ userInfoHandler, resourcesHandler, volumesHandler }: AppProps) {
  return (
    <div className="climb-jupyter onyx h-100">
      <Stack gap={2}>
        <Header />
        <UserInfoCard handler={userInfoHandler} />
        <ResourcesCard handler={resourcesHandler} />
        <VolumesCard handler={volumesHandler} />
        {/* <GPUCard/> */}
      </Stack>
    </div>
  );
}

export default App;
