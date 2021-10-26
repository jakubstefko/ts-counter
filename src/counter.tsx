import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = setCount.bind(this, count + 1)
  const decrement = setCount.bind(this, count - 1)

  return (
    <main>
      <div className=''>
        <h1>Counter</h1>
        <div className=''>{count}</div>
        <div className=''>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </main>
  )
}

export default Counter
