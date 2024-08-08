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

export const chargeConvert = (charge) => (charge ? charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "");

export const periodConvert = (item) => (item.period_type === 1 ? item.period + "일" : item.period + "개월");

export const depositConvert = (deposit) => (deposit ? deposit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "");

export const lockerListResultFormat = (list) => {
  return list.map((item) => ({
    ...item,
    charge: chargeConvert(item.charge),
    period: periodConvert(item),
    deposit: depositConvert(item.deposit),
    key: item.idx,
  }));
};
