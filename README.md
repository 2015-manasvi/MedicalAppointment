# MedicalAppointment

Medical Appointment App is a react application that allows users to book appointments at a hospital online. It provides a convenient way for patients to schedule their appointments, choose their preferred doctors, date and slots manage their medical appointments more efficiently.
<br />

## **Description**

User Login: User can log in to access the booking functionality.Upon successful login, the user is directed to patient dashboard.In dashboard,the page navigate depends on patient choice.

    Search and Filter: Users can search for doctors based on name and specialization.
    Appointment Booking: Users can select a doctor, choose a suitable date,time slot and book their appointments.        Appointment Management: Users can view, or cancel their booked appointments.

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
  <<<<<<< Updated upstream
- # ![LoginPage](https://github.com/2015-manasvi/MedicalAppointment/assets/122246672/c088aeef-e625-4ecc-b1d7-68b3cf9c0537)

  ![Main Login page]

- In Patient login page, the Patient use their username and password to login.
  ![PatientLogin](https://github.com/2015-manasvi/MedicalAppointment/assets/122246672/78ce7c70-8a09-4163-a5f6-5fa7588213d3)

- In Admin login page, the login is done using the username and password.
  ![AdminLogin](https://github.com/2015-manasvi/MedicalAppointment/assets/122246672/96ab29ca-4aed-469a-906e-dac781fa344b)

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

![PatientDashboard](https://github.com/2015-manasvi/MedicalAppointment/assets/122246672/481476dd-6f8b-4890-9b03-8a3eb357fdb3)

- Clicking on one of these option button personal details, will display the details of the patient name,email and phone number.Here, patient can edit email and phone number to click update button.
  ![PatientPersonalDetails](https://github.com/2015-manasvi/MedicalAppointment/assets/122246672/9ae619f8-932a-4bb7-b563-bf8ca9dd02ee)

  ![UpdatePatient](https://github.com/2015-manasvi/MedicalAppointment/assets/122246672/33327c4e-7203-4148-915d-2b4d1be3225c)

- Clicking on a back button,come back to the patient dashboard and click one of these options Upcoming Appointment to view already booked apppointments.Here, ptient can cancel appointments to click cancel button.
  ![AppointmentDetails](https://github.com/2015-manasvi/MedicalAppointment/assets/122246672/c1c20687-532c-44d6-a9b0-f0b9e215f472)

- Clicking on a goback button,come back to the patient dashboard and click one of these options SearchDoctor button,page navigate to doctor search page here displays the full doctor details (name, doctorId, email, phone number & specialization).Here,filterd doctor details with doctor name.
  ![SearchDoctor](https://github.com/2015-manasvi/MedicalAppointment/assets/122246672/84138e40-e7c7-44da-852f-747ead9a0ebe)

-Choose doctor and click book button,doctorname and doctorId data pass to the next component by using useLocation.Values are passed through Link, now page navigate to next component date selection ,here display the react calendar for selection of appointment date, click date which date patient prefer.
![DateSelection](https://github.com/2015-manasvi/MedicalAppointment/assets/122246672/3e384c2a-c5c9-4664-a14c-4a1409ff2ef7)

- Once a date is selected, pass values(doctor name,doctorId & date) to the next component slots selection,in this component display the available slots for patient to choose.
  ![SlotsSelection](https://github.com/2015-manasvi/MedicalAppointment/assets/122246672/d7cc1bca-aee7-480b-ae7e-2a354545caf0)

- Clicking on a back button,come back to the patient dashboard and click one of these options Upcoming Appointment to view already booked apppointments.Here,fetch booked appointments details from backend ,patient can cancel appointments to click cancel button.
  ![Patient Upcoming Appointments](frontend\public\readme\UpcomingAppointments.png)

- Clicking on a goback button,come back to the patient dashboard and click one of these options SearchDoctor button,page navigate to doctor search page here displays the full doctor details (name, doctorId, email, phone number & specialization).Here,filterd doctor details with doctor name.
  ![Show Doctor Details](frontend\public\readme\SearchDoctor.png)

- Choose doctor and click book button,doctorname and doctorId data pass to the next component by using useLocation.Values are passed through Link, now page navigate to next component of date selection ,here display the react calendar for selection of appointment date, click date which date patient prefer.
  ![Show Calendar](frontend\public\readme\DateSelection.png)

- Once a date is selected, pass values(doctor name,doctorId & date) to the next component of slots selection,in this component display the available slots, fetch slots from backend for patient to choose which one she prefer.
  ![Show Slots](frontend\public\readme\SlotsSelection.png)

- Once a slot is selected pass the values of (doctorname,doctorId ,date & slot) ,to click confirm button the page navigate to the next component of appointment confirmation.Here,receive values of doctorname,date,and slots,to displays for appointment confirmation.
  ![Show Appointment Confirmation](frontend\public\readme\AppointmentConfirmation.png)

- After appointment confirmation,to click the upcoming appointments button to view already booked appointment and currently booked appointment details. Patient is allowed to cancel appointment here to click the cancel button.After that, click goback dashboard button to patient dashboard and patient can logout to click Logout button,page will navigate to main login page.
  ![Upcoming Appointment Details](frontend\public\readme\UpcomingAppointments.png)

### Admin

- Once a admin has logged in, he is brough to a **Admin Dashboard** which displays the doctor's details button and apppointment details button.
  ![Admin Dashboard ](frontend\public\readme\AdminDashboard.png)

- To display doctor details when admin selects the "Doctor Details" button.Admin to view all the doctor details such as doctors name,
