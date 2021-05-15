Array.prototype.myFilter = function MyFilter(callback, thisArg = this) {
  const filterArr = [];

  for (let i = 0; i < thisArg.length; i++) {
    const result = callback(thisArg[i], i, thisArg);

    if (result) filterArr.push(thisArg[i]);
  }

  return filterArr;
};

function createDebounceFunction(callback, time) {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, time);
  };
}
