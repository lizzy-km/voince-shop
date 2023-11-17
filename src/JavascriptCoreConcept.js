//Infinite currying (Reduce)

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

add(4)(5)(8)(3)();

// Update text In Html with Js using Closure

function updateElText(id) {
  return function (content) {
    const elId = document.querySelector("#" + id);
    elId ? (elId.textContent = content) : null;
  };
}

const updateHeader = updateElText("header");

updateHeader("Vince");

//Run only once using Closure

function runOnce(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const test = runOnce((a, b) => console.log("Testing", a, b));

test("one_ " + 100, 130);

// Memosize the calculation

function Memorize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 1000000; i++) {
    /* empty */
  }
  return num1 * num2;
};

const memoClumprd = Memorize(clumsyProduct);

memoClumprd(100, 200);
