// import { defaultConfig } from "next/dist/server/config-shared";
import findMiddleOfPolygon from "./findMiddle";


// does not work rn, do not use

/**
 * Accepts an array of polygons, each polygon is an array of coordinate pairs [longitude, latitude].
 * The middle of each polygon is calculated, if the middle of the polygon is outside the 
 * given bounds, it is removed from the array.
 * Bounds are defined in latitude & longitude. Default bounds are roughly outline of BC, Canada.
 * @param {number} north, northernmost latitude to include 
 * @param {number} south, southernmost latitude to include
 * @param {number} east, easternmost longitude to include
 * @param {number} west, westernmost longitude to include
 * @param {Array} polygons, 
 * @returns 
 */
function filterPolygons(locationsArray, north = 60.5000, south = 47.440567, east = -113.595329, west = -127.915090 ){
    let filteredLocations = [];
    
    // loop through polygons, find middle of each polygon
    for(let location of locationsArray){ // [long, lat]
        let polygonCoordinates = location.geometry.coordinates;
        

    }
    return filteredLocations;
}
    export default filterPolygons;

        // check if polygon is really far away
    //     // look at first coordinate, ignore the polygon if it is over 10 degrees away from the bounds, 
    //     let firstCoordinate = polygonCoordinates[0][0];
    //     let firstCoordinateLatitude = firstCoordinate[1];
    //     let firstCoordinateLongitude = firstCoordinate[0];

    //     // checks whether first coordinate is 10 degrees away from bounds
    //     let isCoordinateOutOfBounds = 
    //         firstCoordinateLatitude > north + 10 || 
    //         firstCoordinateLatitude < south - 10 || 
    //         firstCoordinateLongitude < east - 10 || 
    //         firstCoordinateLongitude > west + 10;

    //     // if first coordinate is over 10 degrees away from bounds, ignore the polygon
    //     if(isCoordinateOutOfBounds){
    //         continue;
    //     }

    //     // if first coordinate is within 10 degrees of bounds, find middle of polygon
    //     // let middleOfPolygon = findMiddleOfPolygon(polygonCoordinates[0]);
    //     filteredLocations.push(location);
    // 










// if longitude is negative
// east is - longitude, west is + longitude

// if longitude is positive
// east is + longitude, west is - longitude

//  edge case: 
//  polygons near the international date line or prime meridian will be filtered out incorrectly, 
//   ignored because it is outside the scope of this project.
