const arr = [1, 2, 3, 4, 5]
console.log(arr)


const copyArr = []
for (let i = 0; i < arr.length; i++) {
    copyArr[i] = arr[i];
}
copyArr.push(6)
console.log(copyArr)


const copyArr2 = [...arr, 7]
console.log(copyArr2)
console.log(copyArr2 === copyArr)


const user = {
    name: 'Donald',
    age: 78,
}

const copyUser = { ...user, age: 79 }
console.log(copyUser)
console.log(copyUser === user)

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]

const newUsers = [
    {
        id: 5,
        name: 'Helen',
        isStudent: true,
    },
]

const users2 = [...users, newUsers[0]]
console.log(users2)

//удаление через елемента массива через цикл и метод splice
const users3 = [...users2]
let index;
for (let i = 0; i < users3.length; i++) {
    if (users3[i].id === 3) {
        index = i
    }
}
users3.splice(index, 1)
console.log(users3)


//удаление элемента массива через метод filter
const users4 = users2.filter(user => user.id !== 3)
console.log(users4)

const superUser = {
    id: 10,
    name: 'Moriah',
    ueseername: 'rfasabv',
    email: 'hshhdh@gmail.com',
    address: {
        street: 'WalkinStreet',
        suite: 'stnn2134',
        city: 'Minsk',
        zipcode: 'teht5e4',
        geo: {
            lat: 'thwe54e234',
            lng: 'thsh',
        },
    },
    phone: '+24363266',
    website: 'www.htsh.com',
    company: {
        name: 'wthhbebe',
        catchPhrase: 'enrrnvtrehntMFK',
        bs: 'ern rehr-treh',
    },
}

const superUser2 = {...superUser,phone:'+37525252'}
console.log(superUser2)

const superUser3 = {...superUser,company:{...superUser.company, catchPhrase: 'Hello'}}
console.log(superUser3)

const superUser4 ={...superUser,address:{...superUser.address,geo:{...superUser.address.geo,lat:'newLat'}}}
console.log(superUser4)


