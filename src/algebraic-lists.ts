/**
 * @see https://www.codewars.com/kata/529a92d9aba78c356b000353
 *
 */
export class Cons<T = unknown> {
  static fromArray<T = unknown>([head, ...tail]: T[]): Cons<T> {
    if (tail.length > 0) return new Cons(head, this.fromArray(tail))
    return new Cons(head, null)
  }

  constructor(public head: T, public tail: Cons<T> | null) {
    this.head = head
    this.tail = tail
  }

  toArray(): T[] {
    return consToArray(this)
  }

  filter(predicate: (value: T) => boolean) {
    return filterCons<T>(predicate)(this)
  }

  map<R = T>(fn: (value: T) => R): Cons<R> {
    return mapCons<T, R>(fn)(this)
  }
}

const consToArray = <T = unknown>(list: Cons<T>) => {
  if (!list) return []
  return [list.head, ...consToArray(list.tail)]
}

const filterCons = <T = unknown>(condition: (val: T) => boolean) => (
  list: Cons<T> | null
): Cons<T> => {
  if (!list) return null
  const { head, tail } = list
  const filter = filterCons(condition)

  if (!condition(head)) return filter(tail)
  return new Cons(list.head, filter(tail))
}

const mapCons = <T = unknown, R = T>(fn: (val: T) => R) => (list: Cons<T>) => {
  if (!list) return null
  return new Cons(fn(list.head), mapCons(fn)(list.tail))
}
