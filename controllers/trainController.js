const train = require('../models/trainModels');
// getting all the trains information
exports.getTrains = (req, res) => {
    train.findAllTrains((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database query error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ success: false, message: 'Data not found' });
        }
        res.json(results);
    });
};

exports.create = (req, res) => {
    const { train_id, capacity } = req.body;

    const newTrain = {
        train_id: train_id,
        capacity: capacity
    }

    train.create(newTrain, (err) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Error adding a new train' });
            console.log(err);
            throw err;
        }
        res.json({success: true, message: 'Successfully added a new train', new_train_ID: train_id})
        
    })
}


exports.update = (req, res) => {
    const { train_id, capacity } = req.body;

    const newTrain = {
        train_id: train_id,
        capacity: capacity
    }

    train.update(train_id, newTrain, (err) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Error updating train information' });
            console.log(err);
            throw err;
        }
        res.json({success: true, message: 'Successfully updated train information', updated_train_ID: train_id});
    })
}


exports.delete = (req, res) => {
    const { train_id } = req.body;

    train.delete(train_id, (err) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Error deleting train information' });
            console.log(err);
            throw err;
        }
        res.json({success: true, message: 'Successfully deleted train information', deleted_train_ID: train_id});
    })
}


// this is the implementation to get specific train id
// exports.getTrains = (req, res) => {
//     const { train_id } = req.body;
//     train.findByTrainID(train_id, (err, results) => {
//         if (err) {
//             res.status(404).json({message: 'Database query error'});
//         }
//         if (results.length<0) {
//             res.status(404).json({success: false, message: 'Data not found'});
//         }
//         res.json(results);
//     }) 
// }