import '../styles/Header.css';



const Header = (props) => {
    return (
        <header className='Header'>
            <div className='HeaderTitle'>
                <div className='LogoContainer'>

                    <h1 className='Logo'>B</h1>

                </div>
                <div className='CompanyNameContainer'>

                    <h1>Bridgeland Logistics</h1>

                </div>
                
            </div>
        </header>
    );
};

export default Header;