function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(someHighlight = '||') {
    return function (emphatic = 'a hard worker') {
        return `You are ${someHighlight}${emphatic}${someHighlight}!`
    }
}




// function wrapAdjective(someHighlight) {
//     if (someHighlight === '' || someHighlight ==='*') {
//         return function emphatic(someArg) {
//             someArg = 'a hard worker'
//             return `You are ${someHighlight}${someArg}${someHighlight}!`
//         }
//     }
//     else if (someHighlight === '' || someHighlight ==='||') {
//         return function emphatic(someArg) {
//             someArg = 'a dedicated programmer';
//             return `You are ${someHighlight}${someArg}${someHighlight}!`
//         }
//     }
// }
