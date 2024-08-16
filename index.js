const arrayOfUsers = [
    {
        name: 'Dima',
        eyeColor: 'Brown',
        gender: 'Male',
        isActive: true,
        email: 'dima.krytoi@gmail.com',
        age: 12,
    },
    {
        name: 'Milan',
        eyeColor: 'Green',
        gender: 'Male',
        isActive: false,
        email: 'milan.krytoi@gmail.com',
        age: 11,
    },
    {
        name: 'Ira',
        eyeColor: 'Green',
        gender: 'Female',
        isActive: true,
        email: 'ira.krytaia@gmail.com',
        age: 14
    },
    {
        name: 'Vlad',
        eyeColor: 'Grey',
        gender: 'Male',
        isActive: true,
        email: 'vlad.krytoi@gmail.com',
        age: 13
    },
    {
        name: 'Vera',
        eyeColor: 'Brown',
        gender: 'Female',
        isActive: true,
        email: 'vera.krytaia@gmail.com',
        age: 13
    },
    {
        name: 'Bogdan',
        eyeColor: 'Brown',
        gender: 'Male',
        isActive: false,
        email: 'bogdan.krytoi@gmail.com',
        age: 15,
    }
]
// 1
const names = arrayOfUsers.map(arrayOfUsers => arrayOfUsers.name);
console.log(names);

// 2
const eyeColors = [
    [

    ],
    [

    ],
    [

    ],
];
arrayOfUsers.forEach((currentValue, index) => {
    if (arrayOfUsers[index].eyeColor === 'Brown') {
        eyeColors[0].push(arrayOfUsers[index]);
    }
    else if (arrayOfUsers[index].eyeColor === 'Green') {
        eyeColors[1].push(arrayOfUsers[index]);
    }
    else {
        eyeColors[2].push(arrayOfUsers[index]);
    }
});
console.log(eyeColors);

// 3
const males = [];
const females = [];
arrayOfUsers.forEach((currentValue, index) => {
    if(arrayOfUsers[index].gender === 'Male'){
        males.push(arrayOfUsers[index].name)
    }
    else(females.push(arrayOfUsers[index].name))
});
console.log(males);
console.log(females);

// 4
const notActive = arrayOfUsers.filter(user => !user.isActive);
console.log(notActive)

// 5
const userWithThisEmail = arrayOfUsers.find(user => user.email === 'vlad.krytoi@gmail.com');
console.log(userWithThisEmail)

// 6
const filtredAges = arrayOfUsers.filter(user => user.age >= 12 && user.age < 14);
console.log(filtredAges);
