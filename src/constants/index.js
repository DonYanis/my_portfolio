import {
  ca,
  toeic,
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
  stock,
  xray,
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
  com,
  ny,
  bm,
  bc,
  c1a,
  c1b,
  c1c,
  c1d,
  sql,
  n4j

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
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "n4j",
    icon: n4j,
  },
];

const experiences = [
  {
    id:"1",
    title: "Data Analyst Intern",
    company_name: "Crédit Agricole - CIB",
    icon: ca,
    iconBg: "#383E56",
    date: "April 2025",
    skills : ["SQL Server", "PowerBI", "DAX", "Crapull", "Data Analysis"],
    points: [
      "Collaborated with finance and management teams to optimize financial control applications.",
      "Analyzed datasets using SQL to extract actionable insights, improving business decision-making",
      "Cleaned and processed raw data to enhance accuracy and reliability for stakeholder reports",
      "Created interactive dashboards in Power BI to visualize trends",
      "Collaborated with cross-functional teams to define KPIs and track performance metrics",
    ], 
  },
  {
    id:"2",
    title: "Machine learning Intern",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#383E56",
    date: "July 2024",
    skills : ["Python", "TensorFlow", "Time-series", "LSTM"],
    points: [
      "Developed an LSTM-based text generation model using Python/TensorFlow.",
      "Built a stock price prediction system leveraging time-series analysis, improving forecast accuracy.",
      "Preprocessed and analyzed financial datasets (Python/Pandas) to identify key trends for model training."
    ],  
  },

  {
    id: "3",
    title: "Data Scientist Intern ",
    company_name: "Djezzy",
    skills :["Python", "TensorFlow", "Time-series", "Network optimization", "Data Science"],
    icon: djezzy,
    iconBg: "#383E56",
    date: "August 2023",
    points: [
      "Built a data-driven congestion detection system in networks using LSTM networks and time-series analysis.",
      "Processed and analyzed large-scale network telemetry datasets (Python, Pandas, NumPy) to identify resource saturation patterns.",
      "Handled data preprocessing, including missing values and converting time-series data, using Python and Pandas."
    ],  
  }
];

const testimonials = [
  {
    testimonial:"Working with Yanis on several web projects was a great experience—his exceptional skills and creativity make the impossible possible.",
     name: "Nadir Nait Yahia",
    designation: "CS Student",
    image: ny,
  },
  {
    testimonial:"Yanis was an excellent student, consistently demonstrating dedication, skill, and a strong eagerness to learn.",
    name: "Chemseddine Berbague",
    designation: "Professor",
    image: bc,
  },
  {
    testimonial: "I've never encountered  anyone like Yanis when it comes to analytical thinking and problem-solving.",
    name: "Billal Mokhtari",
    designation: "Phd Student",
    image: bm,
  },
];

const projects = [
  {
    id:"1a1",
    name: "Dental Caries Diagnostic",
    title : "Dental Caries Diagnostic",
    description : "A computer vision-based system for automated detection and diagnosis of dental caries from dental panoramic x-ray images.",
    images : [xray],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://www.kaggle.com/code/tarekichalalen/projet-dl",
  },
  {
    id:"1b2",
    name: "Stock Prices Prediction",
    title : "Stock Prices Prediction",
    description : "A deep learning model using LSTM to predict Netflix stock prices based on historical market data.",
    images : [stock],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "LSTM",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/DonYanis/codealpha_tasks/blob/main/task2/netflix-stock-prediction-using-lstm.ipynb",
  },
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
    id: "1a",
    name: "Data Scientist Associate",
    provider: "DataCamp",
    skills: ["Data science", "Python", "Machine Learning", "TensorFlow"],
    link: "https://www.datacamp.com/certificate/DSA0016909301868",
    image: c1a,
  },
  {
    id: "1b",
    name: "Neural Networks and Deep Learning",
    provider: "DeepLearning.AI",
    link: "https://www.coursera.org/account/accomplishments/verify/24JCHNXAOMNI",
    skills: ["AI", "Python", "Deep Learning"],
    image: c1b,
  },
  {
    id: "toeic",
    name: "TOEIC® Listening and Reading, Score of 925/990",
    provider: "ETS Global",
    skills: ["English"],
    link: "https://www.etsglobal.org/fr/en/digital-score-report/86F4F1DD0526A71E30BE923413DBCAF4696297410488207C6DC1C106A422BD82ckhhZmZRaGh4VzRvWkN3ZXdORE1OMnNkMlYrMmRUQlBuRC95cTlLb1c3TTVaUGRv",
    image: toeic,
  },
  {
    id: "1c",
    name: "Business Intelligence (BI) Essentials",
    provider: "IBM",
    skills: ["BI", "Data Analysis", "ETL"],
    link: "https://www.coursera.org/account/accomplishments/verify/CY80BDMPQWY8",
    image: c1c,
  },
  {
    id: "1d",
    name: "Harnessing the Power of Data with Power BI",
    provider: "Microsoft",
    skills: ["BI", "Data Analysis", "ETL", "Power BI"],
    link: "https://www.coursera.org/account/accomplishments/verify/QH8UUCAA4QIJ",
    image: c1d,
  },
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
    skills: ["Machine Learning", "AI", "Python"],
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
      "Learning AI and neural networks ",
      "Bussiness intlegence and Data analysis",
      "Security in Computer Science and Networking",
      "Software Engineering and Backedn Develment ",
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
