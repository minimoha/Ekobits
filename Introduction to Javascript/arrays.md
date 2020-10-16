1.  for (let person of people) {
    console.log(person)
}
2.  people.shift()
3.  people.pop()
4.  people.unshift("Matt")
5.  people.push("Muhammed")
6.  for (let person of people) {
    if (person === "Mary") {
        break;
    }
    console.log(person)
}
7.  people.slice(2)
8.  people.indexOf("Mary")
9.  people.indexOf("Foo")
10. people.splice(2, 1, "Elizabeth", "Artie")
11. let withBob = people + " " + "Bob"  