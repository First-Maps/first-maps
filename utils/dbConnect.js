import mongoose from 'mongoose';

const connection = {};

// check if we have connection to our database
async function dbConnect() {
	if (connection.isConnected) {
		return;
	}

	const db = await mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // give the ready state value
    connection.isConnected = db.connections[0].readyState;
    
    if(connection.isConnected == 1){
        console.log('✅ 📚 Connected to Database');
    } else if(connection.isConnected == 0){
        console.log('❌ 📚 Not Connected to Database');
    }
}

export default dbConnect;