const express = require("express");
const router = express.Router();

const Student = require("../models/students");

router.get("/", (req, res) => {
  res.send("Hello get");
});

// create new student

// // 1st way: using thenc
// router.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then((result) => {
//       res.status(201);
//       res.send(result);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
//   // res.send("Hello post");
// });

// 2nd way: async await
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.send(err);
  }
});

// get all record from student
router.get("/students", async (req, res) => {
  try {
    const studentData = await Student.find();
    res.status(200).json(studentData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get individual student record
router.get("/students/:iid", async (req, res) => {
  try {
    // use can use findById() or findOne()

    // // 1st way : if _id is matches with _id in mongodb
    // const _id = req.params.iid;
    // const studentData = await Student.findById(_id);

    // 2nd way : if not matches
    const rollno = req.params.iid;
    const studentData = await Student.findById({ _id: rollno });

    console.log(studentData);

    if (!studentData) {
      return res.status(404).send();
    } else {
      res.status(200).json(studentData);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

// update individual student
router.patch("/students/:iid", async (req, res) => {
  try {
    const rollno = req.params.iid;
    const studentData = await Student.findByIdAndUpdate(
      { _id: rollno },
      req.body,
      { new: true }
    );
    console.log(studentData);
    console.log("Request body", req.body.address);

    if (!studentData) {
      return res.status(404).send("Nothing");
    } else {
      res.status(200).json(studentData);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete individual student
router.delete("/students/:iid", async (req, res) => {
  try {
    const rollno = req.params.iid;
    const studentData = await Student.findByIdAndDelete({ _id: rollno });
    console.log(studentData);

    if (!studentData) {
      return res.status(404).send("Nothing");
    } else {
      res.status(200).json(studentData);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
