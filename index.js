//1st Task

const returnFirstTwoDrivers = (names)=> [names[0], names[1]];
const returnLastTwoDrivers = (names)=>[names[names.length -2], names[names.length -1]];

//2nd Task

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

//3rd Task
// 1) Create the function, per the test case - createFareMultiplier 
// 2) assign the argument - multuplier or any name 
// 3) We need to return a function - that the orignal function can be multiplied against
// 4) We finally need to return what is being asked, the "multiplied a a given value using the created multiplier"

function createFareMultiplier(multiplier){
    return function (fare){
        return fare*multiplier;
    }
}

//4th Task
// 1) Create the function, per the test case - fareDoubler()
// 2) assign the argument - name
// 3) We need to return the argument multiplied by 2 (doubles the fare)

function fareDoubler(doubler){
    return doubler*2;
}

// 5th Task
// 1) Create the function, per the test case - fareTripler()
// 2) assign the argument - name
// 3) We need to return the argument muliplied be 3 (triples fares)

function fareTripler(tripler){
    return tripler*3
}

// 6th Task
// 1) Create the function, per the test case - selectDifferentDrivers, with two arguments arrayOfDrivers, function)

function selectDifferentDrivers(arrayOfDrivers, driverfunction){
    return driverfunction(arrayOfDrivers);
}
