const { validationResult } = require("express-validator");
const Doctors = require("../models/Doctors");
const { Doctor, Slot, DateSchedule } = Doctors;

const createDate = (date) => {
  const dateSchedule = {
    dates: date,
    slots: [
      { time: "09:00:00", isBooked: false },
      { time: "12:00:00", isBooked: false },
      { time: "15:00:00", isBooked: false },
    ],
  };

  return dateSchedule;
};

// GET : retrieve all doctors from the DB
const getDoctors = async (req, res) => {
  const allDoctors = await Doctors.find();

  console.log(allDoctors);
  res.json(allDoctors);
};

// POST : retrieve one doctor from the DB, based on
const postDoctor = async (req, res) => {
  try {
    const doctor = await Doctors.findOne({
      id: req.body.id,
    }).select("name email phoneNumber specialization");
    res.json(doctor);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error getting doctor details" });
  }
};

// PUT : add a doctor record to the DB
const putDoctors = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const createdDoctor = new Doctors({
    id: req.body.id,
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    specialization: req.body.specialization,
  });

  await createdDoctor.save();

  res.json({ status: "ok", msg: "created" });
};

//DELETE: delete doctors by id

const deleteDoctors = async (req, res) => {
  try {
    await Doctors.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "doctor detail deleted" });
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error deleting patient detail" });
  }
};

//PATCH:
const patchDoctors = async (req, res) => {
  try {
    const updatedDoctor = {};
    if ("phoneNumber" in req.body)
      updatedDoctor.phoneNumber = req.body.phoneNumber;
    if ("email" in req.body) updatedDoctor.email = req.body.email;
    if ("password" in req.body) updatedDoctor.password = req.body.password;

    await Doctors.findByIdAndUpdate(req.params.id, updatedDoctor);

    console.log(updatedDoctor);

    res.json({ status: "ok", msg: "doctor updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error in updating doctor" });
  }
};

//to get slots available for date
const getSlots = async (req, res) => {
  try {
    const date = req.body.date; // Date to book

    const doctor = await Doctors.findOne({ id: req.body.id });
    console.log(doctor);
    // Doctor found
    // Find the date
    let count = 0;
    for (const i of doctor.dates) {
      if (i.date === date) {
        return res.status(200).json(i);
      }
      count++;
    }

    const oldLength = count;

    // Add new slots if date not found in the db
    const dateSchedule = createDate(date);
    const updatedDoctor = await Doctors.findOneAndUpdate(
      { id: req.body.id },
      { $push: { dates: dateSchedule } },
      { new: true }
    );

    if (updatedDoctor) {
      return res.status(200).json(updatedDoctor.dates[oldLength]);
    } else {
      const err = { err: "an error occurred!" };
      throw err;
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err,
    });
  }
};

module.exports = {
  getDoctors,
  putDoctors,
  postDoctor,
  deleteDoctors,
  patchDoctors,
  getSlots,
};
