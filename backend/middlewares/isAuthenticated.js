import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;


/*import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    // Extract the token from cookies or the Authorization header
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Authentication token not found. Please log in.",
        success: false,
      });
    }

    // Verify the token
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token. Authentication failed.",
        success: false,
      });
    }

    // Attach the decoded user ID to the request object for downstream use
    req.userId = decoded.userId; 
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({
      message: "An error occurred during authentication.",
      success: false,
    });
  }
};

export default isAuthenticated;*/
