import React, {useEffect} from 'react'

const Navbar = ({color}) => {
 //CASE1: Run On Every Render
 useEffect(() => {
  alert("I Will Run On Every Render")
})
//CASE2: Run Only On First Render
useEffect(() => {
  alert("WELCOME..This Is First Render")
}, [])

//CASE3: Run Only On When Certain Value Changed
useEffect(() => {
  alert("Running Cuz color was changed")
}, [color])

//CASE4: Example Of Clean up 
useEffect(() => {
  alert("First Render Of App.jsx")

  return () => {
    alert("component was unmounted")
  }
}, [])

  
  return (
    <div>
      I am NavBar of color {color}
    </div>
  )
}
export default Navbar
