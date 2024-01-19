// function Greeting(props) {
//   // props are read only
//   const { firstName, lastName } = props;
//   return (
//     <h1>
//       Hello {firstName} {lastName}
//     </h1>
//   );
// }

function Greeting({ firstName, lastName }) {
  return (
    <h1>
      Hello {firstName} {lastName}
    </h1>
  );
}

// props are read only

export default Greeting;
