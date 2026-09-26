KEDCO TECHNICAL AUTOMATION — GITHUB PAGES READY PACKAGE

PURPOSE
This folder is the PUBLIC / STATIC visual deployment copy of the frontend.
It is separate from the full local application and does not include the Node backend,
operational data folders, logs, credential documents, or private supervisor credentials.

MANUAL UPLOAD
1. Open your GitHub repository: yajibsmartsolution/KEDCO-Automation
2. Upload the CONTENTS of this folder to the publishing branch/folder.
3. The repository publishing root must contain index.html.
4. GitHub > Settings > Pages > choose the branch/folder you uploaded.
5. Public URL: https://yajibsmartsolution.github.io/KEDCO-Automation/

VERIFY
- Home: index.html
- Module navigator: ONLINE_PREVIEW.html
- GitHub Pages helper: .nojekyll

IMPORTANT
GitHub Pages is static hosting. Backend authentication, operational database writes,
real-time API operations and server-side workflows require the KEDCO backend.
Do not upload LOGIN_DETAILS_PRIVATE.csv, credential documents, .env files, databases,
logs or the cloud data folder to a public repository.
