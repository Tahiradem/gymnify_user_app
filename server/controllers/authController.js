const Gymers = require('../models/Gym');

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const gym = await Gymers.findOne({
      'users': {
        $elemMatch: {
          email: email,
          password: password
        }
      }
    });

    if (!gym) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    const user = gym.users.find(u => u.email === email && u.password === password);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: user,
      gymId: gym._id,
      gymName: gym.name // Include the gym name in the response
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during login' 
    });
  }
};