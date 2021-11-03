// Your code here
function saturdayFun(activity) {
    switch (activity) {
        case "bathe my dog": 
            activity = `This Saturday, I want to bathe my dog!`;
            return activity;
        default: 
            activity = `This Saturday, I want to roller-skate!`
            console.log(activity);
            return activity;
    }
}

const mondayWork = function(work) {
    switch (work) {
        case 'work from home':
            work = 'This Monday, I will work from home.';
            return work;
        default:
            work = 'This Monday, I will go to the office.';
            return work;
    }
}

function wrapAdjective(adjective = "*") {
    const innerFunction = function (endStatement = "special") {
        return `You are ${adjective}${endStatement}${adjective}!`
    }
    return innerFunction;
}
wrapAdjective()("a hard worker");


