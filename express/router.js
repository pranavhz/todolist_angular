const router = require("express").Router();
const { table } = require("./table");

const getTODO = async (req, res) => {
  try {
    const todo = await table.findAll({});
    return res.json({
      data: todo,
      message: "Success",
    });
  } catch (error) {
    res.send(error);
  }
};
/////////////////////////////////////////////////////////////////////////////////////
const postTODO = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const data = await table.create(body);
    return res.status(200).json({ message: "Success", data });
  } catch (error) {
    res.send(error);
  }
};
////////////////////////////////////////////////////////////////////////////////////

const updateTODO = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.body);
    const temp = { ...data };
    delete temp.srno;
    console.log(data);
    const updatedData = await table.update(temp, {
      where: { srno: data.srno },
    });
    return res.json({
      updatedData,
      message: "Success",
    });
  } catch (error) {
    res.send(error);
  }
};

///////////////////////////////////////////////////////////////////////////////

const deleteTODO = async (req, res) => {
  try {
    const srno = req.params.srno;
    const deleteDATA = await table.destroy({ where: { srno: srno } });
    return res.json({
      deleteDATA,
      message: "Success",
    });
  } catch (error) {
    res.send(error);
  }
};

/////////////////////////////////////////////////////////////////////////////

router.get("/getTODO", getTODO);

router.post("/postTODO", postTODO);

router.put("/updateTODO", updateTODO);

router.delete("/deleteTODO/:srno", deleteTODO);

module.exports = router;
