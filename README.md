# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Test Cases for Stopwatch App:

1. Start Stopwatch:
   Objective: Verify that the stopwatch starts when the user taps the "Start" button.
   Steps:
   Open the app and go to the stopwatch screen.
   Tap the "Start" button.
   Expected Result: The stopwatch starts counting time.
2. Pause Stopwatch:
   Objective: Ensure that the stopwatch pauses when the user taps the "Pause" button.
   Precondition: Stopwatch is running.
   Steps:
   Tap the "Pause" button.
   Expected Result: The stopwatch pauses and stops counting time.
3. Resume Stopwatch:
   Objective: Confirm that the stopwatch resumes counting from where it was paused.
   Precondition: Stopwatch is paused.
   Steps:
   Tap the "Resume" button.
   Expected Result: The stopwatch resumes counting from the exact time it was paused.
4. Stop Stopwatch:
   Objective: Verify that the stopwatch stops and resets when the user taps the "Stop" button.
   Precondition: Stopwatch is running or paused.
   Steps:
   Tap the "Stop" button.
   Expected Result: The stopwatch stops and resets to zero.
5. Record Lap Time:
   Objective: Test the ability to record lap times during stopwatch operation.
   Precondition: Stopwatch is running.
   Steps:
   Tap the "Lap" button at least twice at different time intervals.
   Expected Result: Lap times are recorded and displayed on the screen.
6. Reset Lap Times:
   Objective: Check that the lap times can be reset.
   Precondition: Stopwatch is running or paused, lap times recorded.
   Steps:
   Tap the "Reset Laps" button.
   Expected Result: All recorded lap times are cleared.
7. Check Precision:
   Objective: Verify that the stopwatch accurately measures time.
   Precondition: Stopwatch is running.
   Steps:
   Allow the stopwatch to run for a specific time (e.g., 10 seconds).
   Expected Result: Stopwatch should measure the specific time accurately within an acceptable margin of error.
8. UI Responsiveness:
   Objective: Test the responsiveness of the UI during stopwatch operation.
   Precondition: Stopwatch is running.
   Steps:
   Attempt to tap buttons (e.g., pause, lap) while the stopwatch is running.
   Expected Result: The UI should respond quickly and accurately to user interactions.
9. Exit and Relaunch:
   Objective: Verify that the stopwatch continues to operate correctly even after exiting and relaunching the app.
   Precondition: Stopwatch is running or paused.
   Steps:
   Start the stopwatch, then exit and relaunch the app.
   Expected Result: Stopwatch should continue functioning correctly upon relaunch.
10. Edge Case: Maximum Time:
    Objective: Test the behavior of the stopwatch when it reaches the maximum time limit.
    Precondition: Stopwatch is running.
    Steps:
    Allow the stopwatch to run for an extended period to reach the maximum time (e.g., several hours).
    Expected Result: The stopwatch should handle the maximum time gracefully without any errors or crashes.
