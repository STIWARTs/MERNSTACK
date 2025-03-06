import "./App.css";
// import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./Msgbox.jsx";

function App() {
  return (
    <>
      <MsgBox userName="John" textColor="red" />
      <MsgBox userName="Jane" textColor="blue" />
      <MsgBox userName="Joe" textColor="green" />
      <ProductTab />;
    </>
  );
}

export default App;
