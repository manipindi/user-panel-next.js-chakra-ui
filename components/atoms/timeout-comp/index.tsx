import React, { useEffect, useState } from 'react'

export default function TimeoutComp() {
  const [isvisible, setisvisible] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
        setisvisible(true)
    }, 800)
  },[])
  return (
    <div>
        {
            isvisible ? <h2 data-testid="visiblecontent">Content is visible now</h2> : <h2>Content is not Visible</h2> 
        }
    </div>
  )
}
