export default function () {
  return {
    autoDetect: true,
    env: {
      params: {
        runner: "--experimental-vm-modules",
      },
    },
    testFramework: {
      // the path to locate jest
      // (relative to project root)
      path: "/home/vaduga/.nvm/versions/node/v16.13.1/lib",
    },
  };
}