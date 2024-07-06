const con = require('../database');  // Adjust the path as necessary

const Schedule = {
  // Get all schedules
  getAllSchedules: function (callback) {
    const sql = 'SELECT * FROM schedule';
    con.query(sql, callback);
  },

  // Get schedule by sch_id
  getScheduleById: function (sch_id, callback) {
    const sql = 'SELECT * FROM schedule WHERE sch_id = ?';
    con.query(sql, [sch_id], callback);
  },
  //  finding train_id through start and end
  findtrainbystartend: function (start,end,callback){
    const sql ='Select * FROM schedule WHERE start = ? AND end = ?'
    con.query(sql,[start,end],callback);
  },
  // Create a new schedule
  createSchedule: function (schedule, callback) {
    const sql = 'INSERT INTO schedule (sch_id, train_id, start, end, departure_time, arrival_time) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(sql, [schedule.sch_id, schedule.train_id, schedule.start, schedule.end, schedule.departure_time, schedule.arrival_time], function (err, result) {
      if (err) return callback(err);
      // Retrieve the inserted Sch_ID
      const schID = result.insertId;
      callback(null, schID);
    });
  },

  // Update a schedule by Sch_ID
  updateSchedule: function (sch_id, schedule, callback) {
    const sql = 'UPDATE schedule SET start = ?, end = ?, departure_time = ?, arrival_time = ? WHERE sch_id = ?';
    con.query(sql, [schedule.start, schedule.end, schedule.departure_time, schedule.arrival_time, sch_id], function (err, result) {
      if (err) return callback(err);
      callback(null, result.affectedRows);  // Number of rows affected
    });
  },

  // Delete a schedule by Sch_ID
  deleteSchedule: function (sch_id, callback) {
    const sql = 'DELETE FROM schedule WHERE sch_id = ?';
    con.query(sql, [sch_id], function (err, result) {
      if (err) return callback(err);
      callback(null, result.affectedRows);  // Number of rows affected
    });
  }
};

module.exports = Schedule;