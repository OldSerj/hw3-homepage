// Question bank - array of objects
const questionBank = [
    {
        keywords: ["project", "projects", "url shortener", "curl card", "prev.md", "atestat"],
        response: "I've built several projects: URL Shortener (local web server that shortens URLs), Curl Card (fetches rich preview data from URLs), Prev.md (minimal markdown preview app), and an Atestat project with MBTI personality test and IQ approximator."
    },
    {
        keywords: ["skill", "skills", "technologies", "tech stack"],
        response: "My skills include HTML5, CSS3, JavaScript, Python, Git & GitHub, and DaVinci Resolve for video editing."
    },
    {
        keywords: ["education", "school", "university", "study", "studies"],
        response: "I studied at Colegiul Național Preparandia Dimitrie Tichindeal Arad (Mate-Info, 2021-2025) and currently study Computer Science in English at West University of Timișoara (2025-present)."
    },
    {
        keywords: ["contact", "email", "github", "reach"],
        response: "You can contact me via email at sergiu.batrin@example.com or find me on GitHub at github.com/OldSerj."
    },
    {
        keywords: ["cybersecurity", "security", "ctf"],
        response: "I'm passionate about cybersecurity! I've experimented with virtual machines, penetration testing, and participated in a couple of CTF competitions."
    },
    {
        keywords: ["experience", "background", "passion", "interest"],
        response: "I have a strong interest in full-stack development and cybersecurity. I've also edited videos for my high school's YouTube channel using DaVinci Resolve and Canva."
    },
    {
        keywords: ["hello", "hi", "hey", "greeting", "good morning", "good afternoon"],
        response: "Hello! How can I help you today? Feel free to ask about my projects, skills, education, or contact info!"
    },
    {
        keywords: ["help", "what can you do", "commands"],
        response: "You can ask me about: my projects, skills, education history, contact information, cybersecurity interests, or just say hello!"
    }
];

// Default response when no keywords match
const defaultResponse = "I'm not sure about that. Try asking about my projects, skills, education, or contact information!";

// Function to find response based on user input
function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const item of questionBank) {
        for (const keyword of item.keywords) {
            if (lowerMessage.includes(keyword)) {
                return item.response;
            }
        }
    }
    
    return defaultResponse;
}

// Function to add a message to the chat
function addMessage(text, sender) {
    const chatMessages = document.getElementById("chatMessages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Auto-scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to show typing indicator (optional bonus)
function showTypingIndicator() {
    const chatMessages = document.getElementById("chatMessages");
    const typingDiv = document.createElement("div");
    typingDiv.className = "message bot typing";
    typingDiv.id = "typingIndicator";
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = "Typing...";
    
    typingDiv.appendChild(contentDiv);
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById("typingIndicator");
    if (indicator) {
        indicator.remove();
    }
}

// Handle form submission
document.getElementById("chatForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim();
    
    if (userMessage === "") return;
    
    // Add user message to chat
    addMessage(userMessage, "user");
    
    // Clear input field
    userInput.value = "";
    
    // Show typing indicator
    showTypingIndicator();
    setTimeout(function() {
        removeTypingIndicator();
        
        // Get bot response
        const botResponse = getBotResponse(userMessage);
        
        // Add bot response to chat
        addMessage(botResponse, "bot");
    }, 500);
});
