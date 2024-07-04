const Schedule = require('../models/scheduleModels');

exports.getAllSchedules = (req, res) => {
    Schedule.getAllSchedules((err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database query error' });
            console.error(err);
            return;
        }
        res.json(results);
    });
};

exports.addSchedule = (req, res) => {   //create Schedule

    // const newRoute = {
    //     Route_ID: "RTE002",
    //     Start: "KHI002",
    //     End: "PEW001",
    //     RouteDescription: "Karachi Cantt to Peshawar Cantt"
    //   };  // Testing with static data
    const { sch_id, train_id, start, end, departure_time, arrival_time} = req.body;

    const newSchedule = {
        sch_id: sch_id,
        train_id:train_id,
        start: start,
        end:end,
        departure_time:departure_time,
        arrival_time:arrival_time
    }

    Schedule.createSchedule(newSchedule, (err) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Error creating new schedule' });
            console.log(err);
            throw err;
        }
        res.json({ success: true, message: 'schedule added successfully', New_Schedule_ID:sch_id});
    });
}


exports.updateSchedule = (req, res) => {
    const { sch_id, train_id, start, end, departure_time, arrival_time} = req.body;
    const schedule = {
        sch_id: sch_id,
        train_id:train_id,
        start: start,
        end:end,
        departure_time:departure_time,
        arrival_time:arrival_time
    }

    Schedule.updateSchedule(schedule.sch_id, schedule, (err, results) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Error updating schedule' });
            console.log(err);
            throw err;
        }
        res.json({ success: true, message: 'schedule updated successfully', Updated_Schedule_ID: sch_id });
    })
}


exports.deleteSchedule = (req,res) => {
    // const Route_ID = "RTE001"  // Testing Data
    const { sch_id } = req.body;
    console.log(sch_id);
    console.log(req.body);
    Schedule.deleteSchedule(sch_id, (err) => {
        if (err) {
            res.status(500).json({success: false, message: 'Error deleting schedule'})
            console.log(err)
            throw err;
        }
        res.json({success:true, message: 'schedule deleted successfully', Deleted_Schedule_ID: sch_id});
    })
}
