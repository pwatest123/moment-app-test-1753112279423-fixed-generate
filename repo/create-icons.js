// Simple script to create placeholder icons
const fs = require('fs');
const path = require('path');

// Create icons directory
const iconsDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Create a simple 1x1 pixel transparent PNG as base64
const transparentPixel = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

// Write icon files
fs.writeFileSync(path.join(iconsDir, 'icon-192x192.png'), Buffer.from(transparentPixel, 'base64'));
fs.writeFileSync(path.join(iconsDir, 'icon-512x512.png'), Buffer.from(transparentPixel, 'base64'));

console.log('Icons created successfully!');
