import { BaseCard } from "./Card";
import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export function ResourcesCard({ handler }) {
  const [resourceInfo, setResourceInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await handler();
        setResourceInfo(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BaseCard title="Resources">
      <dl>
        <dt>CPUs</dt>
        <dd>{resourceInfo?.cpus ?? "Loading..."}</dd>
        <dt>Memory usage</dt>
        <dd>
          <ProgressBar
            now={resourceInfo?.memory_now ?? 0}
            max={resourceInfo?.memory_max ?? 1}
          />
        </dd>
        <dt>CPU usage</dt>
        <dd>
          <ProgressBar
            now={resourceInfo?.cpu_now ?? 0}
            max={resourceInfo?.cpu_max ?? 1}
          />
        </dd>
      </dl>
    </BaseCard>
  );
}
