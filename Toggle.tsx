
import React from 'react'


export default function Toggle({leftLabel='Sign In', rightLabel='Sign Up', value, onChange}:{leftLabel?:string,rightLabel?:string,value:boolean,onChange:(v:boolean)=>void}){
return (
<div className="toggle">
<button onClick={()=>onChange(true)} className={value ? 'active' : ''}>{leftLabel}</button>
<button onClick={()=>onChange(false)} className={!value ? 'active' : ''}>{rightLabel}</button>
</div>
)
}