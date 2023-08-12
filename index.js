const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, attribute) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() ===attribute.toLowerCase()
    })
};

console.log(findMatching(drivers, 'bobby'));

function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase()
    })
};

console.log(fuzzyMatch(drivers, 'S'));

const driversDetailed = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driversDetailed, argument) {
    return driversDetailed.filter( function(driver) {
        return driver.name === argument
    })
};

console.log(matchName(driversDetailed, 'Annette'));

