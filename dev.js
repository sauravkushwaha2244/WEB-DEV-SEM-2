const { exec } = require("child_process");

function start(command, cwd, label) {
  const child = exec(command, { cwd, windowsHide: true });

  child.stdout.on("data", (data) => {
    process.stdout.write(`[${label}] ${data}`);
  });

  child.stderr.on("data", (data) => {
    process.stderr.write(`[${label}] ${data}`);
  });

  return child;
}

const root = process.cwd();
const backend = start("npm run dev", `${root}\\backend`, "backend");
const frontend = start("npm run dev", `${root}\\ai-submission-sysytem`, "frontend");

function shutdown() {
  backend.kill();
  frontend.kill();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);