# GitHub Pages Deployment Guide

This document outlines the standard process to build and deploy the latest Angular code from the `main` branch to the `gh-pages` branch for live viewing on GitHub.

## Prerequisites
- You must be on the `main` branch with the latest code pulled.
- You must have Node.js and NPM installed.
- Open PowerShell or Command Prompt in the `application` folder.

## Step-by-Step Deployment Process

### 1. Ensure Dependencies are Installed
Before building, make sure all your Node modules are up to date.
```bash
npm install
```

### 2. Build the Application
Create a production build of the Angular application. This command reads `angular.json` and outputs the compiled files to `dist/application/browser`.
```bash
npm run build
```

### 3. Setup Routing for GitHub Pages (Important!)
Because Angular uses client-side routing, deep links (like `/services` or `/about`) will return a 404 error if directly accessed on GitHub Pages. To fix this, we must duplicate the `index.html` file and name it `404.html` before deploying.

**On Windows:**
```cmd
copy dist\application\browser\index.html dist\application\browser\404.html
```
**On Mac/Linux:**
```bash
cp dist/application/browser/index.html dist/application/browser/404.html
```

### 4. Deploy to GitHub Pages
We use `angular-cli-ghpages` to safely push only the built `dist` folder to the `gh-pages` branch without overwriting your `main` branch. 
```bash
npx angular-cli-ghpages --dir=dist/application/browser
```

## Automating the Process
To make this easier in the future, you can add a script to your `package.json`. Open `package.json`, find the `"scripts"` section, and add:

```json
"scripts": {
  "deploy": "npm run build && copy dist\\application\\browser\\index.html dist\\application\\browser\\404.html && npx angular-cli-ghpages --dir=dist/application/browser"
}
```
*(Note: Use `cp` instead of `copy` if you switch to Mac/Linux).*

Once that script is added, you can simply run:
```bash
npm run deploy
```
...anytime you want to push your latest changes live to GitHub Pages!
