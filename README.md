Project Description:
enables us to efficiently track communication with companies, ensuring follow-ups are timely and consistent. This tool will provide a centralized platform to log past interactions, plan future communications, and manage the frequency of engagement based on predefined schedules.

The application will include:

· An Admin Module for setting up companies and communication parameters.

· A User Module for visualizing, managing, and performing communication tasks.

· A Reporting and Analytics Module for actionable insights (optional).

It is critical to emphasize usability, clarity, and efficient data handling.


Detailed Requirements

Admin Module

This module allows administrators to configure the application and manage its foundational data.

Company Management

Admins should be able to add, edit, and delete companies. Each company entry should include:

· Name: Name of the company.

· Location: Physical or operational location.

· LinkedIn Profile: A link to the company’s LinkedIn page.

· Emails: One or more email addresses for communication.

· Phone Numbers: Contact numbers for representatives.

· Comments: Notes or additional information about the company.

· Communication Periodicity: The default time interval for scheduled communications (e.g., every 2 weeks).

Communication Method Management

Admins should define the available communication methods in the system. Each method should include:

· Name: E.g., "Visit" or "LinkedIn Post."

· Description: E.g., "Visit to company premises."

· Sequence: Determines the order of communication (e.g., LinkedIn Post → LinkedIn Message → Email → Phone Call → Other).

· Mandatory Flag: Indicates whether a communication method is mandatory in the sequence.

By default, the system should include these methods in the following order:

1. LinkedIn Post

2. LinkedIn Message

3. Email

4. Phone Call

5. Other


User Module

This module is the primary interface for end-users, enabling them to view, manage, and perform communication tasks.

Dashboard

The dashboard provides a grid-like view where each row represents a company. Columns include:

· Company Name: The name of the company.

· Last Five Communications: A summary of the five most recent communications, including the type (e.g., "LinkedIn Post") and date (e.g., "5th September").

· Next Scheduled Communication: The type and date of the next planned communication.

Color-Coded Highlights:

· Red Highlight: Indicates overdue communication.

· Yellow Highlight: Indicates communication due today.

· Users can disable or override highlights for specific companies or communications as needed.

Interactive Features

· Hover Effect: When hovering over a completed communication, a tooltip should display the notes or comments recorded for that communication.

Communication Action

· Users can select a specific company or multi-select multiple companies.

· Click on a "Communication Performed" button to log a new communication.

o In the action modal:

§ Select Type of Communication: E.g., LinkedIn Post, Email.

§ Input Date of Communication: Date when the communication occurred.

§ Add Notes: Additional comments about the communication.

o Upon submission, this action will reset any existing highlights (red or yellow) for the selected company/companies.

Notifications

A dedicated section displays overdue and due communications:

· Overdue Communications Grid: Lists companies with overdue actions.

· Today’s Communications Grid: Lists companies with tasks due today.

· The notification icon should display a badge with the count of overdue and due communications.

Calendar View

A calendar interface that allows users to:

· View Past Communications: Dates and methods of previous interactions.

· View and Manage Upcoming Communications: Scheduled dates and methods for future interactions.


Reporting and Analytics Module (Optional)

This module provides actionable insights and performance metrics related to company communications.

Features:

· Communication Frequency Report:

o A visual representation (e.g., bar chart or pie chart) showing the frequency of each communication method (e.g., LinkedIn Post, Email) used over a selected time frame.

o Users can filter by company, date range, or communication method.

· Engagement Effectiveness Dashboard:

o Track and display which communication methods are most effective in terms of response or follow-up actions.

o Include metrics like the percentage of successful responses to emails, phone calls, or LinkedIn messages.

· Overdue Communication Trends:

o A trendline or heatmap showing the number of overdue communications over time, categorized by company.

· Downloadable Reports:

o Allow users to export reports in PDF or CSV format for sharing or offline analysis.

· Real-Time Activity Log:

o A live feed displaying all communication activities performed, sortable by date, user, or company





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
