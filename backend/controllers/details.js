const Details = require("../models/details");

exports.getDetails = async (req, res, next) => {
await Details.findAll()
    .then((details) => {
        res.status(200).json({user:details})
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
      res.status(500).json({ error: err });
    });
};

exports.postAddDetails = async (req, res, next) => {
  const userName = req.body.userName;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;
  await Details.create({
      userName: userName,
      phoneNumber: phoneNumber,
      email:email
  })
    .then((details) => {
        res.status(201).json({ user: details })
    })
    .catch((err) =>res.status(500).json({error:err}));
};

exports.postDeleteDetails = async (req, res, next) => {
  try {
    
    const prodId = req.params.id;
    await Details.destroy({ where: { id: prodId } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
};
