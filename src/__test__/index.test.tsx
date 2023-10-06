import { getSearchObj, sum } from "../utils";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

let windowSpy :jest.SpyInstance
beforeEach(()=> {
   windowSpy = jest.spyOn(window, 'window', 'get')

})

afterEach(()=> {
  windowSpy?.mockRestore()
})

describe('分组1 ', () => {
  test('toBeCloseTo adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBeCloseTo(3);
  });

  it('get search params ', () => {
    windowSpy.mockImplementation(()=> ({
      location: {
        href: "https://example.com?a=1&b=2",
        search: '?a=1&b=2'
      }
    }))
    console.log(window.location.href)
    expect(getSearchObj()).toEqual({a: '1', b: '2'})
  })

})