export async function userInfoHandler() {
  return { user: "USER", group: "CLIMB" };
}

export async function resourcesHandler() {
  return { cpus: "2", cpu_now: "5", cpu_max: "100" , memory_now: "1", memory_max : "100" };
}

export async function volumesHandler() {

  return [{label: "~", data: {used: "1", total: "10"}},
    {label: "shared", data: {used: "25", total: "50"}},
    {label: "Other", data: {used: 1, total: 10}}]
}
