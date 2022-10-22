import mongoose from 'mongoose'


const dev_LocationsOfInterestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide name of point of interest'],
        unique: true,
        trim: true,
        maxlength: [50, 'name cannot be more than 50 characters']
    },
    description: {
        type: String,
        required: false,
        maxlength: [500, 'description can not be more than 500 characters'],
    },
    category: { // arts/culture/language/history
        type: String,
        required: false,
        maxlength: [50, 'description can not be more than 500 characters'],
    },
    coordinates: {
        type: [Number],   // [<longitude>, <latitude>]
        index: '2d'   // create the geospatial index
    },
    
})

// if the dev_LocationsOfInterestSchema db exists, export it. if not, create it and export it
module.exports = mongoose.models.dev_LocationOfInterest || mongoose.model('dev_LocationOfInterest', dev_LocationsOfInterestSchema)

