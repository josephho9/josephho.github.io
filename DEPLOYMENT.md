# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js installed (for local testing)

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right, then select "New repository"
3. Name your repository (e.g., `minimalist-cs-portfolio`)
4. Choose **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Initialize Git and Push Your Code

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. The page will automatically deploy when you push to the `main` branch

### 4. Set Up Gemini API Key (Required for AI Chat)

1. Get your Gemini API key from: https://makersuite.google.com/app/apikey
2. In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `GEMINI_API_KEY`
5. Value: Paste your API key
6. Click **Add secret**

### 5. Trigger Deployment

The deployment will automatically start when you:
- Push to the `main` branch, OR
- Manually trigger it from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

### 6. Access Your Live Site

Once deployed, your site will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

For example, if your username is `johndoe` and repo is `minimalist-cs-portfolio`:
```
https://johndoe.github.io/minimalist-cs-portfolio/
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Update `vite.config.ts` and change `base: ...` to `base: '/'`
2. In GitHub Pages settings, add your custom domain
3. Update your DNS records as instructed by GitHub

## Troubleshooting

### Build Fails
- Check the **Actions** tab for error messages
- Ensure `GEMINI_API_KEY` secret is set correctly
- Verify all dependencies are in `package.json`

### Site Shows 404
- Wait a few minutes for deployment to complete
- Check that the base path in `vite.config.ts` matches your repository name
- Clear your browser cache

### AI Chat Not Working
- Verify `GEMINI_API_KEY` secret is set in GitHub repository settings
- Check browser console for errors
- Ensure the API key has proper permissions

## Updating Your Site

Simply push changes to the `main` branch:
```bash
git add .
git commit -m "Update portfolio"
git push
```

The site will automatically rebuild and deploy!

