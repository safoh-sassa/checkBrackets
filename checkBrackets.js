 const checkBrackets = (arr) => {
  let tmp = [];

  if (arr.length == 0)
    return false;

  if (!Number.isInteger(arr.length / 2))
    return false

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    if (char == '{' || char == '[' || char == '(') {
      tmp.push(char);
    }

    if (tmp.length == 0)
      return false;

    switch (char) {
      case '}':
        lastChar = tmp.pop();
        if (lastChar == '(' || lastChar == '[')
          return false;
        break;

      case ')':
        lastChar = tmp.pop();
        if (lastChar == '{' || lastChar == '[')
          return false;
        break;

      case ']':
        lastChar = tmp.pop();
        if (lastChar == '(' || lastChar == '{')
          return false;
        break;
    }
  }
  return true
}

console.log(checkBrackets("{()[]}"))
console.log(checkBrackets("{]"))
console.log(checkBrackets("([{}])"))