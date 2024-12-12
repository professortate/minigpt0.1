/**
 * Formats the response based on the type of data
 * @param {string|string[]} data - The data to format
 * @returns {string} Formatted response
 */
export function formatResponse(data) {
  if (Array.isArray(data)) {
    return data.join(", ");
  }
  return String(data);
}

/**
 * Creates a complete response sentence
 * @param {string} topic - The topic being asked about
 * @param {string|string[]} data - The response data
 * @returns {string} Formatted complete sentence
 */
export function createResponseSentence(topic, data) {
  const formattedData = formatResponse(data);
  return `${topic} in Nepal ${Array.isArray(data) ? "include" : "is"} ${formattedData}.`;
}