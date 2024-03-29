const investor = [
    {first: "Albert", last: "Alb", year: 1879, passed: 1955 }, 
    {first: "Isaac", last: "Isa", year: 1799, passed: 1855 }, 
    {first: "Galileo", last: "Gal", year: 1698, passed: 1455 }, 
    {first: "Marie", last: "Rie", year: 1899, passed: 1875 }, 
    {first: "Max", last: "Planck", year: 1849, passed: 1755 }, 
    {first: "Johannes", last: "John", year: 1279, passed: 1855 }, 
]

const people = [
    'John, Smith', 
    'lol, good', 
    'hate, me', 
    'michael, jordan', 
    'samantha, soh', 
    'give, me', 
    'love, you', 
    'java, script', 
    'py, thon', 
    'ja, va', 
    'kenneth, kang',
    'hui, teng',
    'july, ng'
]

const pupil = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
]

const comments = [
    { text: 'Love this', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 203423 },
    { text: 'Ramen is good', id: 123423 },
    { text: 'Nice Nice Nice', id: 542423 }
]

//1. array prototype filter()
// filter the first of investor for those who were born in 1800's
const eighteen = investor.filter(function(investor) {
    if (investor.year >= 1800 && investor.year <= 1899) {
        return true;
    } 
});
console.table(eighteen)


//2. array prototype.map()
// give us an array of fullname of the investor
const fullName = investor.map(investor => `${investor.first} ${investor.last}`);
console.log(fullName)


//3. array prototype.sort()
// sort the inventors by birthdate, oldest to youngest
const birthDate = investor.sort(function(a, b) {
    if(a.year < b.year) {
        return -1;
    } else {
        return 1;
    }
})
console.log(birthDate)

//4. array prototype.reduce()
// how many years did all the investors live
const alive = investor.reduce((total, investor) => {
    return total = (investor.passed - investor.year);
}, 0)

console.log(alive)

//5. sort inventors by years live?
const oldest = investor.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    if (lastGuy < nextGuy) {
        return -1;
    } else {
        return 1;
    }
});

console.log(oldest)

//6. create a list of boulevards in Paris that contain 'de' any where in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category')
// const links = Array.from(category.querySelectorAll('a'));
// const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));


// 7. sort exercise
// sort the people alphabet by last name
const peoples = people.sort(function(lastOne, nextOne) {
    const [aLast, aFirst] = lastOne.split(', ')
    const [bLast, bFirst] = nextOne.split(', ')
    return aLast > bLast ? 1 : -1;
});
console.log(peoples)

// 8. reduce exercise
// sum the instance data 
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car,', 'van', 'car', 'truck'];
const transportation = data.reduce(function(obj, item) {
    // console.log(item)
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation)

// 9. some() and every() checks
// some() => is at least one person 19?
const adult = pupil.some(function(person) {
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true;
    }
});

console.log({adult})
// every() => is everyone 19?
const allAdults = pupil.every(function(person) {
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true;
    }
});

console.log({allAdults})

// 10. find() => find() is like filter, but instead of return just one you are looking for find the comment with the ID 823423
const comment = comments.find(function(comment) {
    if(comment.id == 823423) {
        return comment.text
    }
});

console.log(comment)

//11. findIndex()
// find the comment with this ID
// delete the comment with ID of 823423
const index = comments.findIndex(function(comment) {
    if(comment.id == 823423) {
        return true;
    }
});

console.log(index)

comments.splice(index, 1);

