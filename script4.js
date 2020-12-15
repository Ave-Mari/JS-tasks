const mixedArray = [4,13,84,124,76,13,22,41,6];


const isEven = num => {
    if (num % 2 == 0) {
        return num;
    }
}

const filterArray = (arrayToFilter, filterFn) => {
    const filterArray = [];
    arrayToFilter.forEach(num => {
        if (filterFn(num)) {
            filterArray.push(num);
        };
    })

    return filterArray;
}

console.log(filterArray(mixedArray, isEven));


