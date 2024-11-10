//1dars boshi
// function RandomGeneration() {
//   return new Promise((resolve, reject) => {
//     console.log("Kuting...");
//     setTimeout(() => {
//       const randomNumber = parseInt(Math.random() * 10);
//       resolve(randomNumber);
//     }, 2000);
//   }).then((value) => {
//     console.log(value);
//   });
// }

// async function Random() {
//   const result = await RandomGeneration();
//   console.log(result);
// }
// Random();
//1dars tugash

//2dars boshi
// function checkUsername(username, parol) {
//   const login = "user";
//   const password = "12345";
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === login && parol === password) {
//         console.log("Xush kelibsiz!");
//       } else {
//         console.log("Login yoki parol xato! ");
//       }
//     }, 1000);
//   });
// }
// checkUsername("user", "12345");

// async function CheckPassword() {
//   const result = await checkUsername();
//   console.log(result);
// }
//2dars tugash

//3dars boshi
// function StartNumber() {
//   return new Promise((resolve, reject) => {
//     let progress = 0;
//     const Qoshish = setInterval(() => {
//       progress++;
//       console.log(progress);
//       resolve(progress);
//       if (progress === 5) {
//         clearInterval(Qoshish);
//       }
//     }, 1000);
//   });
// }
// StartNumber();

// async function startNumber() {
//   const result = await StartNumber();
// }
//3dars tugash

//4dars boshi
// function addPoints(son1, son2) {
//   return new Promise((resolve, reject) => {
//     console.log("Hisoblanmoqda...");
//     setTimeout(() => {
//       resolve(son1 + son2);
//     }, 2000);
//   });
// }
// async function AddPoints() {
//   const result = await addPoints(100, 90);
//   console.log(result);
// }
// AddPoints();
//4dars tugash

//5dars boshi
// function checkUsername(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let element = 0;
//       for (let i = 1; i <= username.length; i++) {
//         element = i;
//       }
//       if (element >= 3) {
//         resolve("Ism tog'ri");
//       } else {
//         reject("Ism juda qisqa");
//       }
//     }, 1000);
//   });
// }

// async function CheckUsername() {
//   const result = await checkUsername("Ali")
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((err) => console.log(err));
// }
// CheckUsername();
//5dars tugash

//6dars boshi
// function FindColorNumber(color) {
//   const colors = ["qizil", "pushti", "qora", "ko'k"];
//   let result = "Bunaqa rang yo'q";
//   setTimeout(() => {
//     for (let i = 0; i < colors.length; i++) {
//       const element = colors[i];
//       if (element === color) {
//         result = `Rang: ${element}`;
//       }
//     }
//     console.log(result);
//   }, 1000);
// }
// FindColorNumber("ko'k");
//6dars tugash

//7dars boshi
// function checkPhoneNumber(phoneNumber) {
//   let result = "Raqam notog'ri formatda";
//   let check = "+998";
//   let a = "";
//   for (let i = 0; i < phoneNumber.length; i++) {
//     a += phoneNumber[i];
//     if (a === check) {
//       result = "Raqam tog'ri";
//     }
//   }
//   console.log(result);
// }
// checkPhoneNumber("+9981234567");
//7dars tugash

//8dars boshi
// function getRandomColors() {
//   const colors = ["yashil", "oq", "pushti", "ko'k"];
//   setTimeout(() => {
//     const randomIndex = parseInt(Math.random() * colors.length);
//     console.log(colors[randomIndex]);
//   }, 1000);
// }
// getRandomColors();
//8dars tugash
