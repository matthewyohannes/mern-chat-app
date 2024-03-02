import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { // the jwt_secret key that signs the token (digital sig.)
        expiresIn: '15d' // token expires in 15 days (LEARN MORE ABOUT JWT)
    });

    res.cookie("jwt", token, { // creates new cookie
        maxAge: 15 * 24 * 60 * 1000, // milliseconds format with this expire time
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks (LEARN MORE)
        sameSite: "strict", // CSRF attacks cross-site request forgey attacks
        secure: process.env.NODE_ENV != "development",
    });
};


export default generateTokenAndSetCookie;