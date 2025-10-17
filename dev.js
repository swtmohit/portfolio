const { spawn } = require('child_process');
const os = require('os');

const interfaces = os.networkInterfaces();
let ip = 'localhost';

for (const name of Object.keys(interfaces)) {
  for (const iface of interfaces[name]) {
    if (iface.family === 'IPv4' && !iface.internal) {
      ip = iface.address;
      break;
    }
  }
  if (ip !== 'localhost') break;
}

const { exec } = require('child_process');
const child = exec('npx next dev -p 5500 --hostname 0.0.0.0', { stdio: ['inherit', 'pipe', 'inherit'] });

child.stdout.on('data', (data) => {
  let output = data.toString();
  output = output.replace(/http:\/\/0\.0\.0\.0:5500/g, `http://${ip}:5500`);
  process.stdout.write(output);
});