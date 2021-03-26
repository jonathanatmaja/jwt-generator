const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateJWT = () => {

    const authExpSecond = 129600 * 60;
    const currentTime = Math.floor(Date.now() / 1000);
    const tokenExpTime = currentTime + authExpSecond;
    
    const jwtClaims = {
      exp: tokenExpTime,
      nbf: currentTime
    };
    
    const jwtSecret = Buffer.from(process.env.JWT_SECRET, "utf8");
    const token = jwt.sign(jwtClaims, jwtSecret, { noTimestamp: true });
    
    console.log("TOKEN -> ", token);
};

generateJWT();
