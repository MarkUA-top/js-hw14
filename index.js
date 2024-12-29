const users = [
    { id: "user-1", name: "Tima", email: "tima@example.com", age: 15, online: true },
    { id: "user-2", name: "flightfusion", email: "flightfusion@example.com", age: 12, online: true },
    { id: "user-3", name: "craftMUA", email: "craftMUA@example.com", age: 10, online: false },
    { id: "user-4", name: "Dima", email: "dima@example.com", age: 13, online: false },
    { id: "user-5", name: "Ajax", email: "ajax@example.com", age: 43, online: true },
  ];
  
  // Task 1
  const userNames = users.map((user) => user.name);
  console.log(userNames);
  
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