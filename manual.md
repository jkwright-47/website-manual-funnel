# Build Client-Ready Websites in Under 1 Hour Using AI

**A Step-by-Step Manual for Beginners**

*Published by Build Faster Systems*
*Master the System. Build Fast.*

---

## Table of Contents

1. Welcome
2. What You'll Do
3. What You Need
4. Setup
5. Build the Website
6. Preview the Site
7. Improve the Design
8. Install Git
9. GitHub Setup
10. Make the Site Live
11. The 5 Prompts (Bonus)
12. Turn This Into a Skill
13. Pricing + Clients
14. Quick Reference
15. Closing

---

## 1. Welcome

You don't need to be a developer to build websites.

With Claude and a few simple prompts, you can go from a blank screen to a fully published, professional website — in under an hour.

This manual shows you exactly how to do it, step by step. Every section has a clear action. Follow them in order and you'll have a live site before you finish.

No fluff. No theory. Just the steps that work.

---

## 2. What You'll Do

By the end of this guide, you will have:

- Built a real website using AI prompts
- Previewed it live on your computer
- Published it online using GitHub Pages
- Learned a repeatable system you can use for any client

Each step builds on the last. Don't skip ahead.

---

## 3. What You Need

Before you start, make sure you have:

- A computer (Mac or Windows)
- A reliable internet connection
- A free account at [claude.ai](https://claude.ai)
- A free account at [github.com](https://github.com)
- [VS Code](https://code.visualstudio.com) installed (free — recommended)

That's everything. No prior experience required.

---

## 4. Setup

**Step 1.** Create a new folder on your Desktop. Name it:
```
my-website
```

**Step 2.** Open VS Code. Go to **File → Open Folder** and select `my-website`.

**Step 3.** Inside the folder, create three new files:
- `index.html`
- `style.css`
- `script.js`

To create a file in VS Code: click the **New File** icon in the Explorer sidebar, type the filename, and press Enter.

**Step 4.** Leave all three files empty for now. You'll fill them in the next step.

---

## 5. Build the Website

**Step 1.** Open [claude.ai](https://claude.ai) in your browser and start a new conversation.

**Step 2.** Use this starter prompt. Fill in the brackets with the actual business:

> "Build me a clean, professional landing page for [business type — example: a local barbershop, a freelance photographer, a personal trainer]. Include: a hero section with a headline and CTA button, a short about section, a services section with 3 items, and a contact section with a form. Write the HTML, CSS, and JavaScript in separate code blocks. Make it fully mobile responsive."

**Step 3.** Claude will return three code blocks: HTML, CSS, and JavaScript.

**Step 4.** Copy the HTML. Paste it into `index.html`. Save.

**Step 5.** Copy the CSS. Paste it into `style.css`. Save.

**Step 6.** Copy the JavaScript. Paste it into `script.js`. Save.

**Step 7.** Check that `index.html` links to the other files. Look for these lines:

Near the top:
```html
<link rel="stylesheet" href="style.css">
```

Near the bottom:
```html
<script src="script.js"></script>
```

If either is missing, tell Claude: *"Add the link tag for style.css in the head and the script tag for script.js before the closing body tag."*

---

## 6. Preview the Site

**Step 1.** Open your `my-website` folder on the Desktop.

**Step 2.** Double-click `index.html`. It opens in your browser.

**Step 3.** Look it over. Does it match what you described?

**Step 4.** Narrow the browser window to a phone-width. Does it still look clean?

If something is off — move to the next step. You'll fix it there.

---

## 7. Improve the Design

Use follow-up prompts in Claude to fix specific things. Be exact about what you want changed.

**Layout and spacing:**
- *"Add more vertical spacing between each section."*
- *"Make the hero section taller with more padding."*
- *"Center the text in the hero section."*

**Typography:**
- *"Make the headline font larger and bolder."*
- *"Increase line spacing to make the body text easier to read."*
- *"Use the Google Font 'Inter' throughout the page."*

**Color and style:**
- *"Change the color scheme to dark navy (#1E3A8A) and white."*
- *"Make the buttons rounded with white text on a dark blue background."*
- *"Add a subtle box shadow to all cards."*

**Behavior:**
- *"Make the navigation bar stick to the top when scrolling."*
- *"Add a smooth scroll effect when clicking nav links."*
- *"Show a success message when the form is submitted."*

**Workflow after each change:**
1. Copy the updated code from Claude
2. Replace the old code in your file
3. Save
4. Refresh the browser

Repeat until it looks right.

---

## 8. Install Git

Git lets you push your site to GitHub and publish it online for free.

**On Mac:**

1. Open **Terminal** — press `Cmd + Space`, type "Terminal", press Enter
2. Type:
```
git --version
```
3. If Git isn't installed, macOS will prompt you. Follow the steps to install it.

**On Windows:**

1. Go to [git-scm.com](https://git-scm.com) and download the installer
2. Run the installer with all default settings
3. Open **Git Bash** from the Start menu when done

**Confirm it works:**
```
git --version
```
You should see: `git version 2.x.x`

---

## 9. GitHub Setup

**Step 1.** Go to [github.com](https://github.com) and sign in.

**Step 2.** Click the **+** icon → **New repository**.

**Step 3.** Set it up:
- Name: `my-website`
- Visibility: **Public**
- Do NOT add a README

**Step 4.** Click **Create repository**.

**Step 5.** Open Terminal (Mac) or Git Bash (Windows).

**Step 6.** Navigate to your project:
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

Replace `YOUR-USERNAME` with your GitHub username.

**Step 8.** If prompted for a password, GitHub requires a personal access token. Go to **GitHub → Settings → Developer Settings → Personal Access Tokens → Generate New Token**. Use that as your password.

Your files are now on GitHub.

---

## 10. Make the Site Live

**Step 1.** Open your repository on GitHub.

**Step 2.** Click **Settings**.

**Step 3.** In the left sidebar, click **Pages**.

**Step 4.** Under Source, set:
- Branch: `main`
- Folder: `/ (root)`

**Step 5.** Click **Save**.

**Step 6.** Wait 1–2 minutes, then refresh.

Your live URL will appear:
```
https://your-username.github.io/my-website
```

Share that link. It's real. It works on any device.

**To update the site after making changes:**
```
git add .
git commit -m "Update site"
git push
```

GitHub Pages updates automatically within a minute.

---

## 11. The 5 Prompts (Bonus)

These are the exact prompts to use in Claude for building client-ready websites fast. Copy them directly — adjust only the parts in brackets.

---

**Prompt 1 — Build the Full Site**

> "Build a clean, professional landing page for [business type]. Include a hero section with a headline and CTA button, an about section, a services section with 3 items, and a contact form. Write HTML, CSS, and JavaScript in separate code blocks. Make it mobile responsive and use Inter as the font from Google Fonts."

Use this to start every project. It produces a complete, structured site in one shot.

---

**Prompt 2 — Fix the Design**

> "The website looks plain. Make these improvements: increase font sizes, add more padding between sections, use a color scheme of dark navy (#1E3A8A) and white, round the buttons, and add subtle box shadows to cards. Return only the updated CSS."

Use this after you have the base site and want it to look more polished.

---

**Prompt 3 — Make It Mobile-Ready**

> "Check this HTML and CSS for mobile responsiveness. Fix any issues: text that's too large, elements that overflow the screen, buttons that are too small to tap, or images that don't resize correctly. Return the full corrected code."

Use this when the site looks off on a narrow browser window.

---

**Prompt 4 — Add a Contact Form**

> "Add a contact form to the existing site with fields for: Name, Email, Phone (optional), and Message. Add basic form validation — required fields must not be empty, and the email must be a valid format. When submitted successfully, show a confirmation message and hide the form. Use only HTML, CSS, and JavaScript — no backend required."

Use this when the client needs a working form on their site.

---

**Prompt 5 — Write the Copy**

> "Write website copy for a [business type] located in [city]. The owner's name is [name]. Include: a short punchy hero headline, a one-sentence subheadline, a 2–3 sentence about section, and three service descriptions with names and one-line summaries. Keep the tone professional and approachable. No filler words."

Use this when you need words for the site and the client hasn't given you content yet.

---

## 12. Turn This Into a Skill

You now have a repeatable system. Here's how to build on it.

**Practice on fake businesses:**
- Pick 3 business types: bakery, gym, photographer
- Build a landing page for each using Prompt 1
- Use Prompts 2–4 to refine each one
- Time yourself each round — aim for under 60 minutes

**Save what works:**
- Keep a notes file with prompts that gave great results
- Screenshot sites you like and describe them to Claude
- Build a personal prompt library over time

**Build a portfolio:**
- Host each practice site on GitHub Pages with different repo names
- Take screenshots of each
- Create a simple portfolio page listing your work
- Add the portfolio link to your LinkedIn bio

**Get faster:**
- Aim for your first site in under 60 minutes
- Aim for your second in under 45 minutes
- Speed comes from repetition — every site teaches you something

---

## 13. Pricing + Clients

Once you can build and publish a site reliably, you're ready to charge.

**Suggested packages:**

| Package | Price | What's Included |
|---|---|---|
| Starter | $300–$500 | 1-page site, mobile responsive, live on GitHub Pages |
| Standard | $500–$1,000 | 3–5 pages, contact form, basic SEO |
| Premium | $1,000–$2,500 | Custom design, revisions, custom domain, 30-day support |

Start at the lower end. Raise your rates after your first 2–3 projects.

---

**Where to find clients:**

- Friends and family who own businesses
- Local restaurants, salons, gyms, barbershops
- Facebook Groups for small business owners
- Nextdoor and local community boards
- LinkedIn — search for small business owners, message directly
- Instagram — find active local businesses with no website in their bio

---

**How to reach out:**

Short. Specific. No pitch.

> "Hey [Name] — I noticed [Business] doesn't have a website. I build clean, professional sites fast, usually live within a few days. Would you be open to a quick 15-minute call?"

Don't pitch features. Lead with the result: a live website, fast.

---

**How to close:**

1. Get on a short call (15–20 min)
2. Ask: what do you do, who's your customer, what should visitors do on the site?
3. Propose one simple package with a clear price
4. Collect 50% upfront before you start
5. Deliver on time

---

**After delivery:**

- Offer a monthly maintenance plan ($50–$150/month) for updates and support
- Ask for a written testimonial and a referral
- Use the site as a portfolio piece

---

## 14. Quick Reference

**The 3 files every site needs:**
```
index.html   — structure and content
style.css    — design and layout
script.js    — behavior and interaction
```

**Commands to publish:**
```bash
git init
git add .
git commit -m "First website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

**Commands to update:**
```bash
git add .
git commit -m "Update"
git push
```

**When you're stuck, tell Claude:**
- *"This part of the site looks broken: [describe it]. Here's my code: [paste it]. Fix it."*
- *"The mobile layout is wrong. Here's the CSS: [paste it]. Fix the responsiveness."*
- *"The form isn't working. Here's the JavaScript: [paste it]. Debug it."*

**5 prompts (quick list):**
1. Build the full site
2. Fix the design
3. Make it mobile-ready
4. Add a contact form
5. Write the copy

---

## 15. Closing

You now have everything you need.

You have the system, the prompts, the workflow, the pricing, and the process for finding clients.

The only step left is your first site. Build it today — not tomorrow.

It doesn't have to be perfect. It has to be done. Every site after the first one gets faster and better.

---

**Stuck?** Go back to Claude. Paste your code. Describe the problem. It will help you fix it.

**Want a faster start?** Book a 20-minute consultation at [buildfastersystems.com](https://buildfastersystems.gumroad.com/l/gqkhu). We'll map your first project, review your setup, and get you moving with a clear build plan — live, 1:1.

---

*Build Faster Systems*
*Master the System. Build Fast.*
*© 2025 Jerome K. Wright. All rights reserved.*
