const Appointments = require("../models/Appointments");

//get
const getAppointments = async (req, res) => {
  const allAppointments = await Appointments.find();

  console.log(allAppointments);
  res.json(allAppointments);
};

// POST :
const postAppointment = async (req, res) => {
  try {
    const appointment = await Appointments.findOne({
      id: req.body.id,
    }).select("date slotTime doctorName");
    res.json(appointment);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error getting appointment details" });
  }
};

// PUT
const putAppointments = async (req, res) => {
  const createdAppointment = new Appointments({
    appointmentId: req.body.id,
    date: req.body.date,
    slotTime: req.body.slotTime,
    doctorName: req.body.doctorName,
    patientName: req.body.patientName,
  });

  await createdAppointment.save();

  res.json({ status: "ok", msg: "created" });
};

//DELETE:

const deleteAppointments = async (req, res) => {
  try {
    await Appointments.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "appointment detail deleted" });
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error deleting appointment detail" });
  }
};

//PATCH:
const patchAppointment = async (req, res) => {
  try {
    const updatedAppointment = {};
    if ("slotTime" in req.body) updatedAppointment.slotTime = req.body.slotTime;
    if ("date" in req.body) updatedAppointment.date = req.body.date;
    if ("doctorName" in req.body)
      updatedAppointment.doctorName = req.body.doctorName;

    await Appointments.findByIdAndUpdate(req.params.id, updatedAppointment);

    console.log(updatedAppointment);

    res.json({ status: "ok", msg: "appointment updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error in updating appointment" });
  }
};

module.exports = {
  getAppointments,
  postAppointment,
  putAppointments,
  deleteAppointments,
  patchAppointment,
};
