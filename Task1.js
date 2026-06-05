// function declaration:
function findLowestHeight(heights){
    let lowHeight = heights[0];
    for(let height of heights){
        if(lowHeight > height){
            lowHeight = height;
        }
    }
    return lowHeight;
}

// function call:
const heights = [167, 190, 120, 165, 137];
const lowest = findLowestHeight(heights);
console.log("The Lowest Height is: ", lowest);