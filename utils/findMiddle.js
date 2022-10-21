/**
 * 
 * @param {Array} polygon, accepts an array of arrays. Each array is a coordinate pair [longitude, latitude]
 * @returns {Array} returns an array of the middle coordinate pair [longitude, latitude]
 */
function findMiddleOfPolygon(locationObj) {
    let eastmost = [-180, 0];
    let westmost = [180, 0];
    let northmost = [0, -90];
    let southmost = [0, 90];   

    let polygonCoordinates = locationObj.geometry.coordinates[0];
   

    // find eastmost, westmost, northmost, southmost point in array, loop through all points
    for(let coordinate of polygonCoordinates){
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
    let middleLongitude = (eastmost[0] + westmost[0]) / 2;
    let middleLatitude = (northmost[1] + southmost[1]) / 2;


    // if(middleLatitude == 0 && middleLongitude == 0){
    //     console.log("middleLatitude and middleLongitude are 0");
    //     // future code to handle this case will go here
    // }

    return [middleLongitude, middleLatitude];
}


export default findMiddleOfPolygon;













/** EDGE CASES AND NOTES; 
 * some of the polygons are multipolygons, which are arrays of arrays of arrays of coordinates
 * [
 *  [],
 *  [],
 *  []
 * ]
 * 
 * those are ignored for now
 */