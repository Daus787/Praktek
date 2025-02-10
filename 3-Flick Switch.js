function flickSwitch(arr){
  let result = [];
  let flip = false;

  for (const item of arr) {
    if (item === "flick") {
      flip = !flip;
    }
    result.push(!flip);
  }
  return result;
}


