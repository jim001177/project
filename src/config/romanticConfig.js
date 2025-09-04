// 💕 Romantic Website Configuration
// Edit this file to customize all content without touching component logic

export const romanticConfig = {
  // Personal Information
  personal: {
    yourName: "Sohil Yadav",
    herName: "Beautiful", // Will be used in messages
    relationship: "girlfriend", // Can be changed to "boyfriend", "partner", etc.
  },

  // Home Page Content
  home: {
    heroTitle: "Hello Beautiful! 💕",
    subtitle: "I've created something special just for you...",
    messages: [
      "Welcome to our love story 💕",
      "You make my heart skip a beat ✨",
      "Every day with you is magical 🌟",
      "You're the sunshine in my life ☀️",
      "I love you more than words can say 💖",
      "You're my favorite person in the world 🌍",
      "Being with you feels like home 🏠"
    ],
    description: "I've created something special just for you. A little journey through my heart, filled with love, laughter, and all the reasons why you mean the world to me. Are you ready to explore it together? ✨",
    ctaButtons: {
      primary: {
        text: "Let's Have Some Fun!",
        icon: "💕",
        route: "/quiz"
      },
      secondary: {
        text: "Skip to the Big Question",
        icon: "💍",
        route: "/proposal"
      }
    }
  },

  // Quiz Questions and Responses
  quiz: {
    title: "How Well Do You Know Us? 💕",
    questions: [
      {
        id: 1,
        question: "Which word best describes us together?",
        options: [
          "Adventurous explorers 🌍",
          "Cozy homebodies 🏠",
          "Funny comedians 😂",
          "Romantic dreamers 💕"
        ],
        correct: 3, // Index of correct answer
        responses: [
          "We do love adventures, but there's something more... 🌍",
          "Home is wherever you are, but that's not all... 🏠",
          "You make me laugh every day, but there's something deeper... 😂",
          "Exactly! We're both hopeless romantics who believe in love! 💕"
        ],
        explanation: "We're both dreamers who believe in the magic of love and creating beautiful moments together."
      },
      {
        id: 2,
        question: "If we had to choose a song that represents us, which would it be?",
        options: [
          "Something upbeat and fun 🎵",
          "A slow, romantic ballad 💕",
          "An old classic that never gets old 🎶",
          "A song that makes us both smile 😊"
        ],
        correct: 3,
        responses: [
          "We do love fun songs, but there's one that fits us better... 🎵",
          "Romantic ballads are beautiful, but we're more than that... 💕",
          "Classics are timeless, just like our connection... 🎶",
          "Perfect! Any song that makes you smile is our song! 😊"
        ],
        explanation: "The best songs are the ones that make us both light up with joy."
      },
      {
        id: 3,
        question: "What's one thing you've noticed about me that I love?",
        options: [
          "How I always make you laugh 😂",
          "The way I look at you 💕",
          "How I remember little details about you 🧠",
          "All of the above! ✨"
        ],
        correct: 3,
        responses: [
          "Your laughter is music to my ears! 😂",
          "I can't help but look at you with love! 💕",
          "I notice everything about you because you matter so much! 🧠",
          "Exactly! I love making you laugh, looking at you with love, and remembering every detail! ✨"
        ],
        explanation: "Everything about you is worth noticing and remembering."
      },
      {
        id: 4,
        question: "Which of these reasons do you think I like you for most?",
        options: [
          "Your beautiful smile 😊",
          "Your amazing personality ✨",
          "Your kind heart 💖",
          "Everything about you! 💕"
        ],
        correct: 3,
        responses: [
          "Your smile lights up my world! 😊",
          "Your personality is absolutely amazing! ✨",
          "Your kind heart is what I love most! 💖",
          "You're absolutely right - I love everything about you! 💕"
        ],
        explanation: "There's not a single thing about you that I don't love."
      },
      {
        id: 5,
        question: "What do I love doing most when you're around?",
        options: [
          "Making you laugh 😂",
          "Having deep conversations 💬",
          "Just being together in silence 🤗",
          "All of the above! 💕"
        ],
        correct: 3,
        responses: [
          "Your laughter is the best sound in the world! 😂",
          "I love our conversations - they're my favorite! 💬",
          "Even silence with you is beautiful! 🤗",
          "Exactly! I love everything we do together! 💕"
        ],
        explanation: "Every moment with you is special, whether we're talking, laughing, or just being together."
      },
      {
        id: 6,
        question: "What's my biggest wish for us?",
        options: [
          "To travel the world together 🌍",
          "To have amazing adventures ✨",
          "To make you happy forever 💖",
          "To grow old together 👴👵"
        ],
        correct: 2,
        responses: [
          "Travel would be amazing, but there's something more important... 🌍",
          "Adventures are great, but my wish is deeper... ✨",
          "Exactly! Your happiness is my only wish! 💖",
          "Growing old together would be wonderful, but first I want to make you happy! 👴👵"
        ],
        explanation: "Your happiness is the most important thing to me."
      }
    ],
    scoreMessages: {
      perfect: {
        title: "Perfect! You know me completely! 💕",
        message: "You understand my heart better than anyone. This is why I love you so much! 💖",
        emoji: "🎉"
      },
      excellent: {
        title: "Amazing! You know me so well! ✨",
        message: "You really understand my feelings. I'm so lucky to have you! 💕",
        emoji: "🌟"
      },
      good: {
        title: "Great job! You know me pretty well! 😊",
        message: "You understand me, and that makes me so happy! 💖",
        emoji: "💕"
      },
      okay: {
        title: "That's okay! We'll learn more about each other! 💕",
        message: "Every day I get to know you better, and I love that journey! 💖",
        emoji: "🌱"
      }
    }
  },

  // Proposal Page Content
  proposal: {
    title: "Will You Be My Girlfriend?",
    subtitle: "I've been thinking about this for a while, and I can't imagine my life without you.",
    description: "You bring so much joy, laughter, and love into my world. Would you do me the incredible honor of being my girlfriend? 💖",
    buttons: {
      yes: {
        text: "YES! 💕",
        celebration: "I'm the luckiest person in the world! 🌟"
      },
      maybe: {
        text: "Let me think about it... 🤔",
        message: "Take your time, beautiful. I'll be here whenever you're ready. 💕"
      }
    },
    celebration: {
      title: "YES! YES! YES! 💕",
      subtitle: "This is just the beginning! 💖",
      messages: [
        "I promise to love you, cherish you, and make you smile every single day.",
        "We're going to have so many amazing adventures together!",
        "Thank you for saying yes and making my dreams come true! ✨",
        "You've made me the happiest person alive! 💖"
      ],
      cta: "Start Our Love Story Again 💕"
    },
    sweetMessages: [
      {
        icon: "💖",
        title: "You're Amazing",
        message: "Every day with you is a gift I treasure"
      },
      {
        icon: "✨",
        title: "You're Special",
        message: "You make ordinary moments extraordinary"
      },
      {
        icon: "💕",
        title: "You're Loved",
        message: "My heart belongs to you completely"
      }
    ]
  },

  // Audio Configuration
  audio: {
    backgroundMusic: {
      enabled: true,
      src: "/audio/romantic-background.mp3", // Place your audio file here
      volume: 0.3,
      loop: true
    },
    soundEffects: {
      enabled: true,
      buttonClick: "/audio/button-click.mp3",
      correctAnswer: "/audio/correct-answer.mp3",
      celebration: "/audio/celebration.mp3"
    }
  },

  // Animation Settings
  animations: {
    floatingHearts: {
      enabled: true,
      frequency: 2000, // milliseconds between hearts
      count: 20 // number of hearts on screen
    },
    particles: {
      enabled: true,
      count: 50,
      speed: 1
    },
    confetti: {
      enabled: true,
      duration: 5000, // milliseconds
      pieces: 200
    }
  },

  // Easter Eggs
  easterEggs: {
    konamiCode: {
      enabled: true,
      message: "You found the secret! I love you even more! 💕",
      action: "extraHearts"
    },
    clickCount: {
      enabled: true,
      threshold: 10,
      message: "You're so curious! I love that about you! 😊"
    }
  },

  // Footer
  footer: {
    message: "Made with ❤️ by Sohil Yadav",
    subMessage: "Every moment with you is a treasure 💕"
  }
};

export default romanticConfig;
