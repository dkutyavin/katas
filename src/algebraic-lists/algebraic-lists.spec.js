const { Cons } = require('.')

describe('Algebraic Lists', () => {
  test('Cons[1, 2, 3, 4, 5] toArray should return [1, 2, 3, 4, 5]', () => {
    const testData = new Cons(1, new Cons(2, new Cons(3, new Cons(4, new Cons(5, null)))))

    expect(testData.toArray()).toEqual([1, 2, 3, 4, 5])
  })

  test('Cons fromArray should return new Cons object [2, 3, 5, 2] when given array of [2, 3, 5, 2]', () => {
    const testData = [2, 3, 5, 2]
    const expectedData = new Cons(2, new Cons(3, new Cons(5, new Cons(2, null))))

    expect(Cons.fromArray(testData).toArray()).toEqual(expectedData.toArray())
  })

  test('Should filter out all odd numbers', () => {
    const predicate = n => n % 2 === 1
    const testData = Array(100)
      .fill(0)
      .map((_, index) => index)
    const expectedData = testData.filter(predicate)

    expect(
      Cons.fromArray(testData)
        .filter(predicate)
        .toArray()
    ).toEqual(expectedData)
  })

  test('Should return doubled numbers', () => {
    const numbers = [1, 2, 3, 4, 5]
    const expected = [2, 4, 6, 8, 10]

    expect(
      Cons.fromArray(numbers)
        .map(it => it * 2)
        .toArray()
    ).toEqual(expected)
  })
})
