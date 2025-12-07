# How to Edit Your Portfolio Website

This guide shows you exactly where to edit different parts of your portfolio.

## 🎯 Main Content File: `constants.ts`

**This is the most important file!** Most of your content lives here.

### 1. Personal Information

Edit the `PERSONAL_INFO` object in `constants.ts`:

```typescript
export const PERSONAL_INFO = {
  name: "Your Name",                    // Your full name
  title: "Your Title",                  // e.g., "Computer Science Student"
  tagline: "Your tagline",              // Short description
  about: "Your bio paragraph...",       // Longer about section
  email: "your.email@example.com",      // Contact email
  location: "Your City, State"           // Your location
};
```

### 2. Experience Section

Edit the `EXPERIENCE` array in `constants.ts`:

```typescript
export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Company Name",
    position: "Your Position",
    period: "Start Date - End Date",     // e.g., "June 2024 - Present"
    description: [
      "First bullet point",
      "Second bullet point",
      "Third bullet point"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"]  // Technologies used
  },
  // Add more experience items here...
];
```

**To add more experience:**
- Copy an existing experience object
- Paste it in the array
- Update the details

**To remove experience:**
- Delete the entire object from the array

### 3. Projects Section

Edit the `PROJECTS` array in `constants.ts`:

```typescript
export const PROJECTS: Project[] = [
  {
    title: "Project Name",
    description: "What your project does...",
    technologies: ["Tech1", "Tech2"],
    year: "2024",
    link: "https://your-project-demo.com",      // Optional: live demo
    github: "https://github.com/you/project"    // Optional: GitHub repo
  },
  // Add more projects here...
];
```

**Note:** Both `link` and `github` are optional. You can remove them if you don't have a demo or GitHub repo.

### 4. Social Links

Edit the `SOCIALS` array in `constants.ts`:

```typescript
export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com/yourhandle", icon: "Twitter" },
  // Add more social links...
];
```

**Available icons:** `Github`, `Linkedin`, `Twitter`, `Mail`, `Globe`, `Code`, `ExternalLink`

### 5. Navigation Links

Edit the `NAV_LINKS` array if you want to change the navigation menu:

```typescript
export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
```

## 🎨 Styling & Colors

### Change Colors

Edit `index.html` (around line 9-18) to change the color scheme:

```javascript
colors: {
  background: '#0a0a0a',    // Main background (dark)
  surface: '#171717',       // Card/surface background
  primary: '#ededed',       // Main text color
  secondary: '#a1a1a1',     // Secondary text color
  accent: '#3b82f6',        // Accent color (links, buttons)
}
```

### Change Fonts

Edit `index.html` (around line 20) to change fonts:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

You can use any Google Font by adding it to the `<head>` section and updating this line.

## 📄 Page Title & Meta

Edit `index.html` (line 6) to change the page title:

```html
<title>Your Name | Portfolio</title>
```

## 🧩 Component Files

If you want to customize the layout or structure, edit files in the `components/` folder:

- **`Hero.tsx`** - Hero/About section layout
- **`Experience.tsx`** - Experience section layout
- **`Projects.tsx`** - Projects section layout
- **`Contact.tsx`** - Contact section layout
- **`Navbar.tsx`** - Navigation bar
- **`AIChatWidget.tsx`** - AI chat widget (advanced)

**Note:** Only edit these if you want to change the structure. For content, use `constants.ts`.

## 🤖 AI Chat Customization

The AI chat uses your portfolio content to answer questions. To customize the AI's knowledge:

1. Edit `services/geminiService.ts` to change the system prompt
2. The AI automatically reads from `constants.ts` to answer questions

## 🚀 Viewing Your Changes

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Navigate to `http://localhost:3000`

3. **Changes appear automatically:**
   The page will hot-reload when you save files!

## 💡 Quick Tips

- **Most edits** → Edit `constants.ts`
- **Color changes** → Edit `index.html` (Tailwind config)
- **Layout changes** → Edit component files in `components/`
- **Always test** → Run `npm run dev` to see changes
- **Save often** → Files auto-reload in the browser

## 📝 Example: Complete Personalization

Here's a quick example of personalizing everything:

1. **Open `constants.ts`**
2. **Replace all placeholder text:**
   - Change "Alex Dev" to your name
   - Update all experience entries
   - Add your real projects
   - Update social links with your profiles
3. **Open `index.html`**
4. **Change the title** to your name
5. **Run `npm run dev`** to see your changes!

---

**Need help?** Check the component files to see how the data is used, or refer to the main `README.md` for setup instructions.

