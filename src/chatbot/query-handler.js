import { nepalKnowledge } from '../data/nepal-knowledge.js';
import { createResponseSentence } from '../utils/response-formatter.js';

// Create a comprehensive query map for all knowledge categories
const queryMap = new Map([
  // Basic Info
  ['capital', { topic: 'The capital', key: 'capital' }],
  ['population', { topic: 'The population', key: 'population' }],
  ['currency', { topic: 'The currency', key: 'currency' }],
  ['language', { topic: 'The official language', key: 'official language' }],
  ['religion', { topic: 'The major religion', key: 'major religion' }],
  ['government', { topic: 'The government type', key: 'government type' }],
  
  // Geography
  ['mountain', { topic: 'The highest mountain', key: 'highest mountain' }],
  ['river', { topic: 'The longest river', key: 'longest river' }],
  ['lake', { topic: 'The largest lake', key: 'largest lake' }],
  
  // Culture
  ['national animal', { topic: 'The national animal', key: 'national animal' }],
  ['national bird', { topic: 'The national bird', key: 'national bird' }],
  ['national flower', { topic: 'The national flower', key: 'national flower' }],
  ['festival', { topic: 'The festivals', key: 'festivals' }],
  
  // Tourism
  ['famous', { topic: 'What Nepal is famous for', key: 'famous for' }],
  ['trek', { topic: 'Popular treks', key: 'popular treks' }],
  ['tourist', { topic: 'Major tourist destinations', key: 'major tourist destinations' }],
  
  // Add more mappings for all categories
]);

/**
 * Handles user queries and returns appropriate responses
 * @param {string} query - The user's query
 * @returns {string} The response to the query
 */
export function handleQuery(query) {
  const normalizedQuery = query.toLowerCase();
  
  for (const [keyword, { topic, key }] of queryMap) {
    if (normalizedQuery.includes(keyword)) {
      const data = nepalKnowledge[key];
      return createResponseSentence(topic, data);
    }
  }
  
  return "I'm not sure I understand. Please ask me a question about Nepal.";
}