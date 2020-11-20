# Senior Simple Screen Development Team

## Iteration 2 - Review & Retrospect

* When: November 10th, 2020
* Where: Online - Zoom meeting

## Process - Reflection

### Q1. Decisions that turned out well

List **process-related** (i.e. team organization and how you work) decisions that, in retrospect, turned out to be successful.

* 2 - 4 decisions.
* Ordered from most to least important.
* Explain why (i.e. give a supporting argument) you consider a decision to be successful.
* Feel free to refer/link to process artifact(s).

1. Weekly team meetings on Wednesdays at 8pm. In addition to our weekly sponsor team meeting on Tuesdays at 12pm, these video calls are a helpful way to update each other on our progress and allocate tasks for the next week. In these meetings we were also able to collaboratively make decisions more openly than through text or email.
2. Organizing meeting notes and important links through a Google Doc. At the top of our doc we have links to the recurring Zoom meetings, Github project and repo, and team availability on When2Meet, followed by notes from each of our meetings whether with the sponsor or just with the team. As sometimes not all members are able to attend meetings, this is a helpful way to quickly refer to and catch up on them. The links are also a central place to find them, as sometimes they can get lost in the group chat.
3. Having at least one other teammate review your PR before merging it in, requiring feedback allows everyone to gain more context into the areas others may have worked on independently, and to offer suggestions for improvements or things they have missed. Having multiple eyes on new changes, as well as the CI/CD, better ensures that no unintended issues make it into our deployed application.

### Q2. Decisions that did not turn out as well as we hoped

List **process-related** (i.e. team organization and how you work) decisions that, in retrospect, were not as successful as you thought they would be.

* 2 - 4 decisions.
* Ordered from most to least important.
* Explain why (i.e. give a supporting argument) you consider a decision to be unsuccessful
* Feel free to refer/link to process artifact(s).

1. In our roles and responsibilities listed out in Deliverable 1, we divided by parts of the stack, such as frontend, backend, fullstack, and quality assurance. However, the tasks ended up being allocated by area of the application, such as building out the page for Google, YouTube, WhatsApp, Facebook, Email, etc. Since during the Deliverable 1 planning stages, we didn't have the selection of apps to include in our project, we did not think to divide the tasks as such - but regardless of the method of allocating tasks, our work came together for a functional proof of concept application.
2. Initially much of the communication and information sharing was done through our Facebook Messenger group chat, which if not caught up with immediately, could result in some links or updates lost further up in the chat. Also for recurring meetings, a meeting reminder message would be sent in the chat with the Zoom link each time. Around halfway through working on this deliverable, we decided to compile important information in the central Google Doc, which helped for referencing as well as to summarize key outcomes of text or meeting discussions.

### Q3. Planned changes

List any **process-related** (i.e. team organization and how you work) changes you are planning to make (if there are any)

 1. [x] Reorganize roles from D1 to fit project:
    * As Q2 discusses, we needed to redistribute roles to better fit the project; instead of different parts of the stack, we all work on different parts of the final product on the same stack.
 2. [ ] Investigate more robust messaging platforms:
    * We currently use a combination of Facebook Messenger and a Google Drive to communicate, however we might benefit from a platform like Slack or Discord that allows for more control in separating threads/topics; e.g. our technical discussions are interspersed with logistical discussions which may be not ideal in some cases.
 3. [ ] Testing Standards:
    * We are considering making some standardizations for how and how much we test our code so there is a sort of upper bound on our technical debt.
 4. [ ] Linters:
    * Our code base would benefit from more consistent styling. This is very much non-essential though, since we all generally follow some standard practices.

Organizationally, our team has been performing fairly well, the very significant changes that needed to be made, we made already. We are independent when it comes to implementation so there is little intervention required from other team members. Additionally we have been communicative when it comes to overall design so our structure is relatively consistent. Our weekly meetings have ensured we're all mostly on the same page when it comes to higher level design.

## Product - Review

### Q4. How was your product demo

 1. How did you prepare your demo?
    * Firstly we determined what constituted an MVP and what was achievable by our team by the due date. Following that, we distributed our work and created some of the easier aspects early to present to our partner. The easier to integrate applications were finished early.  
 2. What did you manage to demo to your partner?
    * We demoed the general structure of the web version of the application. This included a general sense of the UI and user navigation. Additionally of the apps we planned on creating links to, we were able to demo a simple version of the Google embedded app and facebook app which directs to the official facebook site.
 3. Did your partner accept the features?
    * Our partner was generally happy with our progress. He didn't have a very clear picture of what he wanted at the beginning and we set his expectations appropriately during our weekly meetings preceeding the demo.
 4. Were there change requests?
    * The MVP was at the time still not entirely completed, so our partner wanted to see more progress made after the demo and a deeper level of integration between the apps we were aiming to simplify and our product. We were able to make significant progress on that goal after the demo. Most of the applications are relatively simple in their implementation for now, but there are a couple that are more sophisticated (e.g. the YouTube and Google applications) which are more embedded than just direct links to external website. As we continue to work, it seems several applications are infeasible to deeply integrate with so external links may be the extent of our capabilities, but in this case we will extend the application to feature information before linking away.
 5. What did you learn from the demo from either a process or product perspective?
    * From a process perspective, our progress is accelerated closer to the due date, hence a large amount of progress was made after the demo. Much of the work was done within 2-3 days of the due date. In hindsight, it would have been better to demo closer to the due date but our meeting schedule made that a little complicated so we demoed early.
    * From a product perspective, we weren't very certain of the exact expectations of our partner so the generally positive feedback from the demo gave us confidence that we were moving in the right direction.
