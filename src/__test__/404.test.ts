// import { testApi404 } from "../utils/axios"

it('404 file ', () => {
  expect(40 + '4').toBe('404')
})
// // 错误写法
// test('axios 404 错误写法', async () => {
//   return testApi404().catch(data=> {

//     // console.log('axios 404 错误写法', JSON.stringify(data))
//     expect(
//       JSON.stringify(data).includes('404')
//     ).toBeTruthy()
//   })
// })
// test('axios 404', async () => {
//   expect.assertions(1) // 期望expect断言被执行一次 
//   await testApi404().catch(data=> {

//     // console.log('axios 404 ', JSON.stringify(data))
//     expect(
//       JSON.stringify(data).includes('404')
//     ).toBeTruthy()
//   })

// })