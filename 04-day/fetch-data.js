// endpoint / url

// get request

// promise consume

const endpoint = "https://jsonplaceholder.typicode.com/users";

// console.log(fetch(endpoint));

// when we call fetch it returns promise

// fetch(endpoint)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("something went wrong");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("inside 2nd then");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("inside catch");
//     console.log(error.message);
//   });

// async function fetchData() {}

// const fetchData = async function() {}

const fetchData = async () => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("inside catch");
    console.log(error);
  }
};
fetchData();
