import Docker from "dockerode";

async function createContainer(imageName: string, cmdExecutable: string[]) {
  const docker = new Docker();

  const container = await docker.createContainer({
    Image: imageName,
    Cmd: cmdExecutable,
    AttachStdin: true, // to enable input Stream
    AttachStdout: true, // to enable output Stream
    AttachStderr: true, // To enable error Stream
    Tty: false,

    HostConfig: {
      Memory: 1024 * 1024 * 1024, // 2GB
    },

    OpenStdin: true, // Keep the  Input Stream Open even no Interaction is There
  });

  return container;
}

export default createContainer;
