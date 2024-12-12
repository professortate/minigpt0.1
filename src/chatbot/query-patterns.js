export const queryPatterns = new Map([
  // Environment
  ['climate', { topic: 'The climate', key: 'climate' }],
  ['wildlife', { topic: 'The wildlife', key: 'wildlife' }],
  ['plants', { topic: 'The types of plants', key: 'types of plants' }],
  ['national parks', { topic: 'The national parks', key: 'national parks' }],
  
  // Economy
  ['gdp', { topic: 'The GDP per capita', key: 'gdp per capita' }],
  ['exports', { topic: 'The main exports', key: 'main exports' }],
  ['imports', { topic: 'The main imports', key: 'main imports' }],
  ['industries', { topic: 'The major industries', key: 'major industries' }],
  
  // Education
  ['schools', { topic: 'The types of schools', key: 'types of schools' }],
  ['universities', { topic: 'The universities', key: 'universities' }],
  ['education system', { topic: 'The education system', key: 'education system' }],
  
  // Healthcare
  ['healthcare', { topic: 'The healthcare system', key: 'healthcare system' }],
  ['diseases', { topic: 'Common diseases', key: 'common diseases' }],
  ['medicine', { topic: 'Traditional medicine', key: 'traditional medicine' }],
  
  // Food
  ['food', { topic: 'Traditional dishes', key: 'traditional dishes' }],
  ['spices', { topic: 'Spices used', key: 'spices used' }],
  ['beverages', { topic: 'Traditional beverages', key: 'beverages' }],
  
  // Technology
  ['internet', { topic: 'Internet penetration', key: 'internet penetration' }],
  ['digital', { topic: 'Digital services', key: 'digital services' }],
  ['tech', { topic: 'Technology challenges', key: 'tech challenges' }]
]);