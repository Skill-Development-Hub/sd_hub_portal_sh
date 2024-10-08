# sd_hub_portal_sh by Shahriar Hussain (Incomplete/Under Progress)
### Important DISCLAIMER! (Read this before Copying or Using anything from this Repository for any purposes)

<details>
    <summary>Click Here to expand</summary>

## REPOSITORY DISCLAIMER

The information provided by Skill-Development-Hub /
sd_hub_portal_sh (“we,” “us,” or “our”) on [Repository URL](https://github.com/Skill-Development-Hub/sd_hub_portal_sh) (the “Repository”) is for general informational purposes only. All information in the Repository is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information in the Repository. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE REPOSITORY OR RELIANCE ON ANY INFORMATION PROVIDED IN THE REPOSITORY. YOUR USE OF THE REPOSITORY AND YOUR RELIANCE ON ANY INFORMATION IN THE REPOSITORY IS SOLELY AT YOUR OWN RISK.

## EXTERNAL LINKS DISCLAIMER

The Repository may contain (or you may be sent through the Repository) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE REPOSITORY OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
</details>

### Steps to Create SD HUb Management Portal using Angular and NodeJs

**Basic Requirements:** *(Link(s) in this README are mostly for Windows User 10 & Above)*

- [Git](https://git-scm.com/downloads)
- [VsCode Editor](https://code.visualstudio.com/download)
- [Angular](https://angular.dev/tools/cli/setup-local)
- [NodeJs](https://nodejs.org/en/download/prebuilt-installer)

## Read and follow these instructions carefully

**Step 1:** Download & Install Vscode editor

**Step 2:** Download & Install git

**Step 3:** To setup Git in VScode follow these instructions.

---

## **Warning!!**

Make sure you save/config/login your *github account* in the system you trust or own. Also if you doing it just for *Educational purposes only* (for eg: in a training institute's PC), then make sure to *LOG OUT. or remove config*

For this, please refer- *Please read carefully*
https://stackoverflow.com/questions/28238037/git-log-out-user-from-command-line

---
To setup Git in VScode - follow this guide
https://www.geeksforgeeks.org/how-to-install-git-in-vs-code/

**Step 4:** After successfully setting up Git in VsCode <br>
Let us start creating our project.

*Note: It is recommended to start in a new empty folder.*

* Open/Create folder in VsCode
* Open Terminal
* Navigate to folder *(Ignore this step if folder directly opened in VScode)*


**Step 5:**
Installing Angular.

In the Terminal *(inside VsCode)*, type

```bash
npm install -g @angular/cli
```

**Step 6:**
Creating a project.

Again in the same terminal, type

```bash
ng new angular_project_name --standalone false
```

*If you're getting problems when running Angular commands for the first time,  it's mostly likely due to execution policy on Windows.*
<details>
    <summary>Just follow this procedure (Click here to expand)</summary>

* Enter the following command in terminal.

```bash
 Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

* Then restart the terminal, then run angular commands again.

*Note: It needs to be executed only once, no need to run for every angular project creation.*
</details>

---
*More information in progress, will update this repo in future.*
