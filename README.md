# Daily GCSE Quiz

A phone notification at **8am on weekdays and 11am at weekends (UK time)**. Tap it and a page opens with
**10 multiple-choice questions** from topics you've studied, mixed across subjects. You get your score out of 10
at the end, with the right answers and a one-line explanation for each.

It runs in the cloud (GitHub), so it works when your laptop is off.

```
GitHub Actions (each evening)  -->  ntfy (holds it until 8am / 11am)  -->  your phone  -->  tap  -->  quiz page (GitHub Pages)
```

**Why it's set up this way:** GitHub's scheduler is "best effort" and can run hours late, so it isn't trusted with the exact time.
Each evening it just *queues tomorrow morning's* notification with ntfy, and ntfy delivers it at exactly 8am (weekdays) or 11am
(weekends) UK time, including across the clocks changing. If GitHub is late, there's still plenty of slack.

## One-time setup

### 1. Phone
1. Install **ntfy** from the Google Play Store.
2. Open it, tap **+**, and subscribe to a private topic name. Use a long random one, because anyone who
   knows the name could send you notifications. Example format: `gcse-quiz-` followed by about 18 random letters and numbers.
3. Allow notifications when Android asks.

### 2. GitHub
1. Make a free account at github.com if you don't have one.
2. Create a **new public repository** (for example `gcse-daily-quiz`). Don't add a README.
3. In PowerShell, in this folder, run (swap in your username and repo name):
   ```
   git init -b main
   git add .
   git commit -m "Daily GCSE quiz"
   git remote add origin https://github.com/YOUR-USERNAME/gcse-daily-quiz.git
   git push -u origin main
   ```
   The first push opens a browser window to sign in to GitHub. If `git commit` complains about your identity, run
   `git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"`, then commit again.
4. In the repo go to **Settings > Secrets and variables > Actions > New repository secret**.
   Name: `NTFY_TOPIC`, value: the exact topic name you used in the ntfy app.
5. Go to **Settings > Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.
   After about a minute your quiz is live at `https://YOUR-USERNAME.github.io/gcse-daily-quiz/`.

### 3. Test it
Repo > **Actions** > *Daily quiz notification* > **Run workflow**. There are two modes:
- **now** (default): buzzes your phone immediately, to check the connection. Tap the notification to open the quiz.
- **schedule**: queues the next 8am / 11am notification straight away.

After the first run it queues each morning's notification by itself every evening.

## Changing what you're asked about

Open `studied.json`. Only topics listed there are ever used. Each entry is a whole subject, a unit, or one topic, and the
names match the tabs of your GCSE Specification Tracker exactly:

```json
{ "subject": "Chemistry", "unit": "5.7 Organic chemistry" }
{ "subject": "Physics", "topic": "Half-life" }
{ "subject": "German" }
```

Then run `node tools/build-questions.js`. It checks `studied.json` for typos and warns about any listed area that has no questions yet.
Push the change (`git add . ; git commit -m "Update studied" ; git push`) and the next quiz uses it.

## Adding or fixing questions

Questions live in `tools/src/*.js`, one file per subject, one line per question:

```js
[topic, question, correct answer, [wrong 1, wrong 2, wrong 3], explanation]
```

Then run `node tools/build-questions.js`. It checks every question, prints coverage per subject, and rebuilds `questions.json`.
Add `--missing` to list tracker topics that have no questions yet.

## Good to know
- GitHub's scheduler can run late (on 21 Sept 2026 it ran about 6 hours late), which is why the exact time is handled by ntfy, not GitHub.
- Test the timing logic with `node tools/next-send.js --test` (it covers weekdays, weekends and the clocks changing).
- GitHub pauses scheduled workflows after 60 days with no activity in the repo. Updating `studied.json` counts as activity. If the
  notifications ever stop, open the **Actions** tab and click *Enable workflow*.
- Your scores, streak and history are stored **on your phone's browser**, so use the same browser each time.
- The page normally loads `questions.json` and `studied.json` live, so changes take effect as soon as they're pushed. It also carries a built-in
  copy (refreshed by `node tools/build-questions.js`), so opening `index.html` straight from your computer still works.
- Test the page locally with `node tools/serve.js`, then open http://localhost:5173. Add `?all=1` to include every topic, or `?reset=1` to clear today's attempt.
