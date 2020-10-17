# Senior Simple Screen Development Team

> _Note:_ This document is meant to evolve throughout the planning phase of your project.   That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). Most importantly, it is a reflection of all the planning you work you've done in the first iteration.
> **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details

### Q1: What are you planning to build?

> Short (1 - 2 min' read)

* Start with a single sentence, high-level description of the product.
* Be clear - Describe the problem you are solving in simple terms.
* Be concrete. For example:
  * What are you planning to build? Is it a website, mobile app, browser extension, command-line app, etc.?
  * When describing the problem/need, give concrete examples of common use cases.
  * Assume your the reader knows nothing about the problem domain and provide the necessary context.
* Focus on *what* your product does, and avoid discussing *how* you're going to implement it.
  For example: This is not the time or the place to talk about which programming language and/or framework you are planning to use.
* **Feel free (and very much encouraged) to include useful diagrams, mock-ups and/or links**.

### Q1 Response
The product we are planning to build is a mobile application that will make navigation of one's mobile device easy and intuitive. Many elderly peoples are challenged by the advent of complicated technologies that burden them with multiple steps, complicated interfaces, and intricate settings. Our goal is to develop our mobile application to be far less burdensome to the users and allow for them to install and go.

We plan to develop a single application with an simple screen with big icons of daily use applications. Following setup, the application should function as an all-in-one application to do many of things the user would like to do (e.g. Whatsapp, Zoom, Messages, Photo, Youtube, etc). Our users will be able to open apps from our application and help them do simple tasks. They can message/call people, watch a movie, or find notifications. For example, if the user would like to watch a video, instead of having to navigate the Youtube app, which is constantly changing, we plan to implement a integrated youtuber player into our application for easy use.

As shown, our application hopes to make the usage of mobile device simple and intuitive, in hopes of reducing the intimidation factor of these fantastically useful devices for senior peoples. Moreover, we hope that the application we develop will help seniors become more happy and able to use the mobile device instead of being an area of frustration. 

[Mock-up Application](#software-mockup)

### Q2: Who are your target users?

> Short (1 - 2 min' read max)

* Be specific (e.g. a 'a third-year university student studying Computer Science' and not 'a student')
* **Feel free (but not obligated) to use personas.
  You can create your personas as part of this Markdown file, or add a link to an external site (for example, [Xtensio](https://xtensio.com/user-persona/)).**

### Q2 Response
Our Application's target users are seniors but can also be used by people whom are less technologically literate. The key functionality of our application is to make mobile phone more approachable and less daunting to unfamiliar users. Especially due to the events of COVID-19, many users have become more dependant on using technology such as the mobile phone for everyday services. This is compounded by the fact that members of the senior community are especially vulnerable in the current global health emergency. Many of the useful technologies such as Facebook and Zoom have complicated interfaces that is incredibly discouraging to these users and can lead to frustration and avoidance. Our application aims to make the experience easier and less intimidating for senior users. Which we hope will help members of the senior community become more accustomed to using some of the fantastic tools we have today.

Some example personas include:
* A 74-year-old women from Toronto whom has been using a flip phone for the last 10 years recieves a new Google Pixel 4 from her son for daily use and calls with her grandchildren. After her son helps her setup the app, she should be able to open the application and do the things she opens to do on her phone like opening Zoom to chat with her grandchildren.
* A 80-year-old man struggles to use the mobile phone. It is a big point of stress for him. He does not want people lecture him about how use phone as it makes him very nervous and causes him to feel distressed. The application should be setup for him and he would only need to click to do the things he needs to do without complicated instructions. We hope to get him more familizared with the smartphone and dissociate it from stress.
  
### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

> Short (1 - 2 min' read max)

* We want you to "connect the dots" for us - Why does your product (as described in your answer to Q1) fits the needs of your users (as described in your answer to Q2)?
* Explain the benefits of your product explicitly & clearly. For example:
  * Save users time (how much?)
  * Allow users to discover new information (which information? And, why couldn't they discover it before?)
  * Provide users with more accurate and/or informative data (what kind of data? Why is it useful to them?)
  * Does this application exist in another form? If so, how does your differ and provide value to the users?
  * How does this align with your partner's organization's values/mission/mandate?

### Q3 Response
Our application hopes to make the mobile navigation of one's device simple and intuitive for senior and elderly users. Our application hopes to make the experience less intimidating and save an inexperienced user time navigating through their phone. This application will be easy to use with big, personable icons that do exactly what the user wants it to do. The application will have imbedded API of certain apps (where applicable) to make usage of those apps easier and built within our app. Another features include simple notifications and reminders for the users if necessary. The application should be incredibly simple to use, if they want to watch a video, they can click on the YouTube icon and search for a video to watch. Most of all, we hope to make our app easier to use than navigating the phone normally, without an abundance of intimidating features or else it would defeat the purpose it was intending to combat. 

The features of application are all discussed and approved by our partner organization and aid's in their organization's goal in helping seniors. In addition, we requested a list of the most used apps by their users in order to develop our application. Especially during these trying times, using the smart phone should not be a major cause of stress  on-top of other things in their lives. 

### Q4: How will you build it?

> Short (1-2 min' read max)

* What is the technology stack? Specify any and all languages, frameworks, libraries, PaaS products or tools.
* How will you deploy the application?
* Describe the architecture - what are the high level components or patterns you will use? Diagrams are useful here.
* Will you be using third party applications or APIs? If so, what are they?
* What is your testing strategy?

### Q4 Response
* We will be using React-native framework to develop the app. The languages we will be using for frontend are JavaScript, CSS and HTML, and for backend we will be using NodeJS.
* We will be deploying the application to both the android app store and the IOS app store.
* Our appliction will follow an MVC architecture. Where, in the model component, we are processing data from any databases we will be using in the app, in the view component, we will be displaying the visualization of our app, and in the controller component we will be controlling the flow of data between the view and the model depending on the actions of the user. 
* Yes, we are planning on using several APIs, such as the Facebook API, Youtube API, Whatsapp Api, etc.
* We will be using the Jest testing framework to test our react-native app. Using Jest to test a react-native app is known to be painless as the framework is already included in the react-native setup. Specifically, we will be using Jest to test how our model component processes our data from databases, and testing to make sure that the controller component of our application is accurately handling data from model so that it displays correctly onto the view.


### Q5: What are the user stories that make up the MVP?

* At least 5 user stories concerning the main features of the application - note that this can broken down further
* You must follow proper user story format (as taught in lecture) ```As a <user of the app>, I want to <do something in the app> in order to <accomplish some goal>```
* If you have a partner, these must be reviewed and accepted by them
* The user stories should be written in Github and each one must have clear acceptance criteria.
  
#### User Stories

1. As an 82 year old man, Thomas wants to be able to simply click a name to have a video call with his grandchildren without having to deal with the confusing settings and small menus of Zoom.
2. As a 66 year old, Ethel wants to be able to watch baking recipes on YouTube just by searching and clicking on a related video without having to deal with so many buttons and recommendations/autoplay and subscriptions from YouTube.
3. At 72, Ming wants to be able to see all the emails and app notifications he gets in one place without having to remember which app does what, and where they are in his app drawer and miss something important.
4. At 78 years old, Geeta wants to see and bookmark results for her web search without the clutter of pages and pages of results, sponsored content and ads, complicated tabs, advanced settings, and bookmark folders.
5. At 68 years old, Greg would like to be able to open up the app, and start messaging his friends and keeping up with his family on Facebook in just a few clicks without the overwhelming number of settings and buttons and tabs on the Facebook app that he can't find on his home screen.
6. At 87 years old, Zorya wants to be able to use the basic functions of her phone like check the weather or call her daughter without having to navigate through different apps and an overwhelming phone UI.

----

## Process Details

### Q6: What are the roles & responsibilities on the team?

Describe the different roles on the team and the responsibilities associated with each role.

* Roles should reflect the structure of your team and be appropriate for your project. Not necessarily one role to one team member.

List each team member and:

* A description of their role(s) and responsibilities including the components they'll work on and non-software related work
* 3 technical strengths and weaknesses each (e.g. languages, frameworks, libraries, development methodologies, etc.)

#### Tiago Ferreira

* I will take on the role of a Fullstack engineer. I will work to integrate some of the Company API's into our application and then build out simple front-end components that utilize those API's to provide our senior uses a simplified and easier to use version of that specific app (E.G. Using the Youtube API to built a simple coomponent that only allows you to search for videos and see the top 10 results and nothing else, and plays the video selected (See Mockup for better context)).

* ```3 technical strengths```: Multiple internships so I am familar with working in a large team to develop software, familar with working with all kinds of API's using multiple languages (JavaScript, Python, etc.), and familar building out UI'S for apps and websites using languages and frameworks like (HTML, CSS, JS, Bootstrap, React, Etc.).
* ```3 technical weaknesses```: Unfamilar with IOS development using tools like Xcode and languages like Swift, unfamiliar with some company API's we might need (E.G. Facebook & Zoom), and no experience building mobile applications in an industry environment so may be unfamiliar with industry standards.

#### Kshitij Shah

* I will take on the role of a front-end developer. This involves developing user facing components in the applications. Primarily implementing visual elements that users interact with and additionally acting as a translator from user input to functionality on the back-end. This includes responsibilities such as implementing the UI, and making it suitable for different screens/use cases, accepting and validating user inputs when appropriate, mechanism for presenting feedback to users, etc.

* ```3 technical strengths```:
  * I have experience working with creating MVP's in small teams with Agile methodology from previous a internship.
  * I'm very familiar with using Git in the context of a large scale product with many contributors in a way that optimizes for modularity and easy-to-review pull requests.
  * I have course and internship experience working with languages Python, JavaScript, C, as well as with many frameworks and supporting tools (e.g. React, CSS, HTML, Bootstrap) in a Unix environment.

* ```3 technical weaknesses```:
  * My mobile experience is limited to that from A1, using React Native. I have 0 experience with native development on iOS/Android and languages/tools/best practices for design.
  * I've never worked directly with API's written by other people, so incorporating API's from existing products (e.g. YouTube, Facebook, ...) that our software will integrate or working with backend's implemented by other team members will be challenging.
  * In previous experiences, I have been in full control of the product/stack; I followed my own style guide/development strategy as opposed to integrating with others.

#### Ziyao Han

* I will take on the role of a Quality Assurance Engineer. In this role, I will ensure that our application meets the requirements of the product owner and work to guard the application from bugs, errors, and defects. I will work to create automated tests, integrated tests, and other tools and methods in order to make sure that our application is running as expected. In addition, I will participate in code review sessions and provide meaningful feedback.

* ```3 technical strengths```:
  * I am familiar working in a group environment to develop an medium-large scale applications through previous experiences.
  * Through multiple projects and experiences, I have learned and familiarized myself with many of the tools and langauges we will be working on with this project such as Python, Java, React, JS, CSS.
  * I am comfortable performing collaboration-based development through Git and performing tasks such as code reviews, branch management, and pair programming.

* ```3 technical weaknesses```:
  * I have limited experience working in a mobile development environment and working with tools such as Swift, Android Studio, etc
  * I am unfamiliar with integrating third-party API's from existing products (e.g. YouTube, Facebook, ...) into an application and developing tools such as integrated video players, etc.
  * This is my first time working to develop a real world application with my previous experiences being in an educational environment.

#### Nancy Zhao

* I will take on the role of Fullstack Engineer. This involves integrating with APIs, building out the interaction flows given our user stories, and overall working on any needed frontend/backend/database tasks. I'll also champion code reviews and best practices, ensuring we follow good branching structure and have multiple eyes on pull requests.

* ```3 technical strengths```:
  * I have experience in backend engineering, with various stacks in previous internships, and using languages such as Python, Ruby, C#, Java, and JavaScript.
  * I have experience in frontend engineering, with various stacks in previous internships, having used JavaScript/TypeScript, React, and different UI frameworks such as Semantic UI and Fluent UI.
  * I am familiar with version control with Git and scrum practices with GitHub and Azure DevOps, and comfortable with code reviews, branch management, and pair programming.

* ```3 technical weaknesses```:
  * My mobile development experience is limited, having only done an Android project two years ago and the React Native portion of A1.
  * I'm not as familiar with design sprint and user research practices, having only observed from working with designers and product managers in the past.
  * I'm not familiar with the APIs of the platforms we would be working with; Facebook, YouTube, Zoom, etc.
 
#### Julia Cwiek

* I will take on the role of a Backend developer. This role involves integrating with APIs and working on any database related tasks. I will likewise be reviewing code and making sure that the code that the team is outputting is readable, in order to simulate industry standards and make sure that our codebase is neat and organized.

* ```3 technical strengths```: 
    * Multiple internships, and so I am familiar and comfortable with working as a backend developer for large-scale applications in teams of this size
    * Familiarity with NodeJS from previous work/shool experience (backend stack) and HTML, CSS and JS (frontend stack)
    * Some familiarity with using APIs in development (from a Hackathon)
  
* ```3 technical weaknesses```: 
    * Very limited experience with mobile development
    * Not familiar with the APIs we will be using for this project (Facebook, Youtube, etc)
    * Not very familiar with the react-native framework
    
#### Wing Chung Jessie Lam 

* I will take on the role of a Frontend developer. I will be determining the structure and design of the mobile application, ensuring the visual components of our applications are intuitive, simple and responsive. I will ensure the user input is properly handled and translated into the backend. My responsibilities include implementing the UI/UX, implementing appropriate functions to handle user input, implementing validation checks for user input etc.

* ```3 technical strengths```:
  * I have experience working with HTML, CSS, JavaScript, Bootstrap 
  * I have experience creating intuitive and functional webpage designs for mobile applications 
  * I have experience working with MVC architecture 
  
* ```3 technical weaknesses```:
  * I have limited mobile development experience, only having used Android Studio to develop mobile applications in the past
  * I have limited experience using the react-native framework
  * I am not familliar with the APIs we will be working with in this project (Facebook, Youtube, Zoom etc.)
 

### Q7: What operational events will you have as a team?

Describe meetings (and other events) you are planning to have.

* When and where? Recurring or ad hoc? In-person or online?
* What's the purpose of each meeting?
* Other events could be coding sessions, code reviews, quick weekly sync meeting online, etc.
* You must have at least 2 meetings with your project partner (if you have one) before D1 is due. Describe them here:
  * What did you discuss during the meetings?
  * What were the outcomes of each meeting?
  * You must provide meeting minutes.
  * You must have a regular meeting schedule established by the second meeting.

#### Q7 response

* Our team has recurring team meetings every Wednesday starting at 8:00 PM. The meetings are held through Zoom. These meetings are within team members only (project partner not present).
* Our team also agrees on having ad hoc team meetings if need be. Everyone's general availability throughout the week has been recorded on WhenToMeet for easy reference. Ad hoc meetings will be on Zoom and with be coordinated through the team Facebook Messenger group chat.
* Our meetings are used for the following purposes:
  * Project progress chat: Each team member reports on they have accomplished on the project the past week
  * Group troubleshoot session: Group members discuss any unsolved issues they have encounted the past week and the team attempts to troubleshoots the issues
  * Work allocation/reallocation: Based on the progress chat and troubleshoot session, if need be, the group allocated/reallocates tasks and aspects of the project individual team members. If there are many tasks, a task prioritization discussion occurs.
* Our team has weekly meetings with our project partner, Rodrigo, through Zoom every week at 12:00 PM Tuesday.
    * Summary of first meeting with Rodrigo Briones, from Family Service Toronto (FST): The team and Rodrigo introduces themselves. Rodrigo described the challenges seniors face when using technology. He wants a product that reduces number of steps needed to use an a mobile application (such as not needing to click on multiple buttons to join a zoom session). He also wants to the product to address general challenges seniors have when using technology. We then talked about communicating through email. 
    * Summary of the second meeting with Rodrigo Briones: Rodrigo will meet with a group of seniors to gather data on apps he wants use to simplify and include in our simple mobile UI. We presented our project mockups to Rodrigo, who liked our ideas of 1) Creating a simpler mobile screen UI with only the agreed most important/most-used apps displayed 2)The creation of a simplified interface with reduced steps and functionality of each app displayed in the mobile UI. 
* Meeting minutes to all our group meetings (including both sessions with Project Partner and sessions within team members only) can be found here: <https://docs.google.com/document/d/1qTB5BxwvksWi4nVMG1icAFfm5Gksd37m92mA0ErPzJA/edit?fbclid=IwAR24smdFHlDZAO9mQkIMqF68BwrtHEBkzq4ookYeBCVQn08uXYOx9G3Axyk>

### Q8 What artifacts will you use to self-organize?

List/describe the artifacts you will produce in order to organize your team.

* Artifacts can be To-Do lists, Task boards, schedule(s), meeting minutes, etc.
* We want to understand:
  * How do you keep track of what needs to get done?
  * How do you prioritize tasks?
  * How do tasks get assigned to team members?
  * How do you determine the status of work from inception to completion?

#### Q8 response

* Artifacts include: Meeting Minutes, WhenToMeet, Task Document 

    * Meeting minutes: All discussions during the recurring weekly meetings and ad hoc meetings are recorded on our meeting minutes google document. (Link included in Q7 response)

    * WhenToMeet: A website that allows multiple people to record their general availability. All members have already indicated their general weekly availability on the group project WhenToMeet link. This allows for easy scheduling for ad hoc meetings.

    * Task document: A shared google doc, to keep up with who does what. Every team member's name is present on the "Task Document" and their to-dos/tasks are listed under their name. Tasks that should be prioritized are marked with an asterisk. Tasks of utmost importance and priority will be marked with multiple asterisks.

* Further explanation on how forementioned artifacts are used: 

    * Tasks are assigned to team members based on a team member's agenda (what they want to do) and experience. Discussions on who does what occurs during the work allocation/reallocation period in weekly meetings as well as ad hoc meetings. All discussions are recorded in the meeting minutes. Tasks are recorded on the  Task Document as they are assigned. 

    * Tasks are prioritized based on tasks prioritization discussions that take place during weekly meetings. Discussions are recorded in the meeting minutes. Prioritized tasks are marked with asterisk(s) in the Task Document. 

    * The big picture ideas on the project are discussed during team meetings. Discussions of how to break down the big picture ideas into individual steps to get work done from inception to completion also occurs during team meetings. All such discussions are recorded on meeting minutes. Note that the tasks recorded on the  Task Document are the broken down individual steps. This way of discussion recording project tasks allows us to determine the status of work from inception to completion. 


### Q9: What are the rules regarding how your team works?

Describe your team's working culture.

**Communications:**

* What is the expected frequency? What methods/channels are appropriate?
* If you have a partner project, what is your process (in detail) for communicating with your partner?

**Meetings:**

* How are people held accountable for attending meetings, completing action items? Is there a moderator or process?

**Conflict Resolution:**

* List at least three team scenarios/conflicts you discussed in lecture and how you decided you will resolve them. Indecisions? Non-responsive team members? Any other scenarios you can think of?

#### Q9 response

**Communications:**
* Members are expected to check the Facebook Messenger Chat once per day and attend the recurring weekly meetings. All group communications outside of team meetings are expected to be done in the Facebook messenger group chat, ad hoc meetings are to be scheduled through the chat if necessary.
* Rodrigo (project partner) and the team have weekly Zoom meetings on Tuesdays 12:00 PM weekly. Communication is also conducted through group emails between Rodrigo and all team members. A group member responds to emails within 2 days of receiving them. 

**Meetings:**
* All members are expected to attend the weekly team member meetings on Wednesday as well as the weekly meetings with Rodrigo on Tuesday. 
* If a group member has to miss a meeting, he/she is expected to notify with the rest of the group prior to the meeting through the Facebook Messenger chat.
* Each team member reports on their progress on assigned tasks during the beginning of Wednesday team meetings (project progress chat). 

**Conflict Resolution:**
* Non-responsive team members. A team member does not do assigned tasks: 1. Have a chat with the team member with the aim of understanding the cause of the team member not doing their tasks. Have a series of questions to ask if the team member does not give a concrete cause to their non-responsiveness. Examples include:
Is there anything happening in your life that is affecting your ability to do tasks? 
Have you lost motivation for doing the project? 
Do you find it hard regulating yourself to do the project? 2. Problem solve. Make changes to help the team member be able to complete their tasks. 
For example:
If the team member is having a situation in their personal life that prevents them from doing assigned tasks, schedule a meeting with the project assigned TA and the struggling team member to discuss next steps.
If the team member has lost motivation for the project, try to figure out why they have lost motivation. If they feel like there are more interesting tasks they can do that are more rewarding to them, have a group discussion about this and assign more personally interesting tasks for the team member. Additionally, have more regular check-ins with said team member to make sure they are progressing on their tasks. 
If the team member is having trouble regulating themself in doing the project, come up with ways to help them regulate themselves. For example, daily calls to help them keep track with progress, or work-together Zoom calls where two team members stay on video while working on the project. 

* Indecisions. The team cannot decide on a decision: 1. Lay out the context of the situation. What are we trying to aim for? Why is this decision important? Who is involved in this decision? 2. Come up with a list of choices  an make a pros and cons list for each choice. Make sure to get input from everyone involved. 3. With the context of the situation and the pros and cons list in mind, have a discussion with the people involved and come up with a mutual decision. 

* There is an argument between two team members and they refuse to speak to each other: 1. Understand the conflict. Talk to each team member individually to understand both of their viewpoints. 2. Encourage both team members to try to work out the argument themselves. 3. Find common ground: If the two team members are unable to work out the argument themselves, find common ground between what the two team member wants. Have a meeting with the two team members. Summarize why there is and argument between the two team members, what the two have in common in terms of what they want, and propose a suggested solution to their disagreement. 

----

## Highlights

Specify 3 - 5 key decisions and/or insights that came up during your meetings
and/or collaborative process.

* Short (5 min' read max)
* Decisions can be related to the product and/or the team process.
  * Mention which alternatives you were considering.
  * Present the arguments for each alternative.
  * Explain why the option you decided on makes the most sense for your team/product/users.
* Essentially, we want to understand how (and why) you ended up with your current product and process plan.
* This section is useful for important information regarding your decision making process that may not necessarily fit in other sections.

### Meetings

#### 1: Tuesday, October 6

First meeting with Rodrigo Briones, from Family Service Toronto (FST). We went over introductions, challenges seniors face when using technology, and logistics for the semester - weekly meetings with Rodrigo, and communication via email.

#### 2: Thursday, October 8

Team meeting. Compiled questions for next meeting with FST, and went through a design exercise with the team to visualize each member's ideas for the product. Crazy 8s - spent 15 minutes sketching out how we saw the product and its workflow in our minds, and went one by one to present and compiled our ideas which led to our software mockup. Some questions we came up with were:

* What are the required apps and functionalities?
  * What do seniors want to configure in each app?
  * What part or step of accessing each app do seniors have the most trouble with?
* How do we differentiate our product from just putting the existing app icon on a mobile phone's homepage?
* What additional features could we add that would benefit our target audience?

#### 3: Tuesday, October 13

Team meeting with Rodrigo, who will be meeting with a group of seniors after this meeting. Rodrigo will gather some data: required apps list, most used/wanted apps. We showed our project mockups to Rodrigo, who liked the ideas of having a screen with small group of selected app logos that the senior can access, and the simplified interface of each app that reduces steps and complex functionalities. Some examples: simplifying steps of accessing Zoom, saving meetings.

----

## Software Mockup

![Screenshot](mockup/mockup.png)
