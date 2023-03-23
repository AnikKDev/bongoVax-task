const vaxTrail = (people) => {
  const result = {
    A: [],
    B: [],
    C: [],
    D: [],
  };

  people.forEach((person) => {
    if (person.age >= 20 && person.age <= 30 && person.temperature < 100) {
      result.A.push(person);
    } else if (
      person.age >= 31 &&
      person.age <= 40 &&
      person.temperature < 100
    ) {
      result.B.push(person);
    } else if (
      person.age >= 41 &&
      person.age <= 50 &&
      person.temperature < 100
    ) {
      result.C.push(person);
    } else {
      result.D.push(person);
    }
  });

  result.A.sort((a, b) => a.age - b.age);
  result.B.sort((a, b) => a.age - b.age);
  result.C.sort((a, b) => a.age - b.age);
  result.D.sort((a, b) => a.age - b.age);

  return result;
};

console.log(
  vaxTrail([
    { name: "sunil", age: 21, temperature: 98 },
    { name: "Biplap", age: 22, temperature: 98 },
    { name: "Kabir", age: 36, temperature: 99 },
    { name: "Rahul", age: 37, temperature: 99 },
    { name: "Paul", age: 42, temperature: 98 },
    { name: "Kat", age: 41, temperature: 98 },
    { name: "Nayem", age: 50, temperature: 100 },
    { name: "Sabnaj", age: 51, temperature: 101 },
  ])
);
