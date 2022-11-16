import dbConnect from "../../../utils/dbConnect";
//import addDataToMarkers from '../../../utils/addCategoriesAndDesc';
import dev_LocationOfInterest from '../../../models/dev_LocationOfInterest';

dbConnect();


export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'POST':
			try {
				const loi = await dev_LocationOfInterest.find({ category: "arts" })
				//addDataToMarkers()
				res.status(201).json({ success: true, data: loi })
			} catch (error) {
				res.status(400).json({ "error message": error })
			}
			break;
		default:
			res.status(400).json({ success: false, message: "This route does not exist" })
	}
}
