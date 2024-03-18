const jwt = require('jsonwebtoken');


const authorize = async (req, res, next) => {
    try {
        const { token } = req.body;
        const user = jwt.verify(token, process.env.JWT_SECRET);
        if (!user)
            res.status(401).json({
                msg: 'Unathorized'
            });
        req.user = {
            role: user.role,
            email: user.email
        };
        next();
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error
        });
    }
}

module.exports = {
    authorize
}