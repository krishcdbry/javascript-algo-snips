

const ATMDispenser = (n) => {
    const obj = {
      2000 : 0, 500 : 0, 200 : 0, 100 : 0, 50 : 0, 20 : 0, 10 : 0, 5 : 0,
      2 : 0, 1 : 0
    }
    let money = Object.keys(obj);
    for (let i = 9; i >= 0; i--) {
      const coin = Number(money[i]);
      if (n < 1) break;
      if (n >= coin) {
        obj[coin] = Math.floor(n/coin);
        n = n%coin;
      }
    }
    return obj;
  }
  
ATMDispenser(2789); // { 2000 : 1, 500: 1, 200: 2, 100: 0, 50: 1, 20: 1, 10: 1, 5: 1, 2:2, 0:0}
