const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
require('babel-polyfill');

const { PROJECT_ROOT } = require('../../lib/paths');

const testEnvFile = path.resolve(PROJECT_ROOT, '.env.development');

if (fs.existsSync(testEnvFile)) {
  dotenv.config({ path: testEnvFile });
} else {
  console.log(`No .env.development file found at ${testEnvFile}. No env vars will be loaded.`);
}