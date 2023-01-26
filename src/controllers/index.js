import * as yup from "yup";
const router = require("express").Router();

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

router.post("/register", (req, res) => {
  console.log(req.body);
});

export default router;

