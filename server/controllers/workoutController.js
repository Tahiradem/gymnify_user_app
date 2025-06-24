const Gymers = require('../models/Gym');

exports.saveWorkoutTime = async (req, res) => {
  try {
    const { email, date, timeSpent } = req.body;

    // 1. Update directly using the email as identifier
    const result = await Gymers.updateOne(
      { 'users.email': email },
      { 
        $set: { 
          [`users.$[user].spentTimeOnGym.${date}`]: timeSpent 
        } 
      },
      { 
        arrayFilters: [{ 'user.email': email }]
      }
    );

    // 2. If no document was matched, the user doesn't exist
    if (result.matchedCount === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // 3. If no modification was made but user exists, the field might not exist
    if (result.modifiedCount === 0) {
      // Initialize the field first
      await Gymers.updateOne(
        { 'users.email': email },
        { 
          $set: { 
            [`users.$[user].spentTimeOnGym`]: { [date]: timeSpent }
          } 
        },
        { 
          arrayFilters: [{ 'user.email': email }]
        }
      );
    }

    res.status(200).json({
      success: true,
      message: 'Workout time saved successfully'
    });

  } catch (error) {
    console.error('Error saving workout time:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while saving workout time',
      error: error.message 
    });
  }
};