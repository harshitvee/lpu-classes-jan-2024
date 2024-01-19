const myVar = 44;
function func1() {
  console.log("hello from func1", myVar);

  function func2() {
    const myVar = 36;
    console.log(myVar);
  }

  func2();
}

func1();
