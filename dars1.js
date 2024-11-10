function checkUsername(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let element = 0;
      for (let i = 1; i <= username.length; i++) {
        element = i;
      }
      if (element >= 3) {
        resolve("Ism tog'ri");
      } else {
        reject("Ism juda qisqa");
      }
    }, 1000);
  });
}

async function CheckUsername() {
  const result = await checkUsername("Ali")
    .then((value) => {
      console.log(value);
    })
    .catch((err) => console.log(err));
}
CheckUsername();
