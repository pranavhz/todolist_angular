const router = require("express").Router();
const {table} = require("./table");



const getTODO = async(req, res)=>{
    const todo=await table.findAll({});
    res.json(todo);

};
/////////////////////////////////////////////////////////////////////////////////////
const postTODO =async(req, res)=>{
const body = req.body;
console.log(body);
const data =await table.create(body);
res.status(200).json({message:"success",data});

};
////////////////////////////////////////////////////////////////////////////////////

const updateTODO = async (req, res) =>{

    try {
        const data = req.body;
        const temp = { ...data };
        delete temp.srno;
        const updatedData = await table.update(temp, {
            where: { srno : data.srno},
        });
        res.json(updatedData);
    } catch (error) {
        res.send(error);
    }
};

///////////////////////////////////////////////////////////////////////////////

const deleteTODO = async(req, res) =>{
    const srno = req.params.srno; 
    const deleteDATA = await table.destroy({ where: { srno: srno } });
    res.json(deleteDATA);
 }

/////////////////////////////////////////////////////////////////////////////

router.get("/getTODO",getTODO);

router.post("/postTODO",postTODO);

router.put("/updateTODO",updateTODO);

router.delete("/deleteTODO/:srno",deleteTODO);

module.exports = router;