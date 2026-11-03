#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('Running static game build...');
const dist = path.join(__dirname, 'dist');
if (!fs.existsSync(dist)) fs.mkdirSync(dist, { recursive: true });

const items = [
  'assets',
  'faces',
  'models',
  'index.html',
  'favicon.svg',
  'favicon-32.png',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'manifest.webmanifest'
];

for (const item of items) {
  const src = path.join(__dirname, item);
  const dest = path.join(dist, item);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true });
  }
}

console.log('Build succeeded! All game assets ready.');
process.exit(0);
