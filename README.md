# 💕 Romantic Proposal Website

A **production-ready, full-featured** romantic website to ask someone special to be your girlfriend! Built with React, TailwindCSS, and lots of love. This isn't just a template - it's a hand-crafted, heartfelt experience designed to guide your special someone through an emotional journey.

## ✨ Features

### 🏠 **Home Page - Warm Welcome**
- **Floating particle system** with animated background elements
- **Cycling romantic messages** that change every 3 seconds
- **Smooth scroll animations** and parallax effects
- **Background music toggle** with royalty-free placeholder
- **Easter eggs** including Konami code and click interactions
- **Responsive design** that works perfectly on all devices

### 💕 **Fun Quiz - Interactive Journey**
- **6 thoughtful questions** designed to build emotional connection
- **Smart response system** with different messages for each answer
- **Progress tracking** with beautiful animations
- **Score-based celebrations** with personalized messages
- **Sound effects** for correct answers and interactions
- **Smooth transitions** between questions

### 💍 **Proposal Page - The Big Reveal**
- **Elegant proposal text** with customizable content
- **Confetti celebration** with configurable duration and pieces
- **Floating hearts animation** during celebration
- **"Maybe" button** with supportive popup message
- **Celebration screen** with heartfelt promises
- **Emoji rain** and multiple celebration effects

### 🎨 **Design & Experience**
- **Soft romantic color palette** (pinks, pastels, warm gradients)
- **Custom fonts** (Dancing Script, Playfair Display)
- **Glassmorphism effects** and backdrop blur
- **Smooth hover animations** and micro-interactions
- **Fully responsive** for mobile and desktop
- **Accessibility features** and keyboard navigation

### 🔧 **Easy Customization**
- **JSON configuration system** - edit content without touching code
- **Modular component structure** with clear comments
- **Audio system** with background music and sound effects
- **Animation controls** - enable/disable effects as needed
- **Color customization** through Tailwind config

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download this project**
   ```bash
   # If you have git, you can clone it
   git clone <your-repo-url>
   cd romantic-proposal-website
   
   # Or simply download and extract the files
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see your romantic website!

## 🎨 Customization

### **Easy Configuration System**

All content is stored in `src/config/romanticConfig.js` - edit this file to customize everything without touching component code!

#### **Personal Information**
```javascript
personal: {
  yourName: "Sohil Yadav",           // Your name
  herName: "Beautiful",              // How you address her
  relationship: "girlfriend",        // Can be "boyfriend", "partner", etc.
}
```

#### **Home Page Messages**
```javascript
home: {
  heroTitle: "Hello Beautiful! 💕",
  subtitle: "I've created something special just for you...",
  messages: [
    "Welcome to our love story 💕",
    "You make my heart skip a beat ✨",
    // Add your own messages...
  ],
  description: "Your custom description here...",
}
```

#### **Quiz Questions**
```javascript
quiz: {
  questions: [
    {
      question: "Which word best describes us together?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correct: 3, // Index of correct answer
      responses: ["Response 1", "Response 2", "Response 3", "Response 4"],
      explanation: "Why this answer is special..."
    },
    // Add more questions...
  ]
}
```

#### **Proposal Content**
```javascript
proposal: {
  title: "Will You Be My Girlfriend?",
  subtitle: "I've been thinking about this for a while...",
  description: "You bring so much joy, laughter, and love...",
  buttons: {
    yes: { text: "YES! 💕", celebration: "I'm the luckiest person in the world! 🌟" },
    maybe: { text: "Let me think about it... 🤔", message: "Take your time, beautiful..." }
  }
}
```

#### **Audio Configuration**
```javascript
audio: {
  backgroundMusic: {
    enabled: true,
    src: "/audio/romantic-background.mp3",
    volume: 0.3,
    loop: true
  },
  soundEffects: {
    enabled: true,
    buttonClick: "/audio/button-click.mp3",
    correctAnswer: "/audio/correct-answer.mp3",
    celebration: "/audio/celebration.mp3"
  }
}
```

#### **Animation Controls**
```javascript
animations: {
  floatingHearts: { enabled: true, frequency: 2000, count: 20 },
  particles: { enabled: true, count: 50, speed: 1 },
  confetti: { enabled: true, duration: 5000, pieces: 200 }
}
```

### Adding Your Own Images

1. **Add images to the `public` folder**
2. **Update the components** to reference your images:
   ```javascript
   <img src="/your-image.jpg" alt="Description" />
   ```

### Changing Colors

Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'romantic-pink': '#YourColor',
  'soft-pink': '#YourColor',
  // Add more custom colors...
}
```

### Adding Audio Files

1. **Add audio files to `public/audio/` folder**
2. **Update the config** in `romanticConfig.js`:
   ```javascript
   audio: {
     backgroundMusic: { src: "/audio/your-music.mp3" },
     soundEffects: { buttonClick: "/audio/your-sound.mp3" }
   }
   ```

## 🎮 Easter Eggs & Hidden Features

### **Konami Code**
Try the classic Konami code: ↑↑↓↓←→←→BA
- Triggers extra floating hearts
- Shows a special message

### **Click Counter**
Click on hearts or the title multiple times to discover hidden messages!

### **Sound Effects**
- Button clicks play subtle sound effects
- Correct quiz answers have special sounds
- Celebration triggers confetti + sound

### **Responsive Animations**
- Particles adapt to screen size
- Hearts float at different speeds
- Mobile-optimized touch interactions

## 🚀 Deployment

### Deploy to Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder
   - Your site will be live instantly!

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script** to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 📁 Project Structure

```
romantic-proposal-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Home.js          # Home page with animations
│   │   ├── Quiz.js          # Interactive quiz page
│   │   ├── Proposal.js      # Proposal page with confetti
│   │   ├── Navigation.js    # Navigation component
│   │   └── Footer.js        # Footer component
│   ├── App.js               # Main app component with routing
│   ├── index.js             # Entry point
│   └── index.css            # Global styles and Tailwind
├── package.json
├── tailwind.config.js       # Tailwind configuration
└── README.md
```

## 🎨 Design Features

- **Romantic Color Palette**: Soft pinks, pastels, and warm gradients
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Responsive Design**: Works perfectly on all devices
- **Interactive Elements**: Hover effects, click animations, and scroll effects
- **Confetti Celebration**: React Confetti for the proposal moment
- **Floating Hearts**: Animated hearts throughout the experience

## 💡 Tips for Success

1. **Test on mobile devices** to ensure everything looks perfect
2. **Add your own photos** to make it more personal
3. **Customize the messages** to reflect your relationship
4. **Test the quiz questions** to make sure they're fun and appropriate
5. **Consider adding a background music file** for the full romantic experience
6. **Try the Easter eggs** to make the experience more fun and interactive
7. **Adjust animation settings** if performance is an issue on older devices

## 💕 The Emotional Journey

This website is designed to guide your special someone through a carefully crafted emotional experience:

### **Page 1: Warm Welcome**
- Creates anticipation and excitement
- Floating particles and gentle animations set a romantic mood
- Cycling messages build emotional connection
- Easter eggs add playfulness and discovery

### **Page 2: Interactive Connection**
- Quiz questions are designed to be thoughtful, not trivial
- Each answer reveals something about your feelings
- Progress tracking builds anticipation
- Score-based responses make them feel special

### **Page 3: The Big Moment**
- Elegant, heartfelt proposal text
- Celebration effects make the "Yes" moment magical
- "Maybe" option shows respect and understanding
- Celebration screen reinforces the commitment

## 🎨 Creative Touches

- **Floating particles** that respond to screen size
- **Parallax scrolling** effects on background elements
- **Glassmorphism** design elements for modern appeal
- **Smooth transitions** between all states and pages
- **Responsive typography** that scales beautifully
- **Touch-optimized** interactions for mobile devices
- **Accessibility features** for inclusive design

## 🛠️ Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   # Then run npm start again
   ```

2. **Build errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Styling not working**
   - Make sure TailwindCSS is properly configured
   - Check that `@tailwind` directives are in your CSS file

## 💕 Final Notes

This website is designed to be romantic, fun, and memorable. Feel free to customize it to make it uniquely yours. The most important thing is that it comes from the heart!

Good luck with your proposal! 💖

---

**Made with ❤️ by Sohil Yadav**

*Every moment with you is a treasure 💕*

