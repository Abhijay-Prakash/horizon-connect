import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        // Get token from cookies
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - No token found' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || !decoded.userId) {
            return res.status(401).json({ error: 'Unauthorized - Invalid token' });
        }

        // Find the user by ID, excluding password field
        const user = await User.findOne({ _id: decoded.userId }).select("-password");
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        // Attach user to request object and proceed
        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default protectRoute;
