const model = require('../Model/model');

const getReq = async (req, res) => {

let details = await model.find({})
try{
    res.status(200).json(details);  
}
catch(err){
    res.status(400).json(err);
}
};



module.exports = getReq;