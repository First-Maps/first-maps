
/**
 * @param {Array}  coordinates [longitude, latitude]
 * returns coordinate that is middle of the polygon,
 * Caltulated by using northernmost, southernmost, easternmost and westernmost points
 */
function findMiddle(arr) {
    let eastmost = [-180, 0];
    let westmost = [180, 0];
    let northmost = [0, -90];
    let southmost = [0, 90];
    
    // find eastmost, westmost, northmost, southmost point in array, loop through all points
    for( coordinate of arr){
        if(coordinate[0] > eastmost[0]){
            eastmost = coordinate;
        }
        if(coordinate[0] < westmost[0]){
            westmost = coordinate;
        }
        if(coordinate[1] > northmost[1]){
            northmost = coordinate;
        }
        if(coordinate[1] < southmost[1]){
            southmost = coordinate;
        }
    }

    // find middle point between eastmost and westmost
    let middleLatitude = (eastmost[0] + westmost[0]) / 2;
    let middleLongitude = (northmost[1] + southmost[1]) / 2;
    
    return [middleLatitude, middleLongitude];
}

