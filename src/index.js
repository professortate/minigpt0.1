import { createInterface } from 'readline';
import { handleQuery } from './chatbot/query-handler.js';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

function startChatbot() {
  console.log("Welcome to miniGPT: Ask about Nepal! Type 'exit' to quit.");
  
  function askQuestion() {
    readline.question("You: ", (input) => {
      if (input.toLowerCase() === 'exit') {
        console.log("Goodbye!");
        readline.close();
        return;
      }
      
      const response = handleQuery(input);
      console.log("Chatbot:", response);
      askQuestion();
    });
  }
  
  askQuestion();
}

startChatbot();
