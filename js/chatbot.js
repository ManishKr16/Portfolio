/*
 * Self-contained, client-side Q&A chatbot for the portfolio.
 * It injects its own markup and stylesheet without changing existing sections.
 */

(() => {
  const manishInfo = {
    name: "Manish Kumar",
    role: "Fresher Software Developer",
    location: "Gaya, Bihar, India",
    email: "manishkumar.tech.in@gmail.com",
    phone: "+91 88629 66605",
    linkedin: "https://www.linkedin.com/in/manishkr16",
    github: "https://github.com/ManishKr16",
    leetcode: "https://leetcode.com/u/manishkr16/",
    resume: "assets/Manish_Kumar_Resume.pdf",
    objective: "Fresher Software Developer with good knowledge of web development, programming, and problem-solving. Interested in building simple, useful, and user-friendly software applications. Looking for an opportunity to start my career in a good organization where I can learn new technologies, improve my skills, work with a team, and contribute to real-world projects.",
    education: [
      { degree: "Master of Computer Applications (MCA)", school: "SR University, Warangal", years: "2025 - Present", score: "CGPA: 7.2" },
      { degree: "Bachelor of Computer Applications (BCA)", school: "Arcade Business College, Patna", years: "2022 - 2025", score: "67.13%" },
      { degree: "Senior Secondary (12th)", school: "Bihar School Examination Board (BSEB)", years: "2020 - 2022", score: "70.4%" },
      { degree: "Secondary (10th)", school: "Bihar School Examination Board (BSEB)", years: "2020", score: "72.8%" }
    ],
    projects: [
      { name: "TripSplit (Expense Splitting App)", stack: "React, Node.js, Express, PostgreSQL, JWT", desc: "Full-stack expense-splitting app with secure JWT auth, bcrypt password hashing, and a minimum-cash-flow settlement engine. Deployed on Vercel, Render, and Neon PostgreSQL.", link: "https://trip-expense-app-kappa.vercel.app/" },
      { name: "Tic Tac Toe Game", stack: "HTML, CSS, JavaScript", desc: "Two-player Tic Tac Toe with real-time win/draw detection and a responsive, resettable board.", link: "https://manishkr16.github.io/tic-tac-toe/" },
      { name: "LeetCode Tracker", stack: "HTML, CSS, JavaScript, AI-assisted development", desc: "Dashboard that visualizes a LeetCode profile's progress with heatmaps and charts.", link: "https://leetcodetracker-drab.vercel.app/" }
    ],
    skills: {
      "Programming Languages": ["C", "C++", "Python"],
      "Web Development": ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
      "Cloud Computing": ["AWS EC2", "AWS S3", "Elastic Beanstalk"],
      "Tools & Platforms": ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
      "AI-Assisted Development": ["ChatGPT", "Claude", "GitHub Copilot", "Cursor AI", "Antigravity", "OpenCode"]
    },
    certifications: ["Data Structures and Algorithms", "Operating System & Computer Networking", "Cloud Computing", "Database Management System"],
    strengths: ["Quick Learner", "Problem-Solving Mindset", "Team Collaboration", "Discipline"],
    interests: ["Content Creation", "Gym", "Leadership", "Reading Books", "Editing"]
  };

  const projectReply = manishInfo.projects
    .map((project) => `<strong>${project.name}</strong> - ${project.desc} <a href="${project.link}" target="_blank" rel="noopener">View project</a>.`)
    .join("<br>");
  const skillReply = Object.entries(manishInfo.skills)
    .map(([category, skills]) => `<strong>${category}:</strong> ${skills.join(", ")}`)
    .join("<br>");
  const educationReply = manishInfo.education
    .map((item) => `<strong>${item.degree}</strong> at ${item.school} (${item.years}), ${item.score}.`)
    .join("<br>");

  const intents = [
    { keywords: ["hi", "hello", "hey", "how are you"], reply: "Hi! I can tell you about Manish's skills, projects, education, or how to get in touch. What would you like to know?" },
    { keywords: ["who is manish", "about manish", "about him", "tell me about", "objective", "location"], reply: `${manishInfo.name} is a ${manishInfo.role} from ${manishInfo.location}. ${manishInfo.objective} Check the About section above.` },
    { keywords: ["skill", "skills", "tech stack", "technology", "technologies", "know"], reply: `Manish's skills include:<br>${skillReply}<br>See the Skills & tools section above.` },
    { keywords: ["project", "projects", "work", "built", "portfolio"], reply: `Here are Manish's projects:<br>${projectReply}<br>Check the Projects section above.` },
    { keywords: ["education", "degree", "college", "school", "cgpa", "bca", "mca"], reply: `Manish's education:<br>${educationReply}<br>See the Education section above.` },
    { keywords: ["certification", "certifications", "course", "courses"], reply: `Manish has completed certifications in ${manishInfo.certifications.join(", ")}. See the Certifications section above.` },
    { keywords: ["strength", "strengths", "interest", "interests", "hobby", "hobbies"], reply: `Manish's strengths are ${manishInfo.strengths.join(", ")}. His interests include ${manishInfo.interests.join(", ")}. See the Strengths & Interests section above.` },
    { keywords: ["contact", "email", "phone", "hire", "available", "reach", "job", "work with"], reply: `You can reach Manish at <a href="mailto:${manishInfo.email}">${manishInfo.email}</a> or <a href="tel:+918862966605">${manishInfo.phone}</a>. Use the Contact section form below to send a message.` },
    { keywords: ["resume", "cv", "curriculum vitae"], reply: `You can <a href="${manishInfo.resume}" target="_blank" rel="noopener">view Manish's resume</a>. The download is also available in the hero and About sections.` }
  ];

  const fallback = `I don't have an answer for that yet - you can reach Manish directly at <a href="mailto:${manishInfo.email}">${manishInfo.email}</a> or use the contact form below.`;

  function findReply(message) {
    const normalized = message.toLowerCase();
    const intent = intents.find(({ keywords }) => keywords.some((keyword) => normalized.includes(keyword)));
    return intent ? intent.reply : fallback;
  }

  function init() {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "css/chatbot.css";
    document.head.appendChild(stylesheet);

    const widget = document.createElement("div");
    widget.innerHTML = `
      <button class="chatbot-toggle" type="button" aria-label="Open chat about Manish" aria-expanded="false">
        <i class="fa-solid fa-comment-dots" aria-hidden="true"></i>
      </button>
      <section class="chatbot-panel glass panel" aria-label="Ask about Manish" aria-hidden="true">
        <header class="chatbot-header">
          <span class="chatbot-avatar" aria-hidden="true">MK</span>
          <h2>Ask about Manish</h2>
          <button class="chatbot-close" type="button" aria-label="Close chat">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </header>
        <div class="chatbot-messages" aria-live="polite"></div>
        <form class="chatbot-form">
          <input class="chatbot-input" type="text" aria-label="Ask a question" placeholder="Ask about skills, projects..." autocomplete="off">
          <button class="chatbot-send" type="submit" aria-label="Send message">
            <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
          </button>
        </form>
      </section>`;
    document.body.appendChild(widget);

    const toggle = widget.querySelector(".chatbot-toggle");
    const panel = widget.querySelector(".chatbot-panel");
    const close = widget.querySelector(".chatbot-close");
    const messages = widget.querySelector(".chatbot-messages");
    const form = widget.querySelector(".chatbot-form");
    const input = widget.querySelector(".chatbot-input");
    let welcomed = false;

    function addMessage(content, type) {
      const message = document.createElement("div");
      message.className = `chatbot-message chatbot-message--${type}`;
      message.innerHTML = content;
      messages.appendChild(message);
      messages.scrollTop = messages.scrollHeight;
    }

    function addWelcome() {
      addMessage("Hi! I'm Manish's portfolio assistant. Ask me about his work, skills, or background.", "bot");
      const quickReplies = document.createElement("div");
      quickReplies.className = "chatbot-quick-replies";
      ["Skills", "Projects", "Education", "Contact"].forEach((label) => {
        const button = document.createElement("button");
        button.className = "chatbot-quick-reply";
        button.type = "button";
        button.textContent = label;
        button.addEventListener("click", () => sendMessage(label));
        quickReplies.appendChild(button);
      });
      messages.appendChild(quickReplies);
    }

    function openChat() {
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close chat about Manish");
      toggle.querySelector("i").className = "fa-solid fa-xmark";
      if (!welcomed) {
        addWelcome();
        welcomed = true;
      }
      input.focus();
    }

    function closeChat() {
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open chat about Manish");
      toggle.querySelector("i").className = "fa-solid fa-comment-dots";
      toggle.focus();
    }

    function sendMessage(value) {
      const question = (value || input.value).trim();
      if (!question) return;
      input.value = "";
      addMessage(question, "user");
      const typing = document.createElement("div");
      typing.className = "chatbot-typing";
      typing.textContent = "Typing...";
      messages.appendChild(typing);
      messages.scrollTop = messages.scrollHeight;
      window.setTimeout(() => {
        typing.remove();
        addMessage(findReply(question), "bot");
      }, 420);
    }

    toggle.addEventListener("click", () => (panel.classList.contains("is-open") ? closeChat() : openChat()));
    close.addEventListener("click", closeChat);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      sendMessage();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && panel.classList.contains("is-open")) closeChat();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
