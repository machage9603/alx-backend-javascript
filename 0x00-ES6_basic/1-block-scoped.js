export default function taskBlock(trueOrFalse) {
  let task = false; // Block-scoped
  let task2 = true; // Block-scoped

  if (trueOrFalse) {
    task = true; // Updates the outer `task`
    task2 = false; // Updates the outer `task2`
  }

  return [task, task2];
}
