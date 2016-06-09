const SVG_WHITE_LIST = [

  // document structure
  'svg',
  'g',
  'defs',
  'desc',
  'title',
  'symbol',
  'use',
  'image',
  'switch',

  // paths
  'path',

  // basic shapes
  'rect',
  'circle',
  'ellipse',
  'line',
  'polyline',
  'polygon',

  // text
  'text',
  'tspan',
  'tref',
  'textPath',
  'altGlyph',
  'glyphRef',
  'altGlyphItem',
  'altGlyphDef',
];

let HASH_MAP = Object.create(null);

SVG_WHITE_LIST.forEach(tagName => {
  HASH_MAP[tagName] = tagName;
});

export function isSVG(tagName) {
  return HASH_MAP[tagName];
}
