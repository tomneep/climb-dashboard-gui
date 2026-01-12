import { BaseCard } from "./Card";
import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export type VolumeType = {
  label: string;
  data: {
    used: number;
    total: number;
  };
};

interface VolumesCardProp {
  handler: () => Promise<VolumeType[]>;
}

export function VolumesCard({ handler }: VolumesCardProp) {
  const [resourceInfo, setResourceInfo] = useState<VolumeType[]>([]);

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
    // TODO: Silencing linter for now although should fix this properly
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseCard title="Volumes">
      <dl>
        {resourceInfo.map((volume) => (
          <React.Fragment key={volume.label}>
            <dt>{volume.label}</dt>
            <dd>
              <ProgressBar
                now={volume.data.used}
                max={volume.data.total}
                label={`${Math.round((100 * volume.data.used) / volume.data.total)}%`}
              />
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </BaseCard>
  );
}
