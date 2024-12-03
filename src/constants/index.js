import {
  codealpha,
  codsoft,
  djezzy,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  c,
  django,
  java,
  linux,
  powerbi,
  r,
  python,
  tf,
  next,
  estin,
  uca,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c10,
  c11,
  c12,
  c13,
  c15,
  c16,
  c17,
  c18,
  cg1 ,
  cg2 ,
  cg3 ,
  fai1,
  fai2,
  fc ,
  fyb1,
  fyb2,
  si1 ,
  si2 ,
  sp ,
  ta1 ,
  ta2 ,
  ttt1,
  ttt2,
  com

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "studies",
    title: "Studies",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Artificial Intelligence enthusiast",
    icon: web,
  },
  {
    title: "Data science beginner",
    icon: mobile,
  },
  {
    title: "Web developer ",
    icon: backend,
  },
  {
    title: "Computer science student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python, 
  },
  {
    name: "TensorFlow",
    icon: tf, 
  },
  {
    name: "C",
    icon: c, 
  },
  {
    name: "Django",
    icon: django, 
  },
  {
    name: "Java",
    icon: java, 
  },
  {
    name: "Linux",
    icon: linux, 
  },
  {
    name: "PowerBI",
    icon: powerbi, 
  },
  {
    name: "R",
    icon: r, 
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    id:"1",
    title: "Data Science Intern",
    company_name: "CodeAlpha",
    icon: codealpha,
    iconBg: "#383E56",
    date: "August 2024",
    skills : ["Python", "TensorFlow", "Numpy", "Pandas", "Scikit-learn", "Seaborn", "Matplotlib", "Data manipulation", "Time-series analysis", "Predictive analysis", "LSTM neural networks", "Data visualization", "Deep learning methods"],
    points: [
      "Designing and implementing advanced classification and text generation models.",
      "Improving the credit card fraud detection system, which enhanced transaction security.",
      "Implement a system for detecting dangerous emails, reducing the risks associated with cyber threats.",
      "Developed a text generation tool that streamlined several operational tasks, improving overall efficiency.",
    ],
    parts_description: [
      {
          title: "Build a machine learning model to predict survival on the Titanic dataset", 
          desc: "I built a machine learning model to predict survival on the Titanic dataset. I started by loading and exploring the data. I imputed missing values in the 'Age' and 'Embarked' columns using median and mode, respectively, and dropped the 'Cabin' column due to excessive missing data. I encoded categorical variables, such as 'Sex' and 'Embarked,' into numerical values, and removed less meaningful features like 'Name,' 'Ticket,' and 'PassengerId.' I standardized continuous variables like 'Age' and 'Fare' for improved model performance. I split the dataset into training and test sets, trained several classifiers (Random Forest, Decision Tree, K-Nearest Neighbors, Naive Bayes, and Support Vector Machine), and evaluated their performance using accuracy, precision, recall, and F1 score. The Support Vector Machine (SVM) model performed the best, achieving the highest accuracy (81.56%) and precision (80.60%)."
      },
      {
          title: "Netflix Stock Price Prediction Using LSTM Neural Network", 
          desc: "I worked on predicting Netflix's stock prices using an LSTM (Long Short-Term Memory) model. I began by loading and exploring the dataset, which contained stock data including open, high, low, close, adjusted close prices, and volume over time. I visualized the data through line and bar plots to explore price trends and trading volumes. I converted the date column to an ordinal format for model processing and normalized the data using MinMaxScaler. I transformed the dataset into sequences for supervised learning, using features to predict future closing prices. I split the data into training and testing sets and trained an LSTM model with two layers and dropout on the training set for 20 epochs. I compared the model's predictions against actual prices and plotted the results to evaluate the stock price prediction model's performance."
      },
      {
          title: "House prices prediction", 
          desc: "I used a Linear Regression model to predict house prices based on features such as the number of bedrooms, bathrooms, square footage, and other factors. I trained the model using 80% of the data and tested it with the remaining 20%. I evaluated the model's performance using Mean Squared Error (MSE) and R² score, which revealed suboptimal results with an MSE of approximately 988 billion and an R² score of only 0.03. I created a scatter plot comparing real vs. predicted prices, which showed a poor fit, highlighting the need for further model improvement or exploration of alternative techniques for better price prediction."
      }
  ],  
    thoghts : "This internship has had a significant impact on me, both personally and professionally. It provided me with the opportunity to apply theoretical knowledge in a real-world setting, bridging the gap between classroom learning and practical application. The hands-on experience in data analysis, particularly working with machine learning models and real datasets, has enhanced my technical skills and boosted my confidence in using tools like Python, Pandas, and machine learning algorithms. More importantly, the challenges I faced—such as dealing with incomplete or noisy data—taught me resilience and problem-solving skills. I have gained a deeper understanding of the complexities involved in predictive modeling and the importance of continuous learning and adapting. This experience has solidified my passion for data science and has motivated me to further pursue a career in this field, equipped with new insights and skills that will guide my future work." 
  },
  {
    id:"2",
    title: "Machine learning Intern",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#383E56",
    date: "July 2024",
    skills : ["Python", "TensorFlow", "Numpy", "Pandas", "Scikit-learn", "Seaborn", "Matplotlib", "Data manipulation", "Time-series analysis", "Predictive analysis", "LSTM neural networks", "Data visualization", "Deep learning methods"],
    points: [
      "Implemented prediction systems using LSTM neural networks for time-series data.",
      "Enhanced predictive analyses for stock and housing price forecasts.",
      "Manipulated data and visualized results using Python, TensorFlow, numpy, pandas, sklearn, seaborn, and matplotlib.",
      "Improved the accuracy of predictive systems.",
    ],
    
    parts_description: [
      {
          title: "Model Comparison for Genre Classification Using Logistic Regression and Naive Bayes", 
          desc: "I focused on genre classification using text descriptions of movies in this project. I processed and cleaned the data by removing numbers, punctuation, stopwords, and applying lemmatization. I performed feature extraction using the TF-IDF method to convert text into numerical form. I trained and evaluated two classifiers, Logistic Regression and Naive Bayes, on the dataset. Logistic Regression achieved an accuracy of approximately 58.5%, while Naive Bayes performed slightly worse with an accuracy of 44.3%. I visualized the precision scores for each class to further assess the models' performances. Logistic Regression showed better performance, demonstrating its superior ability for genre classification in this case."
      },
      {
          title: "Fraud Detection in Financial Transactions Using Machine Learning Models", 
          desc: "I worked on detecting fraudulent transactions in financial datasets by training and evaluating different machine learning models. The dataset included transaction details such as merchant, amount, category, and user information, with a target variable indicating whether the transaction was fraudulent or not. I performed various preprocessing steps, including feature encoding and dropping irrelevant columns. I split the data into training and testing sets and trained multiple classification models, including Logistic Regression, K-Nearest Neighbors (KNN), and Random Forest. I evaluated the models based on their accuracy and classification report to accurately identify fraud in financial transactions."
      },
      {
          title: "Bank Customer Churn Prediction Using Machine Learning Models", 
          desc: "I analyzed and predicted customer churn for a bank using machine learning techniques. The dataset included various customer attributes such as credit score, geography, gender, age, tenure, and account balance. After cleaning and exploring the data, I identified key features like 'Age,' 'IsActiveMember,' 'Balance,' and 'Gender' that had strong correlations with customer churn. I preprocessed the data by encoding categorical features and dropping irrelevant ones. I trained several machine learning models, including Decision Trees, Random Forest, and XGBoost, and evaluated their performances using accuracy, precision, and F1 score. XGBoost showed the best performance, achieving an accuracy of 86.25%. I also visualized key data distributions and model comparisons through graphs to enhance insights into customer churn behavior."
      },
      {
          title: "Spam Detection in SMS Messages Using Machine Learning", 
          desc: "I focused on detecting spam SMS messages using machine learning techniques. I preprocessed the data by cleaning the SMS text, removing punctuation, stopwords, and numbers, and calculating the length and word count of each message. I transformed the cleaned text data into numerical features using the TF-IDF (Term Frequency-Inverse Document Frequency) method. I trained and evaluated several machine learning models, including Naive Bayes, Support Vector Machine, Logistic Regression, Random Forest, and XGBoost, on the dataset. I assessed the models using accuracy, precision, and F1-score metrics and compared their performance to identify the best-performing model for classifying SMS messages as either spam or non-spam."
      },
      {
          title: "Character-Level Text Generation Using LSTM-based Recurrent Neural Networks on Handwritten Word Data", 
          desc: "I performed character-level text generation using a Recurrent Neural Network (RNN) with LSTM (Long Short-Term Memory) units on a dataset of words from the IAM Handwriting Word Database. I started by preprocessing the data, reading the words from the dataset, cleaning and splitting them into a structured format with columns for word ID, segmentation status, gray level, bounding box dimensions, grammatical tags, and transcriptions. I transformed the transcription data into a series of characters and mapped them to integer indices to create sequences for training the model. I built a neural network model with an embedding layer, two LSTM layers, and a dense output layer to predict the next character in the sequence. I trained the model over 10 epochs, reducing the loss as it learned to predict the next character in the text sequences. After training, I used the model to generate new text sequences by providing a starting string, allowing it to predict subsequent characters one at a time, producing coherent text passages based on the patterns it learned. The generated text demonstrated the model's ability to follow the structural patterns of the training data, with progressively decreasing training loss indicating improved accuracy."
      }
  ],  
    thoghts : "During my machine learning internship, I had the opportunity to work on diverse projects that strengthened my skills in data preprocessing, model selection, and evaluation. I worked on genre classification using Logistic Regression and Naive Bayes, fraud detection in financial transactions with models like KNN and Random Forest, and customer churn prediction using Decision Trees and XGBoost, learning how to handle real-world datasets and select relevant features. Additionally, I explored spam detection in SMS messages using various models, as well as character-level text generation with LSTM-based RNNs, deepening my understanding of text-based classification and sequence prediction. These experiences enhanced my problem-solving abilities and provided valuable insights into the practical application of machine learning across different domains."
  },
/*
  {
    id: "3",
    title: "AI, Data science & Advanced Analytics Intern",
    company_name: "Djezzy",
    skills :["Python", "Pandas", "NumPy", "Scikit-learn", "Keras with TensorFlow", "Matplotlib", "ARIMA models", "Data preprocessing", "Time-series analysis", "Machine learning (LSTM, ARIMA)", "Network optimization", "AI problem-solving", "Agile methodology", "Resource monitoring"],
    icon: djezzy,
    iconBg: "#383E56",
    date: "August 2023",
    points: [
      "Detecting network congestion using AI techniques, focusing on stable resource usage as a sign of congestion.",
      "Explored solutions like calculating usage differences, analyzing time series with ARIMA models, and using LSTM networks.",
      "Handled data preprocessing, including missing values and converting time-series data, using Python and Pandas.",
    ],
    parts_description: [
      {
        title: "AI-Powered Network Congestion Detection and Optimization in Telecommunications", 
        desc : "During my internship, I worked on designing and implementing a data-driven solution to address the critical issue of network congestion within the company’s infrastructure. The project focused on identifying periods of prolonged resource saturation by leveraging advanced methodologies such as time-series analysis, machine learning algorithms (ARIMA, LSTM), and deep learning techniques. My tasks involved analyzing large datasets, preprocessing and cleaning data, and extracting meaningful insights to identify patterns of resource usage stability indicative of congestion. I implemented multiple approaches, including calculating usage differentials, applying predictive models, and using Long Short-Term Memory (LSTM) networks to detect anomalies and predict potential congestion scenarios. Utilizing tools such as Python, Pandas, NumPy, Scikit-learn, and TensorFlow, I developed an end-to-end solution capable of automating detection and providing actionable insights for proactive resource optimization. This mission allowed me to bridge theoretical knowledge with real-world application while contributing to the organization’s goal of ensuring high system performance and service quality."
      },
    ],
    thoghts : "This internship was a transformative experience that deepened my understanding of data science applications in real-world scenarios, particularly in the telecommunications sector. Working on network congestion detection challenged me to combine theoretical knowledge with practical problem-solving, refining my skills in data analysis, machine learning, and deep learning. I learned the importance of data preprocessing, agile methodologies, and the value of iterative development in delivering efficient solutions. Collaborating with industry professionals enhanced my technical and communication skills, while the project itself highlighted the critical role of proactive resource management in maintaining service quality. This experience has reinforced my passion for data science and motivated me to explore further innovations in AI-driven infrastructure optimization.",
  }
  */
];

const testimonials = [
  {
    testimonial:"Working with Yanis on several web projects was a great experience—his exceptional skills and creativity make the impossible possible.",
     name: "Nadir Nait Yahia",
    designation: "CS Student",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:"Yanis was an excellent student of mine, consistently demonstrating dedication, skill, and a strong eagerness to learn.",
    name: "Chemseddine Berbague",
    designation: "Professor",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "I've never seen someone like Yanis in terms of analytical thinking and problem-solving.",
    name: "Billal Mokhtari",
    designation: "Phd Student",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    id:"1",
    name: "Code galaxy",
    title : "Code galaxy",
    skills : ["JS", "React", "ThreeJs", "TailwindCSS", "HTML" ],
    description : "A dynamic React-based platform where users can test their HTML, CSS, and JavaScript skills through interactive quizzes. Enhanced with stunning 3D visuals powered by Three.js for an engaging and immersive experience.",
    thoghts : "Creating this website has had a significant impact on my personal and professional growth. It allowed me to strengthen my React.js skills while also deepening my understanding of HTML, CSS, and JavaScript through practical application. Implementing the quizzes provided valuable experience in designing user-friendly interfaces and creating interactive features. Integrating Three.js to add a visually appealing design was both challenging and rewarding, as it pushed me to explore 3D graphics and animations in a web context. Overall, this project boosted my problem-solving abilities, enhanced my technical skills, and deepened my appreciation for the intersection of design and functionality in web development.",
    images : [cg1, cg2, cg3],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/DonYanis/code-galaxy",
  },
  {
    id:"2",
    name: "Fitness AI",
    title : "Fitness AI",
    skills : ["AI", "Python", "react", "JS", "Django", "Aima", "Figma" ],
    description : "Fitness AI is an innovative web app that provides personalized fitness advice and training programs powered by Artificial Intelligence. Built with a Python backend utilizing the AIMA library for AI inference, the app analyzes user input to generate tailored workout plans and health recommendations. The frontend, developed with React, ensures an intuitive and responsive user experience, making it easy for users to access their fitness programs and guidance. Whether you're a beginner or an experienced fitness enthusiast, Fitness AI helps you stay on track with customized plans designed to optimize your fitness goals.",
    thoghts : "Developing the Fitness AI web app has been a highly rewarding experience, both technically and personally. It allowed me to explore the integration of AI in a real-world application, using the AIMA library to build an inference system that provides personalized fitness advice and training programs. This project enhanced my understanding of machine learning algorithms and how they can be applied to improve user experiences. Working with Python on the backend and React on the frontend challenged me to think creatively about how to connect these technologies seamlessly. The project also deepened my problem-solving abilities, particularly when dealing with AI logic and optimizing user interactions. Overall, this experience has strengthened my skills in both AI and web development, while also fueling my passion for creating tech solutions that can make a tangible difference in people's lives.",
    images : [fai1, fai2],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/DonYanis/full-FitnessAI",
  },
  {
    id:"3",
    name: "Find Your book",
    title : "Find Your book",
    skills : ["ExpressJS", "Neo4j", "Javascript", "Restfull api", "NodeJS" ],
    description : "Book Recommendation System is a web application designed to suggest personalized books to users based on their preferences and reading history. The backend is built with Express.js, providing a RESTful API for seamless communication between the frontend and database. For the database, Neo4j's graph database is used, enabling efficient management and querying of relationships between books, genres, and user interactions. This allows the system to deliver highly relevant and customized book recommendations by analyzing connections within the data. ",
     thoghts : "Building the Book Recommendation System was a valuable learning experience that enhanced both my backend development skills and my understanding of graph databases. Implementing Express.js to create a RESTful API allowed me to deepen my knowledge of building scalable and efficient web services. Using Neo4j's graph database was particularly insightful, as it gave me a practical understanding of how relationships between data points—like books, genres, and user preferences—can be effectively mapped and queried. This project challenged me to think about data modeling in a new way and provided a deeper appreciation for the power of graph databases in solving complex recommendation problems. Overall, this experience has significantly improved my technical abilities and broadened my understanding of data-driven web applications.", 
     images : [fyb1, fyb2],
    tags: [
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "Neo4j",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/DonYanis/find-your-book-api",
  },
  {
    id:"4",
    name: "Tutoring adverts",
    title : "Tutoring adverts",
    skills : ["SQL", "Python", "Django", "React", "Javascript" ],
    description : "A web platform designed for posting and discovering school tutoring advertisements. Built with Django for the backend and React for the frontend, the website allows tutors to create profiles, list their tutoring services, and connect with students in need of academic help. The platform features an integrated chat system, enabling real-time communication between tutors and students, facilitating seamless interactions and booking arrangements. Whether you're a tutor looking to offer your services or a student seeking extra help, School Tutor Hub provides a user-friendly space to find the right match for your educational needs.",
    thoghts : "Developing this web site was an enriching experience that allowed me to combine my knowledge of both backend and frontend technologies. Building the backend with Django enabled me to work with a powerful framework for creating secure and scalable web applications, while React on the frontend helped me develop a dynamic, user-friendly interface. Implementing the integrated chat system was a particularly valuable challenge, as it required me to think about real-time communication and the seamless exchange of messages between tutors and students. This project not only improved my technical skills in full-stack development but also taught me how to design a platform that solves a real-world problem, providing a functional space for educational collaboration. Overall, it was an incredibly rewarding experience that enhanced my problem-solving, communication, and project management skills.",
    images : [ta1, ta2],
    tags: [
      {
        name: "pytohn",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/DonYanis/tutoring-adverts"
  },
  {
    id:"5",
    name: "Floppy cake",
    title : "Floppy cake",
    skills : ["C", "Game dev", "SDL2"],
    description : "Floppy Cake is a simple, fun, and addictive game inspired by the classic 'Flappy Bird.' Developed using C and the SDL2 library, the game challenges players to navigate a bouncing cake through a series of obstacles. Players control the cake by pressing a key (or mouse click) to make it jump, trying to avoid colliding with the walls and gaps in the environment. The goal is to fly as far as possible while accumulating points. The game's smooth graphics, powered by SDL2, and its catchy mechanics offer an engaging, yet challenging, experience suitable for players of all ages.",
    thoghts : "Creating Floppy Cake was an exciting project that allowed me to dive deep into game development using C and SDL2. It was my first time working with SDL2, and it provided me with a great learning experience in handling graphics, input, and collision detection. The development process helped me understand the key components of game mechanics, such as physics, user input handling, and managing game states. Additionally, it gave me insight into the challenges of optimizing a game's performance for smooth user interaction. This project not only improved my coding skills but also allowed me to experiment with creative design elements, offering a fun and nostalgic experience for players.",
    images : [fc],
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "SDL2",
        color: "green-text-gradient",
      },
      {
        name: "Gaming",
        color: "pink-text-gradient",
      }
    ],
    source_code_link:"https://github.com/DonYanis/SDL2-game"
  },
  {
    id:"6",
    name: "Prompt sharing",
    title : "Prompt sharing",
    skills : ["NextJs", "ReactJs", "Tailwind", "google Auth", "javascript", "html"],
    description : "A web application for sharing prompts (tweets), where I implemented Google authentication.",
    thoghts : "When I developed this project, I started with zero experience in implementing authentication systems. However, through research and practice, I successfully integrated Google authentication, enhancing both the security and usability of the application. This journey taught me adaptability, problem-solving, and the importance of learning new technologies to achieve project goals.",
    images : [sp],
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      }
    ],
    source_code_link:"https://github.com/DonYanis/next-js-app"
  },
  {
    id:"7",
    name: "Space Invaders",
    title : "Space Invaders",
    skills : ["Javascript", "CSS", "HTML", "Game dev"],
    description : "A 2D web-based space combat game, built from scratch using JavaScript, where players battle enemy ships in a space environment.",
    thoghts : "When I developed this project, I started with no prior experience in building browser-based games. Through trial and error, I learned to create a 2D game engine, handle animations, and implement interactive gameplay mechanics using JavaScript. This project enhanced my problem-solving skills, taught me about game physics, and deepened my understanding of front-end development.",
    images : [si1, si2],
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      }
    ],
    source_code_link:"https://github.com/DonYanis/Space-Invaders"
  },
  {
    id:"8",
    name: "TicTAcToe-MinMAx",
    title : "TicTAcToe-MinMAx",
    skills : ["Python", "AI", "MinMAx", "Game dev"],
    description : "The famous Tic-Tac-Toe game implemented with the Minimax algorithm for the computer, which is a decision-making algorithm used in game theory to minimize the possible loss for a worst-case scenario and maximize the potential gain by simulating all possible moves and outcomes. ",
    thoghts : "When I developed this project, I had minimal experience with game theory algorithms. Implementing the Minimax algorithm deepened my understanding of decision trees and AI logic. This project strengthened my problem-solving skills, taught me to optimize code for performance, and gave me insight into creating intelligent opponents in games.",
    images : [ttt1, ttt2],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "Logic",
        color: "pink-text-gradient",
      }
    ],
    source_code_link:"https://github.com/DonYanis/Space-Invaders"
  },
  {
    id:"9",
    name: "Compiler with ANTLR4",
    title : "Compiler with ANTLR4",
    skills : ["Java", "ANTLR4"],
    description : "This project is a custom compiler for a simplified programming language, developed using ANTLR4. The language supports fundamental data types such as integers, rationals, and booleans, along with basic arithmetic operations, loops, and conditional statements. It includes built-in functions for mathematical operations such as greatest common divisor (gcd), modulo (mod), and exponentiation (pow), providing a robust foundation for computational tasks. The project emphasizes the design and implementation of a structured grammar, showcasing lexical and syntactic analysis capabilities through ANTLR4, while also demonstrating the ability to generate meaningful and efficient intermediate representations of the code.",
    thoghts : "Working on this compiler project was a challenging yet rewarding experience that deepened my understanding of language design and parsing techniques. Using ANTLR4 allowed me to explore the intricacies of defining grammars, handling syntax trees, and implementing semantic analysis. One of the most fulfilling aspects was designing a language that balances simplicity and functionality, ensuring it caters to common programming needs while remaining approachable. Debugging and refining the compiler required meticulous attention to detail, enhancing my problem-solving and debugging skills. This project not only strengthened my technical abilities but also offered valuable insights into the complexities of compiler construction, leaving me with a sense of accomplishment and a deeper appreciation for the field of programming languages.",
    images : [com],
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "ANTLR4",
        color: "green-text-gradient",
      }
    ],
    source_code_link:"https://github.com/DonYanis/simple_compiler_with_antlr4"
  }
];

const certifications = [
  {
    id: "1",
    name: "Computer Vision",
    provider: "Kaggle",
    skills: ["AI", "Python", "Computer Vision", "Deep Learning"],
    link: "https://www.kaggle.com/learn/certification/donyanis/computer-vision",
    image: c1,
  },
  {
    id: "2",
    name: "Intro to Deep Learning",
    provider: "Kaggle",
    skills: ["AI", "Deep Learning", "Neural Networks"],
    link: "https://www.kaggle.com/learn/certification/donyanis/intro-to-deep-learning",
    image: c2,
  },
  {
    id: "3",
    name: "React",
    provider: "HackerRank",
    skills: ["React", "JavaScript", "Web Development"],
    link: "https://www.hackerrank.com/certificates/518694f44374",
    image: c3,
  },
  {
    id: "4",
    name: "Intermediate Machine Learning",
    provider: "Kaggle",
    skills: ["Machine Learning", "AI", "Python", "Data Science"],
    link: "https://www.kaggle.com/learn/certification/donyanis/intermediate-machine-learning",
    image: c4,
  },
  {
    id: "5",
    name: "Intro to Machine Learning",
    provider: "Kaggle",
    skills: ["Machine Learning", "Python", "Data Science"],
    link: "https://www.kaggle.com/learn/certification/donyanis/intro-to-machine-learning",
    image: c5,
  },
  {
    id: "6",
    name: "Pandas",
    provider: "Kaggle",
    skills: ["Python", "Data Analysis", "Pandas", "Data Science"],
    link: "https://www.kaggle.com/learn/certification/donyanis/pandas",
    image: c6,
  },
  {
    id: "7",
    name: "Quantum Computing Fundamentals with Microsoft Azure",
    provider: "Udemy",
    skills: ["Quantum Computing", "Azure", "Cloud Computing"],
    link: "https://www.udemy.com/certificate/UC-00cae972-986d-4ca7-ac1d-d7281cc81d74/",
    image: c7,
  },
  {
    id: "8",
    name: "DevOps Fundamentals",
    provider: "Udemy",
    skills: ["DevOps", "Automation", "CI/CD"],
    link: "https://www.udemy.com/certificate/UC-25ad982e-2037-4e88-9622-6c4d191b631b/",
    image: c8,
  },
  {
    id: "9",
    name: "Blockchain Basics",
    provider: "Coursera",
    skills: ["Blockchain", "Cryptocurrency", "Decentralization"],
    link: "https://www.coursera.org/account/accomplishments/certificate/LTZX48NSVGGL",
    image: c18,
  },
  {
    id: "10",
    name: "Introduction to Cyber Attacks",
    provider: "Coursera",
    skills: ["Cybersecurity", "Ethical Hacking", "Security"],
    link: "https://www.coursera.org/account/accomplishments/certificate/W56B38PMJKSV",
    image: c17,
  },
  {
    id: "11",
    name: "EF SET English Certificate",
    provider: "EF SET",
    skills: ["English", "Language"],
    link: "https://www.efset.org/cert/QgPoVJ",
    image: c15,
  },
  {
    id: "13",
    name: "Java",
    provider: "HackerRank",
    skills: ["Java", "Programming"],
    link: "https://www.hackerrank.com/certificates/d20f40fa98e9",
    image: c10,
  },
  {
    id: "14",
    name: "JavaScript",
    provider: "HackerRank",
    skills: ["JavaScript", "Web Development", "Programming"],
    link: "https://www.hackerrank.com/certificates/93947d69ac93",
    image: c11,
  },
  {
    id: "15",
    name: "PYTHON 3 PROBLEM SOLVING",
    provider: "CodinGame",
    skills: ["Python", "Problem Solving", "Algorithms"],
    link: "https://www.codingame.com/certification/UBBcbz2O-6zjpWdkpVb-uQ",
    image: c16,
  },
  {
    id: "17",
    name: "SQL",
    provider: "HackerRank",
    skills: ["SQL", "Database"],
    link: "https://www.hackerrank.com/certificates/da0e9e9cd3b1",
    image: c12,
  },
  {
    id: "18",
    name: "CSS",
    provider: "HackerRank",
    skills: ["CSS", "Web Development", "Styling"],
    link: "https://www.hackerrank.com/certificates/3ec56ecb7b04",
    image: c13,
  }
];

const studies = [
  {
    id:"1",
    title: "Master 1 in Computer Science",
    company_name: "ISIMA, Clermont Auvergne University",
    icon: uca,
    iconBg: "#383E56",
    date: "2024 - 2025",
    skills : ["AI", "Big Data", "Data Analysis", "Security", "Programming", "Project managment", "Java", "Python", "R"],
    points: [
      "Learning AI fundamentals, data manipulation, and analysis systems",
      "Security in Computer Science and Networking",
      "Software Engineering: building tests and refactoring",
      "Programming in Python, Java, and R languages"
    ],
    thoghts : "This Master 1 in Computer Science (2024-2025) allows me to deepen my knowledge and skills in key areas such as AI fundamentals, data manipulation, and analysis systems. It equips me to explore security in computer science and networking, refine software engineering practices with a focus on building tests and refactoring, and enhance my programming expertise in Python, Java, and R languages. The program sharpens my problem-solving abilities, fosters a deeper understanding of advanced concepts, and builds my confidence in addressing complex challenges. Furthermore, it provides the opportunity to undertake a 5-month internship, enabling me to apply my learning in a real-world professional environment and solidify my career aspirations.",
  },
  {
    id:"2",
    title: "Bachelor's degree in Computer Science",
    company_name: "ISIMA, Clermont Auvergne University",
    icon: uca,
    iconBg: "#383E56",
    date: "2023 - 2024",
    skills : ["Mathematics", "Algorithms", "AI", "Networking", "Web Development", "Programming"],
    points: [
      "Learning algorithmic fundamentals.",
      "Operations research and mathematics.",
      "Web development with JavaScript.",
      "Artificial intelligence fundamentals.",
    ],

    thoghts : "During my Bachelor's degree at Clermont University, I gained a strong foundation in key areas such as algorithmic fundamentals, operations research, mathematics, web development with JavaScript, and the fundamentals of artificial intelligence. These subjects provided me with a balanced mix of theoretical knowledge and practical skills, allowing me to approach problem-solving with both creativity and analytical rigor. This experience not only enhanced my technical expertise but also fostered a deep curiosity for innovation and reinforced my ability to adapt to emerging technologies. The impact of this program was transformative, shaping my career aspirations and equipping me with the confidence to tackle complex challenges in the fields of AI, data science, and web development."
  },

  {
    id: "3",
    title: "Engineering training in Computer Science",
    company_name: "ESTIN",
    skills :["Mathematics", "Algorithms", "AI", "Networking", "Web Development", "Security", "Programming", "Project managment","Python", "Java", "C", "TensorFlow"],
    icon: estin,
    iconBg: "#383E56",
    date: "2020-2023",
    points: [
      "Learning algorithms, mathematics, and Linux OS fundamentals.",
      "Learning security methods in computer science.",
      "Web development with JavaScript and Python.",
      "Software engineering methods for building and refactoring."
    ],
    thoghts : "During my three years of study at ESTIN, I have gained a strong foundation in various aspects of computer science that have shaped my skills and knowledge. I learned the fundamentals of algorithms, mathematics, and Linux OS, which enhanced my problem-solving abilities and technical proficiency. My studies also delved into security methods in computer science, giving me a solid understanding of how to safeguard systems and networks. I developed a deep interest in web development, where I honed my skills in JavaScript and Python, learning to create dynamic and efficient applications. Additionally, my exploration of software engineering methods, including software refactoring and design, has prepared me to approach complex projects with a systematic and methodical mindset. These experiences have not only expanded my technical capabilities but also fostered a passion for continuous learning and innovation."
  }
];
export {studies, services, technologies, experiences, testimonials, projects, certifications };
