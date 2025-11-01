#!/bin/bash
# Generate placeholder SVG images that Next.js can serve

# Hero image
cat > hero.svg << 'SVG'
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f7e9f2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#grad1)" width="1920" height="1080"/>
  <text x="960" y="540" font-family="Arial" font-size="48" fill="#b08d57" text-anchor="middle">The Maryam Hero</text>
</svg>
SVG

# Collections
for name in festive corporate wedding gourmet; do
  cat > "collection-${name}.svg" << SVG
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <rect fill="#f7e9f2" width="800" height="800"/>
  <text x="400" y="400" font-family="Arial" font-size="32" fill="#b08d57" text-anchor="middle">${name^} Collection</text>
</svg>
SVG
done

# OG image
cat > og.svg << 'SVG'
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect fill="#111111" width="1200" height="630"/>
  <text x="600" y="315" font-family="Arial" font-size="48" fill="#f7e9f2" text-anchor="middle">The Maryam</text>
</svg>
SVG

# Instagram placeholders
for i in {1..9}; do
  cat > "instagram-${i}.svg" << SVG
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
  <rect fill="#f7e9f2" width="600" height="600"/>
  <rect x="10" y="10" width="580" height="580" fill="none" stroke="#b08d57" stroke-width="8"/>
  <text x="300" y="320" font-family="Arial" font-size="48" fill="#b08d57" text-anchor="middle">IG ${i}</text>
</svg>
SVG
done
