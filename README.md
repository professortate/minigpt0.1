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

How this works:

nepal_knowledge Dictionary: This dictionary stores all the information our chatbot will use.

nepal_chatbot(user_input) Function:

Takes user input as an argument.

Converts the input to lowercase for easier matching.

Uses a series of if/elif/else statements to check if any keywords are present in the user input.

Based on the keywords, it returns the corresponding information from the nepal_knowledge dictionary.

If no keywords match, it returns a default message.

Main Loop:

Takes user input from the console.

Calls the nepal_chatbot function to get a response.

Prints the chatbot's response.

How to Run:

Save the code as a Python file (e.g., nepal_chatbot.py).

Run it from your terminal: python nepal_chatbot.py

Now you can type questions about Nepal and get responses!

Example Conversation:

You: What is the capital of Nepal?
Chatbot: The capital of Nepal is Kathmandu.

You: What is the population?
Chatbot: The population of Nepal is approximately 30 million.

You: Tell me about the national bird.
Chatbot: The national bird of Nepal is the Himalayan Monal

You: What are some things to do there?
Chatbot: Some things you can do in Nepal include Hiking, visiting temples, exploring cultural heritage, rafting.
You: Hello
Chatbot: Hello! How can I help you with Nepal?

You: Thanks
Chatbot: You're welcome!

You: tell me about the national animal
Chatbot: The national animal of Nepal is the Cow
You: What is your favorite color?
Chatbot: I'm not sure I understand. Please ask me a question about Nepal.

You: exit
Use code with caution.
Improvements (Future):

More sophisticated keyword matching: Use techniques like stemming, lemmatization, or regular expressions for more robust matching.

Context handling: Keep track of previous conversation to understand context and answer follow-up questions.

Larger knowledge base: Increase the amount of information in the nepal_knowledge dictionary.

Natural Language Processing (NLP): Use NLP libraries like NLTK or spaCy for more advanced understanding of language.

Use a vector database: Use a vector database like Pinecone to store embeddings of the text from the knowledge base and retrieve the most relevant information based on the user's query.

This mini-GPT gives you a basic idea of how chatbots can be made using simple rules and a knowledge base. You can expand upon it to make it much more capable!






:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

miniGPT Knowledge Base - Questions and Answers:

Question: What is the capital of Nepal?
Answer: Kathmandu

Question: What is the population of Nepal?
Answer: Approximately 30 million

Question: What is the currency of Nepal?
Answer: Nepalese Rupee (NPR)

Question: What is the official language of Nepal?
Answer: Nepali

Question: What is the major religion in Nepal?
Answer: Hinduism (with significant Buddhist influence)

Question: What is the highest mountain in Nepal?
Answer: Mount Everest

Question: What is the national animal of Nepal?
Answer: Cow

Question: What is the national bird of Nepal?
Answer: Himalayan Monal

Question: What is Nepal famous for?
Answer: mountains, trekking, temples, cultural diversity

Question: What are some major cities in Nepal?
Answer: Kathmandu, Pokhara, Lalitpur, Bharatpur

Question: What countries border Nepal?
Answer: China, India

Question: What is the government type in Nepal?
Answer: Federal Parliamentary Republic

Question: What is the weather like in Nepal?
Answer: Varies based on altitude, from subtropical to alpine

Question: What are some things to do in Nepal?
Answer: Hiking, visiting temples, exploring cultural heritage, rafting

Question: What is some popular food in Nepal?
Answer: Dal Bhat, Momo, Thukpa

Question: What are some popular festivals in Nepal?
Answer: Dashain, Tihar, Holi

Question: What is the national flower of Nepal?
Answer: Rhododendron

Question: What is the national sport of Nepal?
Answer: Volleyball

Question: What is the longest river in Nepal?
Answer: Karnali River

Question: What is the largest lake in Nepal?
Answer: Phewa Lake

Question: What are some UNESCO World Heritage Sites in Nepal?
Answer: Sagarmatha National Park, Kathmandu Valley, Lumbini, Chitwan National Park

Question: What are some major ethnic groups in Nepal?
Answer: Chhetri, Brahmin, Magar, Tharu, Tamang, Newar

Question: What are some major airports in Nepal?
Answer: Tribhuvan International Airport (Kathmandu)

Question: What is a typical house like in Nepal?
Answer: Brick or stone, often with sloping roofs

Question: What is some traditional clothing in Nepal?
Answer: Daura-Suruwal (men), Choli and Saree or Kurta-Salwar (women)

Question: What are some major industries in Nepal?
Answer: Tourism, Agriculture, Handicrafts, Hydropower

Question: What are some historical kingdoms in Nepal?
Answer: Malla Kingdom, Shah Dynasty

Question: What is some traditional music in Nepal?
Answer: Nepali folk music, Newari music

Question: What are some common greetings in Nepal?
Answer: Namaste, Namaskar

Question: What are some major exports of Nepal?
Answer: Carpets, Textiles, Handicrafts, Leather Goods

Question: What are some major imports of Nepal?
Answer: Petroleum Products, Machinery, Electronics, Food

Question: What is the electricity voltage in Nepal?
Answer: 230V, 50Hz

Question: Which side of the road do they drive on in Nepal?
Answer: Left

Question: What is the time zone in Nepal?
Answer: Nepal Time (UTC+5:45)

Question: What is the phone code for Nepal?
Answer: +977

Question: When is Nepal's independence day?
Answer: September 20

Question: When was Nepal founded?
Answer: December 21, 1768

Question: What are some mountains other than Mount Everest in Nepal?
Answer: Annapurna, Manaslu, Dhaulagiri, Kangchenjunga

Question: What are some popular treks in Nepal?
Answer: Annapurna Base Camp Trek, Everest Base Camp Trek, Langtang Trek, Ghorepani Poon Hill Trek

Question: What are some national parks in Nepal?
Answer: Sagarmatha National Park, Chitwan National Park, Langtang National Park, Bardiya National Park, Rara National Park

Question: What kind of wildlife can be found in Nepal?
Answer: Bengal tiger, One-horned rhinoceros, Snow leopard, Red panda

Question: What are some important rivers in Nepal?
Answer: Karnali River, Koshi River, Gandaki River

Question: What are some major mountain passes in Nepal?
Answer: Thorong La Pass, Laurebina Pass, Cho La Pass

Question: What are some religious places in Nepal?
Answer: Pashupatinath Temple, Boudhanath Stupa, Swoyambhunath Stupa, Lumbini, Muktinath Temple

Question: What are some historical places in Nepal?
Answer: Kathmandu Durbar Square, Patan Durbar Square, Bhaktapur Durbar Square, Nuwakot Durbar

Question: What types of tourism exist in Nepal?
Answer: Adventure Tourism, Cultural Tourism, Religious Tourism, Eco-tourism

Question: What is the percentage of forest cover in Nepal?
Answer: around 40%

Question: What is the climate like in Nepal?
Answer: Monsoon, Summer, Winter, Autumn, Spring

Question: What are some natural disasters that occur in Nepal?
Answer: Earthquakes, Floods, Landslides

Question: What are some major crops grown in Nepal?
Answer: Rice, Maize, Wheat, Millet, Potato

Question: What is the type of soil in Nepal?
Answer: Alluvial, Mountainous, Loamy

Question: What is the healthcare system like in Nepal?
Answer: Mostly private and limited public

Question: What is the education system like in Nepal?
Answer: Primary, Secondary, Higher

Question: What is the literacy rate in Nepal?
Answer: Around 70%

Question: What are some political parties in Nepal?
Answer: Nepali Congress, CPN (UML), CPN (Maoist Centre)

Question: How is the local government structured in Nepal?
Answer: Municipalities, Rural Municipalities, Districts

Question: What is the internet access like in Nepal?
Answer: Growing, but limited in rural areas

Question: What are some media outlets in Nepal?
Answer: Radio Nepal, Nepal Television, Various Newspapers

Question: What is a typical breakfast in Nepal?
Answer: Sel Roti, Tea, Chapatis

Question: What types of art exist in Nepal?
Answer: Thangka painting, Wood Carving, Paubha painting

Question: Who are some famous people from Nepal?
Answer: Gautama Buddha, Bhanubhakta Acharya, Prithvi Narayan Shah

Question: What are some common spices used in Nepal?
Answer: Turmeric, Cumin, Coriander, Chili

Question: What types of dance are popular in Nepal?
Answer: Lakhey Dance, Deusi Bhailo, Maruni Dance

Question: What are the types of local transportation in Nepal?
Answer: Buses, Taxis, Tempos, Motorcycles

Question: What are some popular shopping items in Nepal?
Answer: Pashmina shawls, Thangka paintings, Khukuri knives, Handicrafts

Question: When is the best time to visit Nepal?
Answer: October-November or March-April

Question: What are the main sources of water in Nepal?
Answer: Rivers, Streams, Groundwater

Question: What are some common problems in Nepal?
Answer: Poverty, Corruption, Political instability, Natural disasters

Question: How do people celebrate the new year in Nepal?
Answer: Bisket Jatra

Question: What are some national holidays in Nepal?
Answer: Republic Day, Constitution Day, Martyrs' Day

Question: What are some famous sweets in Nepal?
Answer: Lal Mohan, Jeri, Barfi

Question: What are some common games played in Nepal?
Answer: Badminton, Cricket, Football, Kabaddi

Question: What are some local markets in Nepal?
Answer: Asan Market, Indrachowk Market

Question: What are some handicrafts produced in Nepal?
Answer: Hand-woven carpets, wooden masks, pottery

Question: What types of agriculture are practiced in Nepal?
Answer: Terrace farming and traditional farming

Question: What are the major challenges faced by Nepal?
Answer: Political and economic instability

Question: What is the role of women in Nepal?
Answer: Increasingly prominent in various fields

Question: What are some major lakes in Nepal?
Answer: Phewa lake, Rara lake, Tilicho lake

Question: What is the relationship between Nepal and India?
Answer: Strong economic and cultural ties

Question: What is the relationship between Nepal and China?
Answer: Growing economic and political ties

Question: What international organizations is Nepal a member of?
Answer: Member of United Nations

Question: What are the major health issues in Nepal?
Answer: Malnutrition, infectious disease

Question: What are the social problems in Nepal?
Answer: Caste discrimination

Question: What are some environmental issues in Nepal?
Answer: Deforestation, Pollution

Question: What is a popular music genre in Nepal?
Answer: Nepali Pop, Folk music

Question: What is the most common job in Nepal?
Answer: Agriculture

Question: What is the literacy rate of males in Nepal?
Answer: Around 80%

Question: What is the literacy rate of females in Nepal?
Answer: Around 60%

Question: What is the percentage of youth population in Nepal?
Answer: Around 40%

Question: What type of clothes do people wear in summer in Nepal?
Answer: Light cotton clothes

Question: What type of clothes do people wear in winter in Nepal?
Answer: Woolen and warm clothes

Question: How many districts are there in Nepal?
Answer: 77

Question: What is the name of the parliament in Nepal?
Answer: Federal Parliament of Nepal

Question: Who is the president of Nepal?
Answer: Ram Chandra Paudel

Question: Who is the prime minister of Nepal?
Answer: Pushpa Kamal Dahal

Question: What is the main source of income for Nepal?
Answer: Agriculture, Tourism, Remittances

Question: What are some major tourist destinations in Nepal?
Answer: Kathmandu, Pokhara, Lumbini, Chitwan, Sagarmatha

Question: What type of roads are common in Nepal?
Answer: Mostly narrow and winding

Question: What is the average life expectancy in Nepal?
Answer: Around 70 years

Question: What type of schools are there in Nepal?
Answer: Public Schools, Private Schools, Monasteries

Question: What are some different castes in Nepal?
Answer: Brahmin, Chhetri, Dalit, Tharu, Gurung

Question: What are major sources of water pollution in Nepal?
Answer: Industrial Waste, Agricultural Runoff

Question: How do people in Nepal get their drinking water?
Answer: From Rivers, wells, and taps

Question: What types of food do people eat during festivals?
Answer: Sel Roti, Sweets, Farsan

Question: How do people celebrate Holi?
Answer: With colors

Question: How do people celebrate Dashain?
Answer: By flying kites, swing

Question: How do people celebrate Tihar?
Answer: By lighting up house with diyo

Question: Why do people visit temples?
Answer: To worship god

Question: What are the types of medical centers in Nepal?
Answer: Hospital, Health post, Pharmacies

Question: What type of houses do people live in rural areas of Nepal?
Answer: Mud and stone houses

Question: What is the most common farming method in Nepal?
Answer: Terrace farming

Question: What kind of electricity do people use in Nepal?
Answer: Hydro electricity and solar power

Question: How many national parks are there in Nepal?
Answer: 12

Question: What type of plants grow in Nepal?
Answer: Rhododendron, Pine, Oak, Sal

Question: What types of animals can be found in Nepal?
Answer: Bengal tiger, One-horned rhinoceros, Snow leopard, Red panda, Gaur

Question: How do people travel in rural areas of Nepal?
Answer: By foot, local buses, and motorcycles

Question: How do people communicate in Nepal?
Answer: Nepali language, Ethnic languages

Question: What are the main challenges for education in Nepal?
Answer: Access, Quality, Resources

Question: What are the main challenges for health in Nepal?
Answer: Access, Affordability, Quality

Question: What main problems are faced by farmers in Nepal?
Answer: Lack of irrigation, market access

Question: What are the main challenges in transport in Nepal?
Answer: Poor infrastructure, lack of maintenance

Question: What are the main challenges of tourism in Nepal?
Answer: Seasonal, Infrastructure, Sustainability

Question: What are the major causes of deforestation in Nepal?
Answer: Illegal logging, agricultural expansion

Question: What are the main causes of pollution in Nepal?
Answer: Vehicular emission, Industrial waste, Littering

Question: What is the traditional marriage system in Nepal?
Answer: Arranged marriage, Love marriage

Question: What are the types of music instruments in Nepal?
Answer: Madal, Sarangi, Flute

Question: What are the types of poetry in Nepal?
Answer: Folk poetry, Modern poetry

Question: What are the common problems of youths in Nepal?
Answer: Unemployment, Drug Abuse

Question: What are the major exports of Nepal?
Answer: Carpets, Textiles, Garments

Question: What is the main tourist season in Nepal?
Answer: Autumn and spring

Question: What type of mountain is in Nepal?
Answer: Himalayan Mountains

Question: What are the major industries in Nepal?
Answer: Tourism, Agriculture, Hydropower
