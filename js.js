function task1() {
    let frameworks = ['AngularJS', 'jQuery'];

    console.log('a. Добавьте в начало массива значение ‘Backbone.js’')
    frameworks.unshift('Backbone.js');
    console.log(frameworks);

    console.log('b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’')
    frameworks.push('ReactJS', 'Vue.js');
    console.log(frameworks);

    console.log('c. Добавьте в массив значение ‘CommonJS’ вторым элементом')
    frameworks.splice(2, 0, 'CommonJS');
    console.log(frameworks);

    console.log('d. Найдите и удалите из массива значение ‘jQuery’ и выведите его в консоль со словами “Это здесь лишнее”')
    let elementIndex = frameworks.indexOf('jQuery');
    console.log('Это здесь лишнее:', frameworks.splice(elementIndex, 1));
}

function task2() {
    function removeNegativeElements(array) {
        let arrOfNegativeValues = [];
        array.forEach(function (item) {
            if (item < 0 && typeof item !== 'string') {
                arrOfNegativeValues.push(item);
            }
        });
        return arrOfNegativeValues = array.filter(x => !arrOfNegativeValues.includes(x));
    }

    let result1 = removeNegativeElements([-9, 2, 3, 0, -28, 'value']);
    console.log(result1);

    let result2 = removeNegativeElements([-9, -21, -12]);
    console.log(result2);

    let result3 = removeNegativeElements(['-102', 102]);
    console.log(result3);
}

function task3() {
    function getStringElements(array) {
        let arrString = [];
        array.forEach(function (item) {
            if (typeof item === 'string') {
                arrString.push(item);
            }
        });
        return arrString;
    }

    let arr = [1, true, 42, "red", 64, "green", "web", new Date(), -898, false]
    let result = getStringElements(arr);
    console.log(result);
}

function task4() {
    function sumElementsArr(array, sum) {
        sum += array.shift();
        if (array.length !== 0) {
            sum = sumElementsArr(array, sum);
        }
        return sum;
    }

    let myArr = [...Array(10)].map(() => Math.round(Math.random() * 10));
    console.log(myArr);
    console.log(sumElementsArr(myArr, 0));

}

function task5() {
    function sumElements(array, sum) {
        array = array.filter(item => item === 10);
        sum += array.shift();
        if (array.length !== 0) {
            sum = sumElements(array, sum);
        }
        return sum;
    }

    const arr = [0, 2, 4, 5, 7, 10, 2, 35, 6, 10, 3];
    console.log(arr);
    console.log(sumElements(arr, 0));
}

function task6() {
    function showNewArr(array) {
        let newArr = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] === undefined) {
                console.log('array is empty');
            } else if (array[i] > 5) {
                newArr.push(array[i]);
                continue;
            }
            newArr.push(...showNewArr(array[i]));
        }
        return newArr;
    }

    const arr = [0, 2, 4, 5, 7, 10, 2, 35, 6, 10, 3];
    console.log(showNewArr(arr));
}
