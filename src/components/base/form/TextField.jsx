const TextField = ({ value = '', rows = 5, placeholder = '', onChange = () => {}, className = '' }) => {
    return (
        <div className={`border border-[#CED7DE] rounded-[10px] overflow-hidden bg-white ${className}`}>
            <textarea
                className="text-b3-regular text-headline w-full block py-[9px] px-[20px] focus:outline-none focus:border-border-highlight transition"
                placeholder={placeholder}
                value={value}
                rows={rows}
                onChange={(e)=>{onChange(e.target.value)}}
            />
        </div>
    )
}

export default TextField;