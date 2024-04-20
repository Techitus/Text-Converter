/* eslint-disable react/prop-types */

const Button = (props) => {
  return (
    <>
   
   <button onClick={props.handler} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ">
   {props.value}
  </button>

    </>
  )
}

export default Button