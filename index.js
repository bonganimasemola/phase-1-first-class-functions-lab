const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//const drivers = function() {
//    console.log()
//}
// return returnfirstTwoDrivers([0, 2])
//

//returnFirstTwoDrivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice (0, 2);
}

 //returnLastTwoDrivers
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

//selectingDrivers
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

//function selectingDrivers(drivers) {
//  const firstTwoDrivers = drivers.slice(0, 2);
//  return [firstTwoDrivers];
//} 

//function selectingDrivers() {
//  const lastTwoDrivers = drivers.slice(-2);
//  return [lastTwoDrivers];
 
  function selectDifferentDrivers(drivers, selectFunction) {
    return  selectFunction(drivers);
    }
   

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

  
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // function selectingDrivers(driverFunction) {
  //   return driverFunction(drivers);
  // }
  
   //const firstTwo = selectingDrivers(returnFirstTwoDrivers);
   //const lastTwo = selectingDrivers(returnLastTwoDrivers);


     /*  function selectingDrivers (whichDrive) {
    if (returnFirstTwoDrivers === drivers) {
        return drivers.slice (0, 2);}
    if  (returnLastTwoDrivers === drivers) {
        return drivers.slice(-2);   
    }}  */

    //createFareMultiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
    return fare * multiplier;
      };
      }
  //fareDoubler   
 function fareDoubler(fare){
    return fare * 2;
    } 
 //fareTripler     
function fareTripler(fare){
    return fare * 3;
    } 

     function selectDifferentDrivers(drivers, selectFunction) {
     return  selectFunction(drivers);
     }
    