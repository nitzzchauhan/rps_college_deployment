import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function Name(){
  return(
    <h1>I am nitin</h1>
  )
}


createRoot(document.getElementById('root'))
.render(
 <>
 <Name/>
 </>
)
