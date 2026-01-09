import { BaseCard } from "./Card";
import { useState, useEffect } from "react";

export interface GPUInfo {
  name: string;
  available: boolean;
}

interface GPUProps {
  handler: () => Promise<GPUInfo>;
}

export function GPUCard({ handler }: GPUProps) {
  const [gpuInfo, setGPUInfo] = useState<GPUInfo | null>(null); // initially empty
  // You could also have loading/error states if you like
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    async function fetchGPUInfo() {
      try {
        setLoading(true);
        const data = await handler();
        setGPUInfo(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGPUInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty dependency array = run once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading user info</p>;

  return (
    <BaseCard title="GPU">
      <dl>
        <dd>GPU</dd>
        <dt>{gpuInfo?.name}</dt>
      </dl>
    </BaseCard>
  );
}
