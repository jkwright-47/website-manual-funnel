# Build a Website with Claude — Fast. Simple. Get Paid.

**A beginner-friendly guide to building real websites using AI — and turning it into income.**

Published by Build Faster Systems

---

## 1. Welcome

You don't need to be a developer to build websites.

With Claude and a few simple prompts, you can go from a blank screen to a fully published, professional website — in under an hour.

This guide shows you exactly how to do it, step by step.

No fluff. No theory. Just the steps that work.

---

## 2. What You'll Do

By the end of this guide, you will have:

- Built a real website using AI prompts
- Previewed it live on your computer
- Published it online using GitHub Pages (at no cost)
- Learned a repeatable process you can use for clients

Each step builds on the last. Follow them in order.

---

## 3. What You Need

Before you start, make sure you have:

- A computer (Mac or Windows)
- A reliable internet connection
- A free account at [claude.ai](https://claude.ai)
- A free account at [github.com](https://github.com)
- [VS Code](https://code.visualstudio.com) installed (free text editor — recommended)

That's everything. No coding background required.

---

## 4. Setup

**Step 1.** Create a new folder on your Desktop. Name it:
```
my-website
```

**Step 2.** Open VS Code. Go to **File → Open Folder** and select `my-website`.

**Step 3.** Inside the folder, create three new files:
- `index.html`
- `styles.css`
- `script.js`

To create a file in VS Code: click the **New File** icon in the sidebar, type the filename, and press Enter.

**Step 4.** Leave all three files empty for now. You'll fill them in the next step.

---

## 5. Build the Website

**Step 1.** Open [claude.ai](https://claude.ai) in your browser.

**Step 2.** Start a new conversation and paste this prompt — fill in the brackets:

> "Build me a clean, professional landing page for [describe the business — example: a local bakery, a personal trainer, a freelance photographer]. Include a hero section with a headline and call-to-action button, a short about section, a services section with 3 items, and a contact section with a simple form. Use HTML, CSS, and JavaScript in separate code blocks. Make it fully mobile responsive."

**Step 3.** Claude will return three code blocks: HTML, CSS, and JavaScript.

**Step 4.** Copy the HTML code. Paste it into `index.html`. Save the file.

**Step 5.** Copy the CSS code. Paste it into `styles.css`. Save the file.

**Step 6.** Copy the JavaScript code. Paste it into `script.js`. Save the file.

**Step 7.** Make sure your HTML file links to the CSS and JS files. Look for these lines near the top and bottom of `index.html`:

```html
<link rel="stylesheet" href="styles.css">
```
```html
<script src="script.js"></script>
```

If they're missing, ask Claude to add them.

---

## 6. Preview the Site

**Step 1.** Open your `my-website` folder on your Desktop.

**Step 2.** Double-click `index.html`. It will open in your browser.

**Step 3.** You'll see the website. Check it looks right.

**Step 4.** Resize the browser window to a narrow width to simulate mobile. Make sure nothing breaks or looks crowded.

If something looks off — don't worry. You'll fix it in the next step.

---

## 7. Improve the Design

Use targeted follow-up prompts in Claude to refine the site. Be specific about what you want to change.

**Typography and layout:**
- "Make the headline font larger and bolder."
- "Increase the line spacing so the text is easier to read."
- "Add more padding between each section."

**Color and style:**
- "Change the color scheme to dark navy and white."
- "Make the buttons rounded with a blue background and white text."

**Behavior:**
- "Make the navigation bar stay fixed at the top when scrolling."
- "Add a smooth scroll effect when clicking nav links."
- "Make the contact form show a success message after submitting."

**Workflow:**
1. Copy the updated code block from Claude
2. Replace the existing code in your file
3. Save the file
4. Refresh the browser

Repeat this until the site looks right.

---

## 8. Install Git

Git is the tool that lets you publish your site to the internet using GitHub Pages.

**On Mac:**

1. Open **Terminal** (press `Cmd + Space`, type "Terminal", press Enter)
2. Type this and press Enter:
```
git --version
```
3. If Git is not installed, macOS will prompt you to install it. Follow the on-screen steps.

**On Windows:**

1. Go to [git-scm.com](https://git-scm.com)
2. Download and run the installer
3. Keep all default settings during installation
4. After installation, open **Git Bash** (search for it in the Start menu)

**Verify Git is installed:**

```
git --version
```

You should see something like: `git version 2.x.x`

---

## 9. GitHub Setup

**Step 1.** Go to [github.com](https://github.com) and sign in.

**Step 2.** Click the **+** icon in the top-right corner → **New repository**.

**Step 3.** Fill in the details:
- Repository name: `my-website`
- Visibility: **Public**
- Do NOT check "Add a README file"

**Step 4.** Click **Create repository**.

**Step 5.** Open Terminal (Mac) or Git Bash (Windows).

**Step 6.** Navigate to your project folder:
```
cd ~/Desktop/my-website
```

**Step 7.** Run these commands one at a time:

```
git init
git add .
git commit -m "First website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

**Step 8.** Enter your GitHub username and password if prompted. (GitHub may ask you to use a personal access token instead of a password — follow the on-screen instructions if so.)

Your files are now on GitHub.

---

## 10. Make the Site Live

**Step 1.** Go to your repository on GitHub.

**Step 2.** Click **Settings** (tab near the top of the page).

**Step 3.** In the left sidebar, click **Pages**.

**Step 4.** Under **Source**, select:
- Branch: `main`
- Folder: `/ (root)`

**Step 5.** Click **Save**.

**Step 6.** Wait 1–2 minutes.

**Step 7.** Refresh the page. You'll see a green banner with your live URL:

```
https://your-username.github.io/my-website
```

Your site is live. Anyone in the world can now view it at that link.

**To update the site later:**

Make changes to your files, then run:
```
git add .
git commit -m "Update site"
git push
```

GitHub Pages will update automatically within a minute or two.

---

## 11. Turn This Into a Skill

You just built and published a real website. That's a skill most people don't have.

Here's how to develop it further and make it repeatable.

**Build practice sites:**
- Pick 3 fake businesses (bakery, gym, photographer, law firm)
- Build a landing page for each one using different prompts
- Each site will teach you something new about how Claude responds

**Study what works:**
- Notice which prompts produce better layouts
- Save prompts that gave you great results
- Build a personal library of prompts that you can reuse

**Refine your process:**
- Time yourself — how fast can you go from prompt to published site?
- Aim to get it under 60 minutes from start to finish
- Document your steps so you can repeat them every time

**Build your portfolio:**
- Host each practice site on GitHub Pages with a different repo name
- Create a simple portfolio page that links to all of them
- Add it to your LinkedIn profile and bio

---

## 12. Pricing + Clients

Once you can consistently build and publish a site, you're ready to charge for it.

**Starter pricing (suggested):**

| Package | Price | What's Included |
|---|---|---|
| Starter Site | $300–$500 | 1-page site, mobile responsive, live on GitHub Pages |
| Standard Site | $500–$1,000 | 3–5 pages, contact form, basic SEO setup |
| Premium Site | $1,000–$2,500 | Custom design, revisions, custom domain, 30-day support |

Start at the lower end. Raise your rates after your first 2–3 clients.

---

**Where to find your first clients:**

- Friends, family, and people you already know who run businesses
- Local small businesses — restaurants, salons, gyms, barbershops
- Facebook Groups for small business owners in your area
- Nextdoor or local community boards
- LinkedIn — search for small business owners and message them directly
- Instagram — local businesses that are active but have no website link in bio

---

**How to approach them:**

Keep your outreach short and specific.

> "Hey [Name], I noticed your business doesn't have a website yet. I build clean, professional sites fast — usually live within a few days. Would you be open to a quick call to see if it's a fit?"

Don't pitch features. Lead with the outcome: a live website, fast.

---

**How to close the deal:**

1. Get on a short call (15–20 minutes)
2. Ask what they do, who their customers are, and what they want people to do on the site
3. Propose a simple package with a clear price
4. Ask for 50% upfront before you start
5. Deliver within the timeline you promised

---

**After the site is live:**

- Offer a monthly maintenance package ($50–$150/month) for updates and hosting support
- Ask for a referral or testimonial
- Use their site as a portfolio piece for future clients

---

## 13. Closing

You now have everything you need to build websites, publish them, and get paid.

Here's what you've learned:
- How to use AI prompts to generate real website code
- How to preview, refine, and finalize a site
- How to publish it live using GitHub Pages
- How to find clients and price your work

The only thing left is to do it.

Build your first practice site today — even if it's not perfect. The speed comes from repetition, not perfection.

Every website you build makes the next one faster and better.

---

**If you get stuck:**

Go back to Claude. Describe exactly what isn't working. Paste your code if needed. It will help you fix it.

**If you want guidance:**

Book a 20-minute consultation at [buildfastersystems.com](#). We'll map out your first project, review your setup, and get you moving with a clear plan.

---

*Build Faster Systems — buildwebsitesfaster.com*

*Guide by Jerome K. Wright*
