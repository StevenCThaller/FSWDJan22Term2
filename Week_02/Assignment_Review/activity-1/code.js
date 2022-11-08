// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users);

// Append the katas to this element:
const main = document.querySelector("main");

const printKata = function (kataNumber, object) {
  // For the usage of the DETAILS and SUMMARY tags
  // in HTML, see: http://mdn.io/details-element
  const detailsElement = document.createElement('details')
  main.append(detailsElement)
  //
  const summaryElement = document.createElement('summary')
  summaryElement.append("KATA " + kataNumber)
  detailsElement.append(summaryElement)
  //
  // http://mdn.io/json.stringify
  const stringifiedObject = JSON.stringify(object)
  detailsElement.append(stringifiedObject)
}


// Kata 0
const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
  return user.eyeColor === "green"
})
printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.


// Kata 1: Use .filter() to show users with an isActive property of true
const activeUsers = users.filter(user => user.isActive)

printKata(1, activeUsers)

// Kata 2: User .map() to show only email addresses
const emailAddresses = users.map(user => user.email)

printKata(2, emailAddresses)

// Kata 3: Use .some()
const isCompanyOvationThere = users.some(user => user.company === "OVATION")

printKata(3, isCompanyOvationThere)

// Kata 4: Use .find()
const firstUserOver28 = users.find(user => user.age > 28)

printKata(4, firstUserOver28)

// Kata 5: Use .filter() and .find()
// Start with filter, then use find
const activeUserOver28 = users
  .filter(user => user.age > 28)
  .find(user => user.isActive)

printKata(5, activeUserOver28)

// Kata 6: User .filter() and .map()
// First, let's filter for all users with "ZENCO" as the company.
// THEN, off of that result, call .map() to just get balance
const zencoBalances = users
  .filter(user => user.company === "ZENCO")
  .map(user => user.balance)

printKata(6, zencoBalances)

// Kata 7: Use .filter(), .includes(), and .map()
// First, let's filter for users whose tags array .includes("fugiat")
// Then, use .map() to just get the ages
const fugiatAges = users
  .filter(user => user.tags.includes("fugiat"))
  .map(user => user.age)

printKata(7, fugiatAges)

// Kata 8: Use .reduce()
const totalBalance = users.reduce((sum, currentUser) => sum + Number(currentUser.balance.replace("$", "").replace(",", "")), 0)

printKata(8, totalBalance)


// PART 2

// Kata 9: Display every user with Brown Eyes

// const kata9H2 = document.createElement("h2")
// kata9H2.innerText = "Users with Brown Eyes"

// main.appendChild(kata9H2)

// const usersWithBrownEyesElement = document.createElement("ul")

main.innerHTML += (users
  .filter(user => user.eyeColor === "brown")
  .reduce((allHTML, user) => (
    allHTML + `<li>${user.name} <img src="${user.picture}"/></li>`
  ), "<h2>Users with Brown Eyes</h2><ul>") + "</ul>")


// Kata 10: Oh lawd, frequency tables
// Step 1: "Flatten" the tags 
function generateTagCounts(table, tag) {
  if (!table.hasOwnProperty(tag)) {
    table[tag] = 1
  } else {
    table[tag]++
  }

  return table
}

main.innerHTML += "<h2>Top 10 tags</h2><ul>"
main.innerHTML += Object
  .entries(
    users
      .map(user => user.tags)
      .flat()
      .reduce(generateTagCounts, {})
  )
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .reduce((accum, tagArr) => accum + `<li>${tagArr[0]}: ${tagArr[1]}</li>`, "") + "</ul>"
