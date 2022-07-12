# NOW TV React Interview

![NowTV](./logo.png)

A React and Redux project to retrieve, render and manipulate data returned from an API.

## Commands

- **yarn start**: Runs the web application in developer mode
- **yarn test**: Executes Jest tests that have the `.test.js` extension

## Project Structure

Feel free to create new files to help you complete these tasks. Additional dependencies can be installed, if you think they are necessary.

* `src/index.js` is your react entry point, it is connected to the redux store

* `data` directory is a mocked-API which exposes methods to get message information and member information from a chat room.
It has two publicly exposed functions `getMessages` and `getMembers`.

* Your tasks will be to add further logic to display and manipulate the data returned from these functions, without modifying `data/index.js`.  Code addition should be unit tested.

## Tasks

1. Render the list of messages from the redux store

2. Display the user's email when you hover over the message - how can you achieve this in both CSS and JavaScript ?
<!-- by using a library for a tooltip, like I have in this example, or using hooks to show and using onMouseOver event, or using &:hover and changing visibility through css using styled components -->
<!-- .classname:hover::after {
  content : "url 1"
} -->

3. Display the avatar of the user next to the message
<!-- I created a default avatar so that the style was consistent, even if a user did not have an avatar -->

4. Display and format the timestamp of the message to be in a human readable format, e.g. `1st Jan 2020 17:00`

5. Sort the messages by time

## Additional Tasks

1. How could you improve the accessibility of your website?
<!-- Use accessibility scanning tools to highlight where improvements can be made, make sure everything is labelled correctly and using the correct tags for the purpose of the element, use headings and titles correctly and structure as if a screen reader will be reading them, provide accurate alt text, make links descriptive for where the link will take the user, consider colour blindness when choosing colours, use aria where native elements are not possible, use event click rather than hover for accewssibility in react-tooltip  -->

2. Enhance the solution by rendering the user's name under the message. Once clicked it will take you through to a grid page showing all the user's messages:

    * Display the title of the message
    <!-- there was no title so I have displayed a shortened version of the message with ... at the end -->

    * Display and format the timestamp of the message to be human readable, e.g. `1st Jan 2020 17:00`

3. Can you make sure the design of your website is responsive?
<!-- Yes, with more time I would try to style the app differently depending on the device a user was on (eg, desktop, mobile, tablet). -->

4. How would you go about automating and testing your application?
<!-- I would make some integration/end to end tests using a tool like cypress or selenium to test the user journeys in a dev, stg and prod environment. I would add logging and set up alarms based on metrics. I would decide where I wanted to host the app and create a CI/CD pipeline, adding vulnerability scanning, license checking, linting, unit tests, code quality tool such as sonarqube, the integration tests in each region I wanted to deploy the app to and have automatic deployment to each stage depending on whether it had passed all of the tests. -->

## Submission

Please upload your solution to your github account as a public repository, and send the URL to us.
