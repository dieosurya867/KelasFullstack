// const req = new XMLHttpRequest();
// let data;
// req.onload = function () {
//   data = JSON.parse(this.responseText);
//   console.log(data);
// };

// req.onerror = function () {
//   console.log("Error", this);
// };

// req.open("GET", "https://swapi.dev/api/people/1");
// myReq.setRequestHeader("Accept", "application/json");
// req.send();
// end versi XMLHttpRequest

// versi fetch

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Could Not Fetch The Data For That Resource");
//     }
//     // console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("json 1", data);
//     return fetch("https://swapi.dev/api/people/2");
//   })
//   .then((res) => {
//     console.log("request 2");
//     if (!res.ok) {
//       throw Error("Could Not Fetch The Data For That Resource");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })

//   .catch((err) => {});
// console.log("Error", err);

// End Versi Fetch

const loadPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/5");
    const data2 = await res2.json();
    console.log(data2);
  } catch (err) {
    console.log("error", err);
  }
};

loadPeople();
