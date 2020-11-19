# Senior Simple Screen Development Team

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 

## Description 
 * Provide a high-level description of your application and it's value from an end-user's perspective
 * What is the problem you're trying to solve?
 * Is there any context required to understand **why** the application solves this problem?

## Key Features
 * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built

## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully
 
 ## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).
 
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
