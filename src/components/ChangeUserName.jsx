import React, { useState } from 'react'

const ChangeUserName = () => {
    const [userName, setUserName] = useState('Aibek')

    const changeName1 = () => {
        setUserName('Aibek')
    }

    const changeName2 = () => {
        setUserName('Asan')
    }


  return (
    <div>
        <h1>{userName}</h1>
        <button onClick={changeName1}>CLICK1</button>
        <button onClick={changeName2}>CLICK2</button>
    </div>
  )
}
export default ChangeUserName



