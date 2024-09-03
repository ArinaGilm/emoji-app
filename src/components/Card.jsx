import React from 'react'

export default function Card({elem,index}) {
  return (
<div className="choose-emoji" key={index}>
<p>{elem.title}</p>
<p>{elem.symbol}</p>
<p>{elem.keywords}</p>
    </div>
  )
}

