import { useEffect, useState } from "react";

import Stack from "react-bootstrap/Stack";

import { Header } from "./components/Header";
import { UserInfoCard, UserInfo } from "./components/UserInfoCard";
import { ResourcesCard, ResourceStats } from "./components/ResourcesCard";
import { VolumesCard, VolumeType } from "./components/VolumesCard";
import { GPUCard, GPUInfo } from "./components/GPUCard";

import "./app.css";

interface AppProps {
  userInfoHandler: () => Promise<UserInfo>;
  resourcesHandler: () => Promise<ResourceStats>;
  volumesHandler: () => Promise<VolumeType[]>;
  gpuHandler: () => Promise<GPUInfo>;
}

function App({
  userInfoHandler,
  resourcesHandler,
  volumesHandler,
  gpuHandler,
}: AppProps) {
  const [hasGPU, setHasGPU] = useState<boolean | null>(null);

  useEffect(() => {
    gpuHandler()
      .then((info) => {
        setHasGPU(info.available === true);
      })
      .catch(() => {
        setHasGPU(false);
      });
  }, [gpuHandler]);

  return (
    <div className="climb-jupyter onyx h-100">
      <Stack gap={2}>
        <Header />
        <UserInfoCard handler={userInfoHandler} />
        <ResourcesCard handler={resourcesHandler} />
        <VolumesCard handler={volumesHandler} />
        {hasGPU && <GPUCard handler={gpuHandler} />}
      </Stack>
    </div>
  );
}

export default App;
