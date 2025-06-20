const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  ID: Number,
  userName: String,
  email: String,
  password: String,
  phone: String,
  age: Number,
  sex: String,
  height: Number,
  weight: Number,
  registeredDate: String,
  paymentDate: String,
  paymentStatus: Boolean,
  exerciseTimePerDay: String,
  notificationTime: String,
  healthStatus: String,
  exerciseType: String,
  enteringTime: String,
  bloodType: String,
  exercises: [String],
  upComingExercise: String,
  totalTimeSpendOnGym: String,
  proteinAmountRequired: String,
  TodayNotification: String,
  activityLevel: String,
  fitnessGoal: String
});

const weeklyDataSchema = new mongoose.Schema({
  Mon: Number,
  Tue: Number,
  Wed: Number,
  Thu: Number,
  Fri: Number,
  Sat: Number,
  Sun: Number,
  week1: {
    Mon: Number,
    Tue: Number,
    Wed: Number,
    Thu: Number,
    Fri: Number,
    Sat: Number,
    Sun: Number
  },
  week2: {
    Mon: Number,
    Tue: Number,
    Wed: Number,
    Thu: Number,
    Fri: Number,
    Sat: Number,
    Sun: Number
  },
  week3: {
    Mon: Number,
    Tue: Number,
    Wed: Number,
    Thu: Number,
    Fri: Number,
    Sat: Number,
    Sun: Number
  },
  week4: {
    Mon: Number,
    Tue: Number,
    Wed: Number,
    Thu: Number,
    Fri: Number,
    Sat: Number,
    Sun: Number
  }
});

const membershipSchema = new mongoose.Schema({
  Basic: {
    "1": String,
    "2": String,
    "3": String,
    "6": String,
    "12": String,
    services: [String]
  },
  Plus: {
    "1": String,
    "2": String,
    "3": String,
    "6": String,
    "12": String,
    services: [String]
  },
  Pro: {
    "1": String,
    "2": String,
    "3": String,
    "6": String,
    "12": String,
    services: [String]
  }
});

const gymSchema = new mongoose.Schema({
  name: String,
  users: [userSchema],
  dailyIncome: [Number],
  dailyOutcome: [Number],
  dailyRevenue: Number,
  weeklyIncome: [weeklyDataSchema],
  weeklyExpense: [weeklyDataSchema],
  weeklyRevenue: [weeklyDataSchema],
  monthlyIncome: [Number],
  monthlyExpense: [Number],
  monthlyRevenue: [Number],
  email: String,
  password: String,
  phoneNumber: String,
  registeredDate: String,
  totalUsers: Number,
  currentUsers: Number,
  location: String,
  adminNotifications: [String],
  pricePlan: Number,
  paymentsList: [String],
  accountNumbers: [String],
  payDone: Boolean,
  serviceTermination: Boolean,
  memberShip: membershipSchema
});

module.exports = mongoose.model('Gymers', gymSchema);