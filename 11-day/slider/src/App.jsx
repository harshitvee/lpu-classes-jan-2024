import Slider from "./Components/Slider";
import { images } from "./data/images";
function App() {
  return (
    <div>
      <Slider images={images} />
    </div>
  );
}
export default App;
