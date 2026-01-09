function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export async function userInfoHandler() {
  return { user: "USER", group: "CLIMB" };
}

export async function resourcesHandler() {
  return {
    cpus: 2,
    cpu_now: getRandomInt(100),
    cpu_max: 100,
    memory_now: getRandomInt(100),
    memory_max: 100,
  };
}

export async function volumesHandler() {
  return [
    { label: "~", data: { used: 1, total: 10 } },
    { label: "shared", data: { used: 25, total: 50 } },
    { label: "Other", data: { used: 1, total: 10 } },
  ];
}

export async function gpuHandler() {
  return { name: "GPU Name", available: true };
}
