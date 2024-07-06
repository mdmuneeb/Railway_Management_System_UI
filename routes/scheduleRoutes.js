const express = require('express');
const router = express.Router();
const scheduleControllers = require('../controllers/scheduleController');

router.get('/schedules', scheduleControllers.getAllSchedules); // Get all schedules
router.post('/schedule-by-id', scheduleControllers.getScheduleById); // Get schedule by sch_id
router.post('/schedule-by-start-end',scheduleControllers.getTrainByStartEnd); // Get schedule by start and end locations
router.post('/create-schedule', scheduleControllers.addSchedule); // Create a new schedule
router.put('/update-schedule',scheduleControllers.updateSchedule); // Update a schedule by Sch_ID
router.delete('/delete-schedule',scheduleControllers.deleteSchedule); // Delete a schedule by Sch_ID

module.exports = router;