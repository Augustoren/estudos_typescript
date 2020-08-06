function useState<S extends string | number>() {
  let state: S

  function getState() {
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}

const newState = useState()

newState.setState("123")
console.log(newState.getState())

newState.setState(123)
console.log(newState.getState())