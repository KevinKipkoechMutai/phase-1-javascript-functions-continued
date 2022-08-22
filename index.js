// code your solution here
//saturdayFun
function saturdayFun(Saturday) {
    if (Saturday == "bathe my dog") {
        return "This Saturday, I want to bathe my dog!";
    } else {
        return "This Saturday, I want to roller-skate!";
    }
}

//mondayWork
function mondayWork(Monday) {
    if (Monday == "work from home") {
        return "This Monday, I will work from home."
    } else {
        return "This Monday, I will go to the office."
    }
}

//wrapAdjective
function wrapAdjective(result = '*') {
   let wraps = function(emphatic) {
    if (result=='*') {
        emphatic = "a hard worker";
    } else if (result == "||") {
        emphatic = "a dedicated programmer";
    }
    return `You are ${result}${emphatic}${result}!`;
   }
   return wraps;
}

