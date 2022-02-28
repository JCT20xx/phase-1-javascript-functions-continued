function saturdayFun (activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
};

const workFromHome = function (location){
    return (`This Monday, I will ${location}.`);
};

function mondayWork (location = "go to the office") {
   return workFromHome (location);
};


const wrapAdjective = function (wrap = "*"){
    return function (occupation = "special"){
        return `You are ${wrap}${occupation}${wrap}!`;
    }
};