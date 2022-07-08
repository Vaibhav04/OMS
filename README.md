# OMS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

---
# Use these credentials to login
```
  username: vaibhav
  password: vaib1234
```


---

# My thought process while working on the given assignment.

## Before Coding.

1. After going through the assignment I thought of the complete layout and how I will divide each component for their specific tasks.
2. I then drew the complete layout including each component and complete flow of application on a whiteboard.
3. After it was done, I read the technical requirement where it is mentioned to use “ui-router” and “angular-ui-bootstrap” and “uib-modal” for modals, popup and routing. I searched these packages, but, these were not compatible with the angular latest version. Hence, I made the decision to make these modals and popups on my own. Also, I installed the “bootstrap” package for CSS styling.

---

## During Coding.

#### I have tried to make my commit messages as descriptive as possible to show the tasks that I did each day. But, here is the explanation of the timeline of the approach I followed while working on the given assignment.

1. On the first day

   - Created pages for orders and auth features and added “lazy-loading” for each.
   - Added “bootstrap" and created “login form” to login and “Order list” to display orders.
   - Used [mockaroo](“https://www.mockaroo.com”) to add mock data to display orders on the orders page.
   - Added [fortawesome](“https://www.npmjs.com/package/@fortawesome/fontawesome-free”) to use icons. (I tried to add buttons for edit and delete order but it was not looking good hence I chose icons.)
   - I have also used “Montserrat” as the default font.

2. On the second day

   - Improved the login form design.
   - Created modal to add an order from the orders page.
   - Created a popup to allow users to confirm before deleting any order.
   - Added functionality to edit orders from the orders page.
   - Added validations in the login form to display error messages in case the user does not enter the username and password.

3. On the third day
   - Added user information to show on the navigation bar once users log into the application.
   - Added functionality to add an order from the “Add order modal”.
   - Did some research to make the web app more appealing, I tried 3 colours but these were not looking good and ended up using the colour that I am using right now in the application. I also searched for the colours to use as background colours and selected a shade of grey.
   - After these selections, I did some changes to the application.
     - Changed colour of app title.
     - Replaced bootstrap default colour to the current one for buttons. Added transition effects to improve “button” design.
     - Changed the colour of the text in “Table heading”.
   - Added validations for add and edit order form.
   - Added user Authentication and authorisation so that only logged-in users can get access to the orders page
     - Used “CanLoad” guard for lazy loading module to load the module only when the user is verified.
     - Used “CanActivate” to allow the user
       - To enter into the orders page only after the user is authorised.
       - To enter into the "auth page” only if the user is not logged in.
   - Added loader for each route change.
   - Added route config to handle the case where the user enters the wrong route path. Also, I decreased the loader size.

4.Today, I improved the table design to look good on mobile, removed extra mock data and solved a bug where the modal was not closing after saving an order.

---

## Problems I faced

1. Because I used the latest version of angular, the packages mentioned in the technical requirements were not compatible with the latest version. I had to implement my own Modal and pop-up.
2. I used bootstrap for this assignment, But I don’t usually use bootstrap for projects, In fact, I use CSS and SCSS. Hence, when I tried to replace the styling of the buttons I faced some difficulties. But in the end, I succeeded.

---

## Things I Have not done

1. I didn’t implement the “Remember me” functionality. But, I am using local storage to store the user information once the user logs into the application. So, the user won’t have to log in again if the user had already logged into the application previously.
