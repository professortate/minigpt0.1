# Nepal Chatbot

A Node.js-based chatbot that provides information about Nepal.

## Features

- Comprehensive knowledge base about Nepal
- Modular architecture with separate concerns
- Easy to extend with new categories
- Built-in test suite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the chatbot:
   ```bash
   npm start
   ```

## Development

- Run in development mode with auto-reload:
  ```bash
  npm run dev
  ```
- Run tests:
  ```bash
  npm test
  ```

## Project Structure

```
src/
├── chatbot/           # Chatbot core functionality
├── data/             # Knowledge base data
│   └── categories/   # Separate category files
├── utils/            # Utility functions
└── index.js          # Application entry point
```

## Adding New Knowledge

1. Create a new category file in `src/data/categories/`
2. Export the category data
3. Import and add to `nepal-knowledge.js`
4. Add relevant query patterns in `query-patterns.js`"# minigpt0.1" 
