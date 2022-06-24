const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let users3l = users.filter(function(user) {
    return user.languages.length >= 3;
});
console.log(users3l);

let userEmail = users.map(function (e){
    return e.email + 1;
})
console.log(userEmail);

// Use .reduce to get the total years of experience from the list of users.
//     Once you get the total of years you can use the result to calculate the
// average.

const avgYears = users.reduce((sum,years) => {
    return sum + years.yearsOfExperience / users.length
}, 0);
console.log(avgYears);

// Use .reduce to get the longest email from the list of users.

// const findLongestEmail = ((str) => {
    // let strSplit = str.split(' ');

//     const longestEmail = users.reduce((longest, currentEmail) => {
//          return longest.length > currentEmail.length ? longest:currentEmail
//     }, "");
//     // return longestEmail;
// }
// console.log(longestEmail);

const longestEmail = users.reduce(
    (longest, currentEmail) =>
        longest.length > currentEmail.length ? longest : currentEmail.length,
    0);
console.log(longestEmail);