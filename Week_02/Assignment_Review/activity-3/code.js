// Object Equality Katas

// All of these functions should be PURE and have NO SIDE EFFECTS.  
// Do not modify any of the input objects
// Always create a new array or object when returning

// There are unit tests in `tests.js`.  These tests will automatically run in the console.

// This should compare if a and b are exactly the same object. 
// (Hint: the two objects are the same memory address, or the two arguments are both pointers to the same object)  
const isTheSameObjectShallow = function (a, b) {
  // Your Code Here!
  return a === b;
}

// This should compare if a and b have the same properties
// It doesn't matter if the values are different, return true if the properties are the same
// for example { name: "foo" } and { name: "bar" } both have the same property, name.  
// Even through their values are different
const haveSameStructure = function (a, b) {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)
  return (
    aKeys.every(key => bKeys.includes(key))
    &&
    bKeys.every(key => aKeys.includes(key))
  )
}

// This should do a DEEP comparison of the two objects
// If both object have the same properties, and those properties have the same values,
// then return true
// If any property or value differs, then return false

// Overall Steps:
// Convert objects into arrays of properties
// Check 1: If aKeys and bKeys have different lengths, it's not the same
// For each property
//  if the value is primitive (i.e. string, number, boolean), and is not the same,
//  return false
//  if the value is not primitive (i.e. object or array), pass that into this function
const isTheSameObjectDeep = function (a, b) {
  let aKeys = Object.keys(a)
  let bKeys = Object.keys(b)
  if (aKeys.length !== bKeys.length) {
    return false
  }

  return aKeys.every((key) => {
    if (!bKeys.includes(key)) return false

    if (typeof (a[key]) !== 'object') {
      return a[key] === b[key]
    } else {
      return isTheSameObjectDeep(a[key], b[key])
    }
  })
}

// This should create a shallow copy of the given object.
// The returned object should a new object which has exactly the same properties and values as the parameter
const createShallowCopy = function (object) {
  // Your Code Here!
  return { ...object };
}

// This should combine the two arrays
// The returned array should be a new array.  
// For example, ["a", "b"] and ["c", "d"] should combine to be ["a", "b", "c", "d"]
const combineArrays = function (arrayOne, arrayTwo) {
  // Your Code Here!
  return [...arrayOne, ...arrayTwo];
}

// This should combine the two objects
// The returned object should be a new object
// For example, { name: "Bob" } and { age: 32 } should combine to be { name: "bob", age: 32 }
const combineObjects = function (objectOne, objectTwo) {
  // Your Code Here!
  return { ...objectOne, ...objectTwo };
}

// This should create a new object, which is a copy of the given object.  But this new object should 
// also have the given property and value.
// For Example,
// copyObjectAndAddProperty({ name: "Peter", age: 31 }, "location", "Indianapolis");
// This would return an object that looks like this: { name: "Peter", age: 31, location: "Indianapolis" } 
const copyObjectAndAddProperty = function (object, property, value) {
  return { ...object, [property]: value };
}

export { combineArrays, combineObjects, copyObjectAndAddProperty, createShallowCopy, haveSameStructure, isTheSameObjectDeep, isTheSameObjectShallow };
