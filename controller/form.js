const Person = require('../Model/model');



const postReq = async (req, res) => {
    const details = new Person(req.body);
     await details.save().then(() => {
        res.status(200).json({
            message: 'Details updated successfully'
        });
     })
};

module.exports = postReq;