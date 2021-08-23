'use strict';

// This is source code. I had to find all errors here using typescript+prettier+eslint.
///////////////////////////////////////////////////////
// function summ(a) {
// 	const x = Object.keys(a).map((k) => {
// 			const elem = a[k];
// 			if (typeof elem === undefined) return 2021;
// 			if (typeof elem.cvalue === 'String') return +elem.cvalue || '2021';
// 			if (elem.cvalue.isBigObject !== undefined) return summ(elem);
// 			return elem.сvalue;
// 	});
// 	let sum = 0;
// 	for (let i = 0; i < x.lenght; i++) {
// 			sum += x[i].cvalue;
// 	}
// 	return summ;
// }
///////////////////////////////////////////////////////

interface BigObject {
  [a: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}

function summ(a: BigObject): number {
  const x = Object.keys(a).map((k) => {
    const elem = a[k];
    if (typeof elem === 'undefined') return 2021;
    if (typeof elem.cvalue === 'undefined') return 2021;
    if (typeof elem.cvalue === 'number') return elem.cvalue;
    if (typeof elem.cvalue === 'string') return +elem.cvalue || 2021;
    return summ(elem.cvalue);
  });
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}

const obj1: BigObject = {
  hello: { cvalue: 1 },
  world: { cvalue: { yay: { cvalue: '2' } } },
};

const obj2: BigObject = {
  hello: { cvalue: 1 },
  hell: { cvalue: undefined },
  world: { cvalue: { yay: { cvalue: '2' } } },
};

const obj3: BigObject = {
  hello: { cvalue: 1 },
  hell: { cvalue: '' },
  world: { cvalue: { yay: { cvalue: '2' } } },
};

const obj4: BigObject = {
  hello: { cvalue: 1 },
  hell: undefined,
  world: { cvalue: { yay: { cvalue: '2' } } },
};

const obj5: BigObject = {
  hello: { cvalue: 1 },
  hell: { cvalue: undefined },
  world: { cvalue: { yay: { cvalue: '2' } } },
};

const obj6: BigObject = {
  hello: { cvalue: 1 },
  hell: { cvalue: 150 },
  world: { cvalue: { yay: { cvalue: '2' } } },
  heaven: { cvalue: '150' },
};

const obj7: BigObject = {
  hello: { cvalue: 1 },
  hell: { cvalue: { num: { cvalue: { supernum: { cvalue: '150' } } } } },
  world: { cvalue: { yay: { cvalue: '2' } } },
  heaven: { cvalue: { yolo: { cvalue: 150 } } },
};

console.log(`Sum of obj1 is ` + summ(obj1));
console.log(`Sum of obj2 is ` + summ(obj2));
console.log(`Sum of obj3 is ` + summ(obj3));
console.log(`Sum of obj4 is ` + summ(obj4));
console.log(`Sum of obj5 is ` + summ(obj5));
console.log(`Sum of obj6 is ` + summ(obj6));
console.log(`Sum of obj7 is ` + summ(obj7));
