export const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
  Backend: ["Python", "Django", "JavaScript (ES6+)", "Express.js", "Node.js"],
  Database: ["MySQL", "MongoDB"],
  API: ["REST APIs", "JWT Authentication", "Session Authentication", "API Integration"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Vite"]
};

export const projects = [
  { title: "PG Price Prediction System", type: "Machine Learning • Django", desc: "A Django-based machine learning web application that predicts PG rental prices based on location, room type, room size, and available facilities.", points: ["Built a machine learning prediction workflow with a regression pipeline.", "Integrated the trained ML model with Django for real-time PG price predictions.", "Evaluated the model using R² score and achieved an R² score of approximately 0.90 on the tested data."], link: "https://pg-price-prediction.vercel.app/" },
  { title: "MY PORTFOLIO", type: "React • Tailwind CSS • GitHub • Vercel", desc: "A responsive and modern personal portfolio website showcasing projects, technical skills, and professional information.", points: ["Implemented a responsive portfolio UI with a modern component-based React structure.", "Improved performance and deployed the application on Vercel with version control through GitHub."], link: "https://kashyaptiwariportfolio.vercel.app/" },
  { title: "CV Analyzer", type: "Python • Django • HTML5 • CSS3 • JavaScript • PyMuPDF • MySQL", desc: "A web-based application that analyzes resumes to evaluate ATS compatibility by extracting text, matching keywords, and generating a resume score.", points: ["Developed a resume analyzer with PDF upload, text extraction, keyword matching, and ATS score calculation.", "Built the application using Python, Django, HTML, CSS, JavaScript, PyMuPDF, and Tesseract OCR."], link: "https://github.com/kashyaptiwari444-cell" },
  { title: "E-COMMERCE", type: "Django • HTML/CSS • Tailwind • JavaScript • MySQL", desc: "A full-stack e-commerce web application using Django with secure authentication, product management, shopping cart, and order processing.", points: ["Built admin panels for product management, cart, order tracking, and inventory management.", "Developed RESTful backend logic with secure authentication, database integration, and CRUD operations."], link: "https://github.com/kashyaptiwari444-cell/E-COMMERCE-WEBSITE" }
];
