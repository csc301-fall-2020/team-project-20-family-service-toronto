# Senior Simple Screen Development Team

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 

## Description 
 * Provide a high-level description of your application and it's value from an end-user's perspective
 * What is the problem you're trying to solve?
 * Is there any context required to understand **why** the application solves this problem?
 
## Description (Answer)
 * Our application is like a hub for accessing the most important apps that seniors use on a day-to-day basis. When you open our application, you will see 5 links to commonly used apps (Facebook, Whatsapp, Google, Zoom, Youtube) and a button to direct the user to links to 3 email options (Yahoo, Gmail, Outlook). Clicking on any of these 8 links will bring the user directly to the online application (or a simplified version of the application, which will be discussed later). All in all, our application allows a user to have all of his/her most-used apps in one place, eliminating any struggle with finding those applications in the first place. Likewise, some of these applications (such as Youtube) are simplified versions of the actual applications. These simplified versions aim to make users of our application less overwhelmed when accessing and utilizing specific applications nested in our app, because they have less options for what they can do in those applications (they only have access to essential features!). 
 * Our app attempts to solve the common troubles seniors have with accessing important apps on their phones. We have had several meetings with Rodrigo in which he outlines the struggles that seniors face on a day-to-day basis when trying to find, open and use apps on their phones. Seniors are much more easily overwhelmed by technology and the things that may go wrong with it (i.e. Zoom suddenly asking a senior to re-enter their password or enter the meeting ID) as well as all the instructions that come with navigating a certain application, given that many seniors did not grow up with technology the way younger generaions did. Our app aims to give seniors a less stressful encounter with technology by organizing all of their most-used apps into one application (that is easy to find on their phone) and simplifying some of the user interfaces / features for certain apps nested within our main application. 
 * There is no context required to understand why the application solves this problem. As mentioned before, the application is like a hub for accessing the most useful apps in a single place (in a very organized manner), and also includes some simplifications of most commonly used apps. 

## Key Features
 * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built

## Key Features (Answer)
*Main page:*
- A compilation of links/redirections to the seniors' most frequently used apps
- Keeps seniors' top applications all in one place, in an organized manner
- Eliminates need for seniors to scroll through their phone trying to find the apps that they want to access (instead they can just open up our main application!)
- Logos for each app are displayed so that seniors can remember that these were the apps that they had on their phones previously

*Google page:*
- Seniors have access to anything on the web (especially useful for seniors in particular because, as Rodrigo mentioned, they enjoy accessing reading materials online)
- Incredibly useful to have Google as part of our main application because it allows the seniors to access other ressources/applications that might not be available through our main application

*Whatsapp page:*
- One of the most used applications by seniors (as noted by Rodrigo)
- Seniors have access to messaging and phone calls through this application

*Facebook page:*
- Seniors have access to speaking with friends and famil
- Seniors can also look through photos of their friends and family, or share their own photos

*Zoom page:*
- Seniors have access to video calls for meetings, or virtual time with friends and family

*Email section*
- Access to 3 different types of emails (Gmail, Yahoo, Outlook) 
- Seniors have all emails in one place
- Especially useful if a senior has more than one email account 
- Email has its own subsection so that the main page is not overwhelmed with all of the different email options

*Youtube page:*
- Simplified version of youtube
- Allows seniors to easily search youtube videos without being distracted by all of the other youtube features (like account settings, etc.)
- Allows seniors to see video recommendations based on their search

*Back button:*
- Back button below applications (after having clicked on a certain app) allows seniors to easily navigate back to the main page
- Reminds them that they are in our application rather than in an app on their phone


## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully
 
## Instructions (Answer)
 Our Application is continuously deployed at the url:

 https://happy-goldwasser-7387af.netlify.app/

 This application is designed to be simple to use and clicking any of the 6 buttons and will take you to the respective displayed application or a simplified version
 of the application built into our application. For applications requiring an account (Facebook, Whatsapp, Email, Zoom), the user would need to login in or download
 the application in accordance to that application's policy.

 *Google:*
 - Type into the search bar what you would like to search
 - Hit Enter on your keyboard or the 'Google Search'
 - Press the return button at the bottom of the screen to return to the main application

 *Whatsapp:*
 - This will take the user to a page to install Whatsapp on their device

 *Facebook:*
 - This will open the Facebook page

 *Zoom:*
 - This will take the user to a page to install Zoom on their device

 *Email:*
 - This will open a page to an additional 3 buttons with the 3 email services provided: Gmail, Outlook, Yahoo! Mail
 - Each of these buttons will open the respective page.

 *Youtube:*
 - This is a simplified Youtube page. Type into the search bar what you would like to search
 - Hit Enter on your keyboard or the 'Search' button
 - There will be a video displayed according to the search and additional YouTube recommendations
 - Press the return button at the bottom of the screen to return to the main application

 Additionally, on a computer, a view of this application on a mobile device can be seen by right clicking anywhere on the page and selecting 'Inspect'. Click to 'Toggle device
 toolbar' (Ctrl + Shift + M) and selecting the type of device to view the page.


## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).


## Development requirements (Answer)
 This application was developed using React/Node. In order to set up this application, install NodeJS from nodejs.org
  1. In the console navigate into the \team-project-20-family-service-toronto\deliverable-2 folder
  2. In the console, install node dependenacies, using `npm install`
  3. (if not already installed) In the console, install YTSearch, by using `npm install YTSearch`
  4. To run the server locally, use `npm start`

 YTSearch library from Node was used to develop the simplified YouTube functionality

 Notable tools to use:
  - Git/Github for Version Control
  - Visual Studio Code as code editor, built-in console, version control 
 
## Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how
 * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it!

 Our whole CI/CD pipeline is built through CircleCi. We chose CircleCI due to its easy integration with Github and our development stack (React), as well as with the external
 deployment tool Netlify that we chose. We also considered the limits with Github actions and some members had previous experience with CircleCI.

 We have the master branch as the production branch. When making a code change, we need to make a new branch and make a Pull-Request from our new branch to master when we are ready to merge our changes. CircleCi will automatically run the tests that we have written and trigger a build in our branch and make sure everything is running succesfully. If everything is passing with our tests, we must get someone else on our team to approve the Pull-Request. This ensures that we follow best code practices and make sure that we do not miss anything. Once all the checks pass and our PR is approved, the one who made the PR can initiate a merge into master. The CircleCI tool will then trigger a deployment to Netlify where we can see our product in action. We chose Netlify because it is free and its ease of integration with our React application and CircleCi. Once the merge is done, we are able to view our running application on Netlify!

 This workflow ensures that we do not ever have any conflicts in our master branch and that the master branch is only where the clean and working code goes. All conflicts must be fixed when potentially merging to master or rebasing from master when someone has merged into master and someone else is trying to work in their local branch. This ensures that all team members can independently work and is good practice overall. (This is a common industry practice that some of the team members have experienced and thought was good to adopt).

 We chose a short message convention for our commit messages so that they are short and concise but also give meaningful information for other users. 

 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?

 Senior Simple Screen is licensed under [The MIT License](LICENSE).

 * What affect does it have on the development and use of your codebase?

 This license will allow others outside of our project group to freely look at our codebase and reuse the code for their own
 purpose as long as they include the original copy of the MIT License in their distribution. This directly affects us because now we can have external people contribute to the project if they so desire. In specific though, this does not directly affect our development. 

 * Why did you or your partner make this choice?

 We made this choice in the hope that the community and possible future csc301 groups can expand on our project and make it
 better than it already is. Since we are not exploiting this app for profit but instead building out a platform to help
 seniors all around the world, we want to continuously be able to improve it with the help of the community and for that
 we decided the MIT license is the best option. 
