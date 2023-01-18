'use strick'; 
// function checkAge(age) {
  // if (age > 18) {
  //   return true;
  // } else {
  //   return confirm('Родители разрешили?');
  // }
  // return (age >= 18) ? true : confirm('Родители разрешили?');
// }

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// function digree(num, num2) {
//   let result = 1;
//   for (let i = 0; i < num2; i++){
//       result = result * num;
//   }
//   return result;
// }
//   console.log(digree(3, 2));


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () =>  { alert("Вы согласились."); },
//   () => { alert("Вы отменили выполнение."); }
// );




// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => {
//   b - a
// });

// alert(arr); // 8, 5, 2, 1, -10


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = ` ${users[0].name}, ${users[1].name}, ${users[2].name} `;

//   alert(names); // Вася, Петя, Маша

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map(item => ({
//   fullName: ` ${user.name} ${user.surname}`,
//   id:  user.id
// }))

//   alert(usersMapped[0].id) // 1
// alert(usersMapped[0].fullName) // Вася Пупкин


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// function getAverageAge(users) {
//   let count =0;
//   for (let i =0; i <users.length; i++) {
//     count += arr[i].age;
//   }
//   // const result = count / users.length;
//   return count / users.length;
// }

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28