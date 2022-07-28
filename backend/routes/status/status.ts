import axios from "axios";
import { ContainerStatus } from "../../types/status";

export const getDockerContainerStatus = async (): Promise<
  ContainerStatus[]
> => {
  try {
    const res = await axios.request({
      url: "http://localhost/v1.41/containers/json",
      socketPath: "/var/run/docker.sock",
    });

    return res.data.map((container: any) => ({
      names: container.Names,
      status: container.Status,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};
