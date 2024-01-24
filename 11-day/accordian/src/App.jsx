import Accordian from "./Components/Accordian";
import { accordians } from "./data/accordians";
function App() {
  return (
    <div>
      <Accordian accordians={accordians} />
    </div>
  );
}
export default App;
