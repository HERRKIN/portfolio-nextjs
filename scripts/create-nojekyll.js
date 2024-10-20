const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

if (!fs.existsSync(outDir)) {
  console.error('The "out" directory does not exist. Make sure you have run "next build" and "next export".');
  process.exit(1);
}

fs.writeFileSync(nojekyllPath, '');
console.log('Created .nojekyll file in the "out" directory.');
