# Coders Camp 2021 | Project 2 | React - Single Page Application

&nbsp;

## Table of contents

- [Project Team](#project-team)
- [General Info](#general-info)
- [Application](#application)
- [Technologies](#technologies)
- [Setup](#setup)
- [Deployment](#deployment)
- [Status](#status)

&nbsp;

## Project Team

&nbsp;

The Project was created as part of the course [CodersCamp](https://CodersCamp.pl).\
by participants of the course, working under supervision of a mentor.
We encourage you to familiarize yourself with team members's profiles and their portfolio:

**Mentor**: [Michał Ciborowski](https://github.com/Cidebur)

**Participants of Coders Camp course:**

- [Barbara Korytkowska](https://github.com/korytba)
- [Magda Zaniewska-Ciecierska](https://github.com/FrontendMagdalena)
- [Michał Kowalczyk](https://github.com/michakow)
- [Roman Pavlenko](https://github.com/rpavlenko)
- [Zuzanna Wypych](https://github.com/zwypych) 

&nbsp;

As part of the project selected team members have been assigned to additional roles:
&nbsp;

| Name                       | Role in the Project   |
| -------------------------- | --------------------- |
| Magda Zaniewska-Ciecierska | Product Owner         |
| Michał Kowalczyk           | Manager / Team Leader |
| Roman Pavlenko             | Tech Lead             |
| Michał Ciborowski          | Client                |

&nbsp;

## General info

&nbsp;

### Application Demo

If you are curious about the results of our work try our application :arrow_right: [Scrooge App](link).

&nbsp;

### About Project

Application "Scrooge" is a budget App which will help potential users make the best decisions with their money. Design of Scrooge was designed to be as simply as possible. Easy navigation and balanced layout make our application accesible for wide range of people with different needs. Please find main features of Scrooge: 

- create/edit/delete incomes and expenses
- categorization (custom categories)
- possibility to add attachment (eg. bills) to each input
- setting alarms for budget limits
- creating simple chart based on category

&nbsp;

### Design

Scrooge Application logo: &nbsp;

![](./src/assets/readme/Logo.png 'Scrooge logo')

Mockup of the Application was prepared in Figma based on Mobile First Design approach.
You can check it on [Figma](https://www.figma.com/file/Nymel3JtzFgVOIX0gdHmr3/Scrooge-App?node-id=12%3A358)

&nbsp;
&nbsp;

## Application

&nbsp;

### Homepage

Main purpose of the Homepage is ability to choose whether user would like to register as a new user or login when account is already created.

![](./src/assets/readme/homepage.png 'Homepage')

### Register / Login Page

Register and login page helps to use personalized data.
On login page additionally there is an option to send request when you "Forget password".

![](./src/assets/readme/login.png 'Login Page')
![](./src/assets/readme/registration.png 'Register Page')

### Forget Password Page

By this form user can send request for account authentication based on the email you used for registration.

![](./src/assets/readme/forget.png 'Forget Password Page')

### Main Page

Main page is full of features. Table at the top shows your actual budget, then you have possibility to add new income/expense using "+" button. Separate section show the list of user's inputs and few options of filtering user's data (by name, by date range, by category). Categories can be scrolled from left-to right.
On the bottom there are user's inputs (incomes or expenses). Regarding limited space there is possibility to load more inputs choosing "Pokaż więcej". On each input there are options to edit or delete it.

Navigation is simplified and icon-based which increase accessability. For mobile version navigation bar changes into hamburger menu.

![](./src/assets/readme/main.png 'Main page')
![](./src/assets/readme/navigation.png 'Main page - navigation') 

&nbsp;

This page allows to set limit for user's budget for each category.

&nbsp;
![](./src/assets/readme/main-alert1.png 'Main page - limit alert popup')
![](./src/assets/readme/main-alert2.png 'Main page - limit alert icon')

### New / Edit Position Page

On this views user can fill/change all details for input. 
- Date
- income or expense
- category (from this view user can create as well new category)
- value of user's input
- add attachment (eg. bill)

![](./src/assets/readme/newposition.png 'New position page')
![](./src/assets/readme/edit.png 'Edit position page')

### Details Page

User is directed to this page from Main page by clicking on each input. Here there are options to edit or delete input as well.

![](./src/assets/readme/details.png 'Details page')

### Setting Limit Page

This page gives possibility to set an alarm when budget for category is over budget.

![](./src/assets/readme/limit.png 'Limit page')

### Chart Page

Here simply Pie chart shows visually budget status of the user. Data could be filtered by date and catgeory? 

![](./src/assets/readme/chart.png 'Chart page')

### 404 Error Page

When page cannot be found in our App user will see below view:

![](./src/assets/readme/404.png '404 Error page')

## Technologies


&nbsp;
**Technologies used in Project**:

- React: Create React App, Router, Hooks, PropTypes
- Babel
- Styled Components
- Prettier
- Eslint
- LocalStorage
- Jest

## Setup

&nbsp;

To run this project, install it locally on your machine using yarn:

```
$ cd ../
$ yarn install
$ yarn start
```

Application will launch on [http://localhost:3000](http://localhost:3000/) in your browser.


&nbsp;

## Status


&nbsp;
As this part of Scrooge App Project is a frontend only Team is going to implement backend as a part of 3rd project of the Coders Camp course.
