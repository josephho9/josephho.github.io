# Minimalist CS Portfolio

A clean, minimalist portfolio website for Computer Science students featuring an AI-powered "Chat with my Resume" assistant.

## ✨ Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **AI Chat Assistant**: Interactive chatbot powered by Google Gemini that answers questions about your resume
- **Sections**:
  - Hero/About section with personal introduction
  - Experience timeline
  - Featured projects showcase
  - Contact form and social links
- **Smooth Scrolling**: Elegant navigation with scroll animations
- **Custom Cursor**: Interactive mouse follower effect

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via CDN)
- **Google Gemini API** - AI chat functionality
- **Lucide React** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/minimalist-cs-portfolio.git
   cd minimalist-cs-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 📝 Customization

Edit the following files to personalize your portfolio:

- **`constants.ts`** - Update personal info, experience, projects, and social links
- **`metadata.json`** - Change site name and description
- **`index.html`** - Modify page title and meta tags
- **Components** - Customize individual sections in the `components/` directory

## 🚢 Deployment

This project is configured for easy deployment to GitHub Pages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Steps:

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings (use GitHub Actions)
3. Add `GEMINI_API_KEY` as a repository secret
4. Your site will automatically deploy!

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork it and customize it for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and TypeScript
