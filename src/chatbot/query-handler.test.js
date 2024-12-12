import { test } from 'node:test';
import assert from 'node:assert';
import { handleQuery } from './query-handler.js';

test('handleQuery returns correct response for capital query', (t) => {
  const response = handleQuery('What is the capital of Nepal?');
  assert.match(response, /Kathmandu/);
});

test('handleQuery returns default message for unknown query', (t) => {
  const response = handleQuery('What is the meaning of life?');
  assert.strictEqual(response, "I'm not sure I understand. Please ask me a question about Nepal.");
});