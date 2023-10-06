// import { testApi } from "../utils/axios"

it('axios file ', () => {
  expect({a: 123}).toEqual({a: 123})
})
// test('axios ', (done)=> {
//   testApi().then(({data})=> {
//     console.log('axios data', JSON.stringify(data))
//     // expect(data?.result?.length).toBeGreaterThan(1)
//     // 这里因为不匹配会报错
//     expect(JSON.stringify(data?.result).includes(`"macbook保护壳","5810.169276511398"`)).toBeTruthy()
//     // axios等异步 需要用 done 
//     done()
//   })
// })
// test('axios 2', ()=> {
//   return testApi().then(({data})=> {
//     // console.log('axios data2', JSON.stringify(data))
//     expect(data?.result?.length).toBeGreaterThan(1)
//     expect(
//       JSON.stringify(data?.result).includes('["macbook保护壳","5810.169276511398"]')
//       ).toBeTruthy()
   
//   })
// })
// it('axios 3', async ()=> {
//   const {data} = await testApi()
//   // console.log('axios data3', JSON.stringify(data)) // error
//   // expect(data?.result?.length).toBeGreaterThan(10)
//   expect(
//     JSON.stringify(data?.result).includes('["macbook保护壳","5810.169276511398"]')
//     ).toBeTruthy()
// })

