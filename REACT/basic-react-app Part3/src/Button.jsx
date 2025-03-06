function printHello() {
  console.log("Hello");
}
function printBye() {
  console.log("Bye");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>;
      <p onClick={printBye}>Click the button to print "Hello" in the console</p>
    </div>
  );
}
