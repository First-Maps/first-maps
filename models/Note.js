import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'plz add title'],
        unique: true,
        trim: true,
        maxlength: [40, 'title can not be more than 40 characters']
    },
    description:{
        type: String, 
        required: true, 
        maxlength: [500, 'description can not be more than 500 characters'],
    }
})

// if it exists, export it. if not, create it and export it
module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema)


/** 
 * This code is from the video: https://www.youtube.com/watch?v=ahAilJEe-_A
 * It builds an example note schema that was used for testing purposes.
 */