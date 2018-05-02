# Events Application

# Overview
* I received a coding challenging to create an application based on the 2 data models and a joint table.  The data models are events, people, and the joint table is the people that attend each event.  The goal of the application to have the ability to view people under event.

# Technologies Used

* Ruby on Rails - Backend server (Ruby version: rails 5.2 and ruby 2.4.3)
* React - Frontend library (styled components for design)
* Database creation: PostgreSQL


# Resources 
* User Stories: [Trello](https://trello.com/b/ehmAs97b/dataclover-events-application) - Before I start coding the application, I write out my user stories in order to manage the logic and user exerperience.  For example, When I click on X, Y should occur.  Per the instructions I received, I wanted to make sure I hit MVP before I attempted to complete the bonus section of the instructions such as deploying the challenge to heroku and completing TDD on the controllers and the models.
* [CSV: rake tasks ](https://gist.github.com/arjunvenkat/1115bc41bf395a162084) - I used this as a resource to create the seeds file through rake tasks.
* ERDs were built in order to list the data models and their data types.  I created each data model from the raw data I recieved in the CSV files.
![ERD](https://github.com/SupriyaY/events_app/blob/master/ERD.png) 
* Wireframes were created using Figma to design the prototype of the application.
![Wireframes](https://github.com/SupriyaY/events_app/blob/master/Events%20Wireframes.png)


# Future Improvements
* How to run the test suite:  Next Version
* Revisit if SQLite is a better option for database creation
* Data Type Correction - While creating my In order to fix this problem, I can either do a rollback to a migration or create another migration.
* Deployment to Heroku - attempts made but receiving errors.  I believe that the cause of this could be deploying to heroku after I ran the ruby version update.  I am currently researching how I can fix this issue.
* Matching people to events - currently just viewing the objects.
* Full CRUD on both models(People and Events), add more models and make this a fully functioning planning app!
* Use HTTParty and find a fun third-party API to make the application more dynamic and usable.
* Materialize UI for user interface


