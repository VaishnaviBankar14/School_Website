const authService = require("../services/authService");
const { generateToken } = require("../utils/jwt");

const register = async (req, res) => {
  try {

    const user = await authService.registerUser(req.body);

    const { password, ...userWithoutPassword } = user;

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: userWithoutPassword
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }
};

const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await authService.loginUser(
      email,
      password
    );

    const token = generateToken(user);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }

};

const getProfile = async (req, res) => {

  res.status(200).json({
    success: true,
    user: req.user
  });

};

module.exports = {
  register,
  login,
  getProfile
};