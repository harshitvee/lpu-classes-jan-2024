Promise.resolve("foo")
  .then((val) => {
    // console.log(val);
    return Promise.reject(`rejected with ${val}`);
  })
  .then((val) => {
    return val + "baaz";
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
