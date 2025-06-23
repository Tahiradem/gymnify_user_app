import "./UserDataBox.css";
import { getAuthData, storeAuthData } from "../utils/authStorage";
import { FaPen } from 'react-icons/fa';
import { useState } from 'react';
import EditModal from './EditModal';

const UserDataBox = () => {
  const { userData, gymName, email, password } = getAuthData();
  const [editingField, setEditingField] = useState(null);
  const [currentValue, setCurrentValue] = useState(null);

  const handleEditClick = (field, value) => {
    setEditingField(field);
    setCurrentValue(value);
  };

  const handleSave = async (newValue) => {
    try {
      // Update the user data in sessionStorage
      let updatedUserData;
      
      // Special handling for nested objects/arrays
      if (editingField === 'medicalConditions') {
        updatedUserData = { 
          ...userData, 
          medicalConditions: [newValue] 
        };
      } else if (editingField === 'supplements') {
        updatedUserData = { 
          ...userData, 
          supplements: [{ name: newValue }] 
        };
      } else if (editingField === 'membershipDetail') {
        // This might need more complex handling based on your data structure
        updatedUserData = userData;
      } else if (editingField === 'exercises') {
        // For weekly exercises, we might need a different modal
        updatedUserData = userData;
      } else {
        updatedUserData = { ...userData, [editingField]: newValue };
      }
      
      storeAuthData(email, password, updatedUserData, gymName);

      // Here you would typically also send the update to your backend
      const response = await fetch('http://localhost:5000/api/auth/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          field: editingField,
          value: newValue
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
      
    } catch (error) {
      console.error('Error updating user data:', error);
      throw error;
    }
  };

  const handleClose = () => {
    setEditingField(null);
    setCurrentValue(null);
  };

  return (
    <div className="user_data_main_container">
      {editingField && (
        <EditModal
          field={editingField}
          currentValue={currentValue}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
      
      <div className="user_data_each_section">
        <p className="data_name_text">Weight</p>
        <p className="real_data_value_text">{userData.weight} KG</p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('weight', userData.weight)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Height</p>
        <p className="real_data_value_text">{userData.height} M</p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('height', userData.height)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Age</p>
        <p className="real_data_value_text">{userData.age}</p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('age', userData.age)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Medical Condition</p>
        <p className="real_data_value_text">
          {userData.medicalConditions && userData.medicalConditions[0] !== "" 
            ? userData.medicalConditions[0] 
            : "---"}
        </p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('medicalConditions', 
            userData.medicalConditions && userData.medicalConditions[0] !== "" 
              ? userData.medicalConditions[0] 
              : ""
          )} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Entering Time</p>
        <p className="real_data_value_text">{userData.enteringTime}</p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('enteringTime', userData.enteringTime)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Exercise Type</p>
        <p className="real_data_value_text">{userData.exerciseType}</p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('exerciseType', userData.exerciseType)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Body Fat</p>
        <p className="real_data_value_text">{userData.bodyFat}</p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('bodyFat', userData.bodyFat)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Fitness Goal</p>
        <p className="real_data_value_text">{userData.fitnessGoal}</p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('fitnessGoal', userData.fitnessGoal)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Metabolic Level</p>
        <p className="real_data_value_text">{userData.metabolicHealth}</p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('metabolicHealth', userData.metabolicHealth)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Activity Level</p>
        <p className="real_data_value_text">{userData.activityLevel}</p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('activityLevel', userData.activityLevel)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Exercise Time / Day</p>
        <p className="real_data_value_text">{userData.exerciseTimePerDay}</p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('exerciseTimePerDay', userData.exerciseTimePerDay)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Live in hot climate</p>
        <p className="real_data_value_text">
          {userData.livesInHotClimate ? 'Yes' : 'No'}
        </p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('livesInHotClimate', userData.livesInHotClimate)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Weekly Exercise</p>
        <ul>
          {userData.exercises && userData.exercises.map((exercise, index) => (
            <li key={index} className="real_data_value_text exercise_week">
              {getDayName(index)}-{exercise || "---"}
            </li>
          ))}
        </ul>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('exercises', userData.exercises)} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Supplements</p>
        <p className="real_data_value_text">
          {userData.supplements && userData.supplements[0]?.name || "---"}
        </p>
        <FaPen 
          className="edit_icon_for_profile" 
          onClick={() => handleEditClick('supplements', 
            userData.supplements && userData.supplements[0]?.name || ""
          )} 
        />
      </div>
      
      <div className="user_data_each_section">
        <p className="data_name_text">Membership</p>
        <p className="real_data_value_text membership_plan_text_data">
          {userData.membershipDetail && userData.membershipDetail[0] 
            ? `${userData.membershipDetail[0].planName}- ${userData.membershipDetail[0].price} /${userData.membershipDetail[0].packageLength}`
            : "---"}
        </p>
        <FaPen className="edit_icon_for_profile" />
      </div>
    </div>
  );
};

// Helper function to get day names
const getDayName = (index) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return days[index] || '';
};

export default UserDataBox;