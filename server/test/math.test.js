// import {add} from '../math'
const {calculateSum} = require('../math.js')

// test("should add two numbers", () => {
//   add(2, 3).then((sum) => {
//     expect(sum).toBe(5);
//   });
// });

test("should add values", () => {
  const total = calculateSum(1, 4);
  expect(total).toBe(5);
});