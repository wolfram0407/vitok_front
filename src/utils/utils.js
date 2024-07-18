

export const numberHyphenDivider = (e, divide1 = 4, divide2 = 8) => {
  let tmp = "";
  if (e.length < divide1) {
    return e;
  } else if (e.length < divide2) {
    tmp += e.substr(0, divide1 - 1);
    tmp += "-";
    tmp += e.substr(divide1 - 1);
    return tmp;
  } else {
    tmp += e.substr(0, divide1 - 1);
    tmp += "-";
    tmp += e.substr(divide1 - 1, divide2 - divide1);
    tmp += "-";
    tmp += e.substr(divide2 - 1);
    return tmp;
  }
};