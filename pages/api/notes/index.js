// this will route to :     /api/notes

import dbConnect from "../../../utils/dbConnect";
import Note from '../../../models/Note';

dbConnect();

export default async (req, res) => {
    // figure out what type of request
    const {method} = req;

    switch(method){
        case 'GET':
            try{
                // find all notes
                const notes = await Note.find({})
                res.status(200).json({success: true, data: notes})
            } catch(error){
                res.status(400).json({success: false})
            }
            break;
        case 'POST':
            try{
                const note = await Note.create(req.body)
                res.status(201).json({success: true, data: note})
            } catch(error){
                res.status(400).json({success: false})
            }
            break;
        default:
            res.status(400).json({success: false, message: "This route does not exist"})
            break;
    }
}