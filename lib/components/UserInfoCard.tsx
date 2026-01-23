/**
 * Display information about user (username and group).
 **/

import { BaseCard } from "./Card";
import { useState, useEffect } from "react";

export interface UserInfo {
  user: string;
  group: string;
}

interface UserInfoCardProp {
  handler: () => Promise<UserInfo>;
}

export function UserInfoCard({ handler }: UserInfoCardProp) {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null); // initially empty

  // You could also have loading/error states if you like
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const data = await handler();
        setUserInfo(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty dependency array = run once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading user info</p>;

  return (
    <BaseCard title="User Information">
      <dl>
        <dt>User</dt>
        <dd>{userInfo?.user}</dd>
        <dt>Group</dt>
        <dd>{userInfo?.group}</dd>
      </dl>
    </BaseCard>
  );
}
