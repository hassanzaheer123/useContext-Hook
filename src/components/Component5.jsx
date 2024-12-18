import React, { useContext } from 'react'

const Component5 = () => {
    const user = useContext(UserContext);
  return (
    <>
      <p className="text-center">
        My name is {username}
      </p>
    </>
  )
}

export default Component5
