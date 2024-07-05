const express = require('express');
const router = express.Router();
const scheduleControllers = require('../controllers/scheduleController');

router.get('/schedules', scheduleControllers.getAllSchedules);
router.post('/schedule-by-start-end',scheduleControllers.getTrainByStartEnd);
router.post('/create-schedule', scheduleControllers.addSchedule);
router.put('/update-schedule',scheduleControllers.updateSchedule);
router.delete('/delete-schedule',scheduleControllers.deleteSchedule);

module.exports = router;