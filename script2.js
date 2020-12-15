const workers = [
    {"name": "Nick", "salary": 700},
    {"name": "Sara", "salary": 900},
    {"name": "John", "salary": 1800},
    {"name": "Neo", "salary": 2300}
];



const getWorthyWorkers = function (workersArr) {
    const worthyWorkers = []; 

    for (var i = 0; i < workersArr.length; i++) {
        const currentWorker = workersArr[i];

        if (currentWorker.salary > 1000) {
            worthyWorkers.push(currentWorker.name);
        };
    }

    return worthyWorkers;
};

console.log(getWorthyWorkers(workers));
