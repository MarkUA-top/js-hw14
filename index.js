const users = [
  { id: "user-1", name: "Tima", email: "tima@example.com", age: 15, eyeColor: "brown", isActive: true, gender: "male" },
  { id: "user-2", name: "flightfusion", email: "flightfusion@example.com", age: 12, eyeColor: "brown", isActive: false, gender: "female" },
  { id: "user-3", name: "craftMUA", email: "craftMUA@example.com", age: 10, eyeColor: "blue", isActive: true, gender: "male" },
  { id: "user-4", name: "Dima", email: "dima@example.com", age: 13, eyeColor: "brown", isActive: false, gender: "male" },
  { id: "user-5", name: "Ajax", email: "ajax@example.com", age: 43, eyeColor: "blue", isActive: true, gender: "female" }
]

  
  // Task 1
  const userNames = users.map((user) => user.name);
  console.log(userNames);

  // Task 2
  const filterEye = users.filter(user => user.eyeColor === "brown")
  console.log(filterEye)

  // Task 3
  const filterGender = users.filter(user => user.gender === "female")
  console.log(filterGender)

  // Task 4
  const filterActive = users.filter(user => user.isActive === false)
  console.log(filterActive)

  // Task 5
  const findUserByEmail = (email) => {
    let user = null;
    users.forEach((u) => {
      if (u.email === email) {
        user = u;
      }
    });
    return user;
  };
  console.log(findUserByEmail("flightfusion@example.com"));
  
  // Task 6
  const getUsersByAgeRange = (minAge, maxAge) => {
    const filteredUsers = [];
    users.forEach((user) => {
      if (user.age >= minAge && user.age <= maxAge) {
        filteredUsers.push(user);
      }
    });
    return filteredUsers;
  };
  
  console.log(getUsersByAgeRange(10, 18));