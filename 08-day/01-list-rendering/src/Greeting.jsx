function Greeting({ firstName, lastName }) {
  // destructuring
  //   let { firstName, lastName } = props;
  return (
    <h2>
      Hello, {firstName} {lastName}
    </h2>
  );
}

// Props are read only

export default Greeting;
