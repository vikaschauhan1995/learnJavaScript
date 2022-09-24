const characters = [
  {
    name: 'Vikas',
    heigth: 177,
    mass: 77,
    eye_color: 'black',
    gender: 'male'
  }, {
    name: 'Anuj',
    heigth: 177,
    mass: 99,
    eye_color: 'black',
    gender: 'male'
  }, {
    name: 'Tarak Mehta',
    heigth: 172,
    mass: 77,
    eye_color: 'brown',
    gender: 'male'
  },
  {
    name: 'Jethalala',
    heigth: 145,
    mass: 136,
    eye_color: 'black',
    gender: 'male'
  },
  {
    name: 'ABabita Ji',
    heigth: 150,
    mass: 49,
    eye_color: 'grey',
    gender: 'female'
  },
  {
    name: 'Krishnan Iyer',
    heigth: 168,
    mass: 322,
    eye_color: 'black',
    gender: 'male'
  }
];
const namesArray = characters.map(c => c.name);
console.log(namesArray);

const nameHeightArray = characters.map(c => {
  return {
    name: c.name,
    height: c.height
  }
});
console.log(nameHeightArray);

const getTotalHeight = characters.reduce((a, b) => { return a + b.heigth }, 0);

console.log(getTotalHeight);

// find character with mass greater than 100

const getLargeMass = characters.filter(c => c.mass > 100);
console.log(getLargeMass);

const getAllMales = characters.filter(c => c.gender === 'male');
console.log(getAllMales);

const sortByName = characters.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
})

console.log(sortByName);

const allHaveGreaterMass = characters.every(c => c.mass > 40);
console.log(allHaveGreaterMass);

const allHaveBlueEyes = characters.every(c => c.eye_color === 'black');
console.log(allHaveBlueEyes);

// have atleast one female
const haveOneFemale = characters.some(c => c.gender === 'female');
console.log(haveOneFemale);

// atleast one character taller than 100
const haveOneTaller = characters.some(c => {
  return c.heigth >= 100
});
console.log(haveOneTaller); 