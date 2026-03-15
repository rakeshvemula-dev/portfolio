// ===== TYPING ANIMATION =====
// ===== TYPING ANIMATION =====
const typingText = document.querySelector('.hero-role');
const finalRole = 'AI Backend & LLM App Developer';

// Clear the existing text and start empty
typingText.textContent = '';

// Inject cursor inline inside the h2 — not after it
typingText.innerHTML = '<span id="typed"></span><span class="cursor">|</span>';

const typedSpan = document.getElementById('typed');
let charIndex = 0;
let typingDone = false;

function type() {
  if (charIndex < finalRole.length) {
    typedSpan.textContent += finalRole.charAt(charIndex);
    charIndex++;
    setTimeout(type, 85);
  } else {
    // Typing done — cursor just blinks, nothing else happens
    typingDone = true;
  }
}

// Start after a short delay so page loads first
window.addEventListener('load', () => {
  setTimeout(type, 800);
});




// ===== ACTIVE NAV HIGHLIGHT ON SCROLL =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

const observerOptions = {
  root: null,
  rootMargin: '-40% 0px -55% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(
        `.nav-links a[href="#${entry.target.id}"]`
      );
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));


// ===== NAVBAR SCROLL SHADOW =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== NEURAL NETWORK BACKGROUND =====
const canvas = document.getElementById('neural-canvas');
const ctx2 = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const nodeCount = 60;
const nodes = [];

for (let i = 0; i < nodeCount; i++) {
  nodes.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    radius: Math.random() * 2 + 1,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.02
  });
}

function drawNeural() {
  ctx2.clearRect(0, 0, canvas.width, canvas.height);

  // Draw connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 140) {
        ctx2.strokeStyle = `rgba(0, 191, 255, ${(1 - dist / 140) * 0.25})`;
        ctx2.lineWidth = 0.5;
        ctx2.beginPath();
        ctx2.moveTo(nodes[i].x, nodes[i].y);
        ctx2.lineTo(nodes[j].x, nodes[j].y);
        ctx2.stroke();
      }
    }
  }

  // Draw nodes
  nodes.forEach(node => {
    node.x += node.vx;
    node.y += node.vy;
    node.pulse += node.pulseSpeed;

    if (node.x < 0 || node.x > canvas.width)  node.vx *= -1;
    if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

    const pulseFactor = 0.5 + 0.5 * Math.sin(node.pulse);

    // Glow
    const grd = ctx2.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 6);
    grd.addColorStop(0, `rgba(0, 255, 159, ${0.15 + pulseFactor * 0.15})`);
    grd.addColorStop(1, 'rgba(0, 255, 159, 0)');
    ctx2.fillStyle = grd;
    ctx2.beginPath();
    ctx2.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2);
    ctx2.fill();

    // Core
    ctx2.fillStyle = `rgba(0, 255, 159, ${0.5 + pulseFactor * 0.5})`;
    ctx2.beginPath();
    ctx2.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx2.fill();
  });

  requestAnimationFrame(drawNeural);
}

drawNeural();

const SYSTEM_CONTEXT = `
You are an AI assistant embedded in Rakesh Vemula's portfolio website.
Answer questions about Rakesh in a helpful, concise and conversational tone.
IMPORTANT: Never use markdown formatting — no bold, no bullet points, no dashes, no headers.
Write in plain natural sentences only, like you're having a conversation.
Keep answers brief and to the point — 3 to 5 sentences maximum.
Only answer questions related to Rakesh's background, skills, projects, and experience.
If asked something unrelated, politely redirect.

Here is everything you know about Rakesh:

NAME: Rakesh Vemula
LOCATION: Hyderabad, Telangana, India
EMAIL: rakeshvemula14300@gmail.com
LINKEDIN: linkedin.com/in/iamrakeshvemula
GITHUB: github.com/rakeshvemula-dev

SUMMARY:
CS Graduate (2025) specializing in AI/GenAI application development.
Focused on building LLM-powered backends, RAG systems, and Agentic Workflows using Python.

SKILLS:
- AI/LLM: LLMs (Gemini, OpenAI), RAG Systems, Prompt Engineering, LangChain, Google Vertex AI
- Backend: Python, FastAPI, Flask, REST APIs, SQL
- Tools: Git/GitHub, VS Code, Postman, Docker (learning), Google Cloud

PROJECTS:
1. Artisan AI — Full-stack GenAI app that automates marketing content for artisans.
   Stack: Python, Flask, React, Google Gemini API, Cloudinary
   Key work: Gemini API integration, prompt engineering, REST API architecture

2. Log Classification System — Hybrid AI pipeline for classifying server logs.
   Stack: Python, FastAPI, BERT, LLMs, Regex
   Key work: Tiered logic (Regex → BERT → LLM), cost optimization, FastAPI backend

3. Urban Traffic Optimization — RL simulation for traffic light optimization.
   Stack: Python, Reinforcement Learning
   Key work: Environment modelling, algorithmic logic

CURRENTLY BUILDING:
- RAG Chatbot (LangChain + FastAPI + vector embeddings)
- LangGraph Agent (multi-step agentic workflows)
- This AI Portfolio Assistant

EXPERIENCE:
- Data Research Analyst at Concentrix Daksh Services (Aug–Sep 2024)
- AI Intern at Corizo.in (Jun–Jul 2023): ML pipelines, K-Means clustering

EDUCATION:
- B.Tech Computer Science, Geethanjali College of Engineering & Technology (2021–2025), CGPA: 8.24

CERTIFICATIONS:
- Generative AI Academy — Google Cloud (Vertex AI, Gemini APIs)
- Google Data Analytics Professional Certificate

AVAILABILITY:
Open to AI Backend and LLM App Developer roles in Hyderabad or remote.
`;

// Conversation history — this is how Gemini remembers the chat
const conversationHistory = [];

const chatToggle  = document.getElementById('chat-toggle');
const chatWidget = document.getElementById('chat-widget');
const chatClose   = document.getElementById('chat-close');
const chatBox     = document.getElementById('chat-box');
const chatInput   = document.getElementById('chat-input');
const chatSend    = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');
const chatClear = document.getElementById('chat-clear');
// ===== CHAT EXPAND / COLLAPSE =====
const chatExpand  = document.getElementById('chat-expand');
const chatOverlay = document.getElementById('chat-overlay');

chatExpand.addEventListener('click', () => {
  const isExpanded = chatWidget.classList.contains('expanded');

  if (!isExpanded) {
    chatWidget.classList.add('expanded');
    chatOverlay.classList.add('active');
    chatBox.classList.remove('hidden');
    chatExpand.textContent = '⤡';
    chatExpand.title = 'Collapse';
    // center on screen
    chatWidget.style.position = 'fixed';
    chatWidget.style.top = '50%';
    chatWidget.style.left = '50%';
    chatWidget.style.bottom = 'unset';
    chatWidget.style.right = 'unset';
    chatWidget.style.transform = 'translate(-50%, -50%)';
  } else {
    collapseChat();
  }
});

// Click overlay to collapse
chatOverlay.addEventListener('click', collapseChat);

// Press Escape to collapse
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') collapseChat();
});

function collapseChat() {
  chatWidget.classList.remove('expanded');
  chatOverlay.classList.remove('active');
  chatExpand.textContent = '⤢';
  chatExpand.title = 'Expand';
  // reset position back to corner
  chatWidget.style.position = 'fixed';
  chatWidget.style.top = 'unset';
  chatWidget.style.left = 'unset';
  chatWidget.style.bottom = '2rem';
  chatWidget.style.right = '2rem';
  chatWidget.style.transform = 'none';
}
chatClear.addEventListener('click', () => {
  // Clear UI messages except the first welcome message
  chatMessages.innerHTML = `
    <div class="message bot">
      Hi! I'm Rakesh's AI assistant. Ask me anything about his skills, projects, or experience.
    </div>`;
  // Reset conversation history
  conversationHistory.length = 0;
});

// Open / close chat
chatToggle.addEventListener('click', () => {
  chatBox.classList.toggle('hidden');
});

chatClose.addEventListener('click', () => {
  chatBox.classList.add('hidden');
});

// Send on Enter key
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});

chatSend.addEventListener('click', sendMessage);

function addMessage(text, role) {
  const div = document.createElement('div');
  div.classList.add('message', role);
  div.textContent = text;
  chatMessages.appendChild(div);
  // Auto scroll to latest message
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
  const div = document.createElement('div');
  div.classList.add('message', 'bot', 'typing-indicator');
  div.id = 'typing';
  div.textContent = '...';
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.getElementById('typing');
  if (typing) typing.remove();
}

async function sendMessage() {
  const userText = chatInput.value.trim();
  if (!userText) return;

  // Show user message
  addMessage(userText, 'user');
  chatInput.value = '';

  // Add to history
  conversationHistory.push({
      role: 'user',
      content: userText
    });

  // Show typing indicator while waiting
  addTypingIndicator();
try {
    const response = await fetch('https://portfolio-api-qakh.onrender.com/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: conversationHistory
      })
    });

    const data = await response.json();

    if (data.detail) {
      removeTypingIndicator();
      addMessage(`Error: ${data.detail}`, 'bot');
      return;
    }

    const botReply = data.reply;

    conversationHistory.push({
      role: 'assistant',
      content: botReply
    });

    removeTypingIndicator();
    addMessage(botReply, 'bot');

  } catch (error) {
    removeTypingIndicator();
    addMessage(`Error: ${error.message}`, 'bot');
    console.error('API error:', error);
  }
}
// ===== HEX RING PULSE =====
const ring1 = document.querySelector('.hex-ring-1');
const ring2 = document.querySelector('.hex-ring-2');
let ringPulse = 0;

function animateRings() {
  ringPulse += 0.02;
  const opacity1 = 0.1 + 0.1 * Math.sin(ringPulse);
  const opacity2 = 0.05 + 0.05 * Math.sin(ringPulse + 1);
  if (ring1) ring1.style.borderColor = `rgba(0, 255, 159, ${opacity1})`;
  if (ring2) ring2.style.borderColor = `rgba(0, 191, 255, ${opacity2})`;
  requestAnimationFrame(animateRings);
}
animateRings();