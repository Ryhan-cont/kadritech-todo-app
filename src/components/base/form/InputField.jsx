const InputField = ({ value = '', type = 'text', placeholder = '', onChange = () => {}, className = '' }) => {
    return (
        <div className={`border border-[#CED7DE] rounded-[10px] overflow-hidden bg-white ${className}`}>
            <input
                className="text-b3-regular text-headline w-full block py-[9px] px-[20px] focus:outline-none focus:border-border-highlight transition"
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={(e)=>{onChange(e.target.value)}}
            />
        </div>
    )
}

export default InputField;