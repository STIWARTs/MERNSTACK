let todo = [];

let req = promt("please enter your request");

while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }

  if (req == "list") {
    console.log("----------");
    // for (task of todo) {
    //   console.log(task);
    // }
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("---------");
  } else if (req == "add") {
    let task = promt("please enter the task you want to add");
    todo.push(task);
    console.log("task added");
  } else if (req == "delete") {
    let idx = promt("please enter the task index");
    todo.slice(idx, 1);
    console.log("task deleted");
  } else {
    console.log("wrong request");
  }

  req = prompt("Please enter your request");
}
