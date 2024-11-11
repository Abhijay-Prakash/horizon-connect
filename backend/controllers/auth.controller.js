const login = (req, res) => {
    res.send("HELLO LOGIN");
};
const logout = (req, res) => {
    res.send("HELLO LOGOUT");
};
const signup = (req, res) => {
    res.send("HELLO signup");
};

export const authController = { login, logout, signup };