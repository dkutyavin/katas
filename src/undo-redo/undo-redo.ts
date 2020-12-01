export function undoRedo(target: Record<string | number, any>) {
  const actions: Action[] = []
  let position: number

  const mutate = (payload: ActionRecord, mutationCallback: () => any) => {
    actions.push({ ...payload, prevValue: target[payload.key] })
    position = actions.length - 1
    mutationCallback()
  }

  return {
    set: (key: string | number, value: any) => {
      mutate({ key, value }, () => {
        target[key] = value
      })
    },
    get: (key: string | number) => target[key],
    del: (key: string | number) => {
      mutate({ key }, () => {
        delete target[key]
      })
    },

    undo: () => {
      if (typeof position !== 'number' || position < 0) {
        throw new RangeError('There is nothing to undo')
      }

      const { key, prevValue } = actions[position]
      target[key] = prevValue
      position--
    },
    redo: () => {
      if (typeof position !== 'number' || position >= actions.length) {
        throw new RangeError('There is nothing to redo')
      }

      position++
      const { key, value } = actions[position]
      target[key] = value
    },
  }
}

type Action = {
  key: string | number
  prevValue: any
  value?: any
}

type ActionRecord = { key: string | number; value?: any }
