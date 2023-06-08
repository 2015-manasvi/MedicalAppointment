# MedicalAppointment

Medical Appointment App is a react application that allows users to book appointments at a hospital online. It provides a convenient way for patients to schedule their appointments, choose their preferred doctors, date and slots manage their medical appointments more efficiently.
<br />

## **Description**

User Login: User can log in to access the booking functionality.Upon successful login, the user is directed to patient dashboard.In dashboard,the page navigate depends on patient choice.

        Search and Filter: Users can search for doctors based on name and specialization.
        Appointment Booking: Users can select a doctor, choose a suitable date,time slot and book their appointments.
        Appointment Management: Users can view, or cancel their booked appointments.

Admin Login: After successfull login of admin, the admin is directed to admin dashboard, the page navigate depends on admin choice.

          Doctor Details: Admin can view, update and delete the doctors details.
          Appointment Details: Admin can view, update and delete the appointment details.

## **Technologies used**

### M.E.R.N.

MedicalAppointment app is a fullstack MERN app : MongoDB, Express, React, Node.js (MERN) <br/>
<br/>
Frontend: React.js, HTML, CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
UI Framework: [MUI](https://mui.com/) was used for styling some components.

## Installation instructions

Clone the repository: git clone https://github.com/2015-manasvi/MedicalAppointment
Install dependencies: cd Healthcare-appointment app && npm install
Set up environment variables: Create a .env file in the root directory and configure the required environment variables.
Start the application: npm start
Access the app at http://localhost:5173

## General flow & user stories

### Login

- Display the **login page** with two buttons one for **Patient** Login another for **Admin** Login
  ![Main Login page](frontend\public\readme\LoginPage.png "Login page")

- In Patient login page, the Patient use their username and password to login.
  ![Patient Login page](frontend\public\readme\PatientLogin.png "Patient Login page")
- In Admin login page, the login is done using the username and password.
  ![Admin Login page](frontend\public\readme\AdminLogin.png "Admin Login page")

- Upon successful login,navigate to next page, based on the role (Patient or Admin).
  ​<br/>

**_Detailed steps:​_**

1. Declare react states for roles,user and password.Set roles through the choosing of buttons either patient or admin.UseContext to save role and user. <br/>
2. Add function handleClick to login,first fetch() call added the end points as the first mandatory parameter,second parameter takes in the request parameter(POST). <br/>
3. If role is equal to patient, setAuthorised with username and password.If role is equal to admin, setAuthorised with username and password.<br/>
4. In return Method, use hospital image, CSS for styling the page and MUI for styling the buttons.<br/>
5. If no role selected, show role option buttons. Once role selected shows input boxes for user and password<br/>
6. In Login Button,onClick attribute is set to the handleLogin function as the event target.<br/>

### Patient

After a Patient has logged in,will be directed to the patient dashboard showing options components.

![Patient Dashboard](frontend\public\readme\PatientDashboard.png)

- Clicking on one of these option button personal details, will display the details of the patient name,email and phone number.Here, patient can edit email and phone number to click update button.
  ![Personal Detail](frontend\public\readme\PatientPersonalDetails.png)

  ![Update Patient Detail](frontend\public\readme\UpdatePatient.png)

- Clicking on a back button,come back to the patient dashboard and click one of these options Upcoming Appointment to view already booked apppointments.Here, ptient can cancel appointments to click cancel button.
  ![Patient Upcoming Appointments](frontend\public\readme\UpcomingAppointments.png)

- Clicking on a goback button,come back to the patient dashboard and click one of these options SearchDoctor button,page navigate to doctor search page here displays the full doctor details (name, doctorId, email, phone number & specialization).Here,filterd doctor details with doctor name.
  ![Show Doctor Details](\frontend\public\readme\SearchDoctor.png)

-Choose doctor and click book button,doctorname and doctorId data pass to the next component by using useLocation.Values are passed through Link, now page navigate to next component date selection ,here display the react calendar for selection of appointment date, click date which date patient prefer.
![Show Calendar](\frontend\public\readme\DateSelection.png)

- Once a date is selected, pass values(doctor name,doctorId & date) to the next component slots selection,in this component display the available slots for patient to choose.
  ![Show Slots](\frontend\public\readme\SlotsSelection.png)
