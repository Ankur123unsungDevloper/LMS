const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
    role: { type: String, default: 'Student' },
    progress: {
        completedCourses: { type: Number, default: 0 },
        totalHours: { type: Number, default: 0 },
        assignmentsDone: { type: Number, default: 0 },
        certificatesEarned: { type: Number, default: 0 },
        overallProgress: { type: Number, default: 0 }
    },
    streak: { type: Number, default: 0 },
    points: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);
