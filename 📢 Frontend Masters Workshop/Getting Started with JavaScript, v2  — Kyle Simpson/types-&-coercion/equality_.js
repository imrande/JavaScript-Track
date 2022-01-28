/*
== check value
=== check value and type {{ Not true actually}}

== [allow coercion] (types are different)
=== [disallow coercion] (types should be same)

== is not about comparisons with unknown type
== is about comparisons with known type(s).
*/

let studentName1 = 'Frank'
let studentName2 = `${studentName1}`

let workShopEnrollment1 = 16
let workShopEnrollment2 = workShopEnrollment1 + 0

console.log(studentName1 == studentName2) // => true
console.log(studentName1 === studentName2) // => true

console.log(workShopEnrollment1 == workShopEnrollment2) // => true
console.log(workShopEnrollment1 === workShopEnrollment2) // => true

console.log(null == undefined) // => true
console.log(null === undefined) // => false

