import React from 'react'

export default function Card({elem}) {
  return (
<div className="choose-emoji">
<p>{elem.title}</p>
<p>{elem.symbol}</p>
<p>{elem.keywords}</p>
    </div>
  )
}

