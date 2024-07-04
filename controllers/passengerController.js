const Passenger = require('../models/passengerModels');

// Getting all passengers
exports.getAllPassengers = (req, res) => {
    Passenger.getAllPassengers((err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database query error' });
            console.error(err);
            return;
        }
        res.json(results);
    });
};

// adding new passenger
exports.addPassenger = (req, res) => { 
    const { name, gender, phone_number } = req.body;

    // Check if the phone number already exists
    Passenger.findPassengerByPhoneNumber(phone_number, (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Database query error' });
        }
        if (results.length > 0) {
            return res.status(400).json({ success: false, message: 'Phone number already exists' });
        }

        // If phone number does not exist, create a new passenger
        const newPassenger = {
            name: name,
            gender: gender,
            phone_number: phone_number
        };

        Passenger.createPassenger(newPassenger, (err, passenger_id) => {
            if (err) {
                res.status(500).json({ success: false, message: 'Error creating new passenger' });
                console.log(err);
                throw err;
            }
            res.json({ success: true, message: 'Passenger added successfully', new_passenger_ID: passenger_id });
        });
    });
};

//  Updating passenger details
exports.updatePassenger = (req, res) => {
    const { passenger_id,name,gender,phone_number } = req.body;
    const passenger = {
        passenger_id:passenger_id,
        name:name,
        gender:gender,
        phone_number:phone_number
    }

    Passenger.updatePassenger(passenger.passenger_id, passenger, (err, results) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Error updating passenger' });
            console.log(err);
            throw err;
        }
        res.json({ success: true, message: 'passenger updated successfully', Updated_Passenger_ID: passenger_id});
    })
}

//  deleting a passenger
exports.deletePassenger = (req,res) => {
    const { passenger_id } = req.body;
    console.log(passenger_id);
    console.log(req.body);
    Passenger.deletePassenger(passenger_id, (err) => {
        if (err) {
            res.status(500).json({success: false, message: 'Error deleting passenger'})
            console.log(err)
            throw err;
        }
        res.json({success:true, message: 'passenger deleted successfully', Deleted_Passenger_ID: passenger_id});
    })
}
