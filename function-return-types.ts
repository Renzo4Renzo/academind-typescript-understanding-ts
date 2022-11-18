function add(n1: number, n2: number): string {
  return n1.toString() + n2.toString();
}

//Inferred function type is "void"
function printResult(num: string) {
  console.log("Result: " + num);
}

printResult(add(5, 12));
