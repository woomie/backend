const validateUser = (req, res, next) =>{
    const {name, email} = req.body;
    if(!name || !email){
        return res.status(400).json({errorMessage: "name required"})
    }
    next();
}
module.exports = validateUser;