import React from 'react'

export default function Parceiros(props:{multiplicador:(a:number,b:number) => number}) {
  return (
    <div>
        <h2>
            <a href="https://www.google.com" target="_blank">Google</a><br />
            <a href="https://www.youtube.com" target="_blank">YouTube</a><br />
            <a href="https://www.github.com" target="_blank">GitHub</a><br />
            <a href="https://stackoverflow.com" target="_blank">Stack Overflow</a>
        </h2>
        <span>{props.multiplicador(10,3)}</span>
    </div>
  )
}
