const Header = ({ text }) => {
    return (
        <div className="flex items-center justify-center" >
            <p className="text-white font-roboto-medium text-3xl">{text}</p>
        </div>
    )
}

export default Header