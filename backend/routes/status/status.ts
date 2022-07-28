import { spawn } from "child_process";

export const getDockerContainerStatus = async () => {
  const statusProcess = spawn("docker", ["ps"]);

  let data = {
    stdout: "",
    stderror: "",
    exitCode: 0,
  };

  for await (const chunk of statusProcess.stdout) {
    data.stdout += chunk;
  }

  for await (const chunk of statusProcess.stderr) {
    data.stderror += chunk;
  }

  data.exitCode = await new Promise((resolve) => {
    statusProcess.on("close", resolve);
  });

  return data;
};
