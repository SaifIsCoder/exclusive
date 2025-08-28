
const Input = ({type, placeholder}) => {
  return (
    <div>
       <input
            type={type}
          
            placeholder={placeholder}
            className="focus:outline-0 border-b w-full border-b-gray-400"
          />
    </div>
  )
}

export default Input
