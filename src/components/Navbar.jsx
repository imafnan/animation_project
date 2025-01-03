import logoimg from '../assets/Image/logo.png'


const Navbar = () => {
  return (
    <nav className='pt-[63px] absolute w-full   '>
      <div className="container">
        <div className="navRow flex justify-between items-center">
            <div className="navLogo">
                <img src={logoimg} alt="Logo" />
            </div>
            <div className="navtext">
                <ul className='text-[22px] font-normal font-ABeeZee flex gap-[30px] justify-center items-center   '>
                    <li>All Recipes</li>
                    <li>Vegan</li>
                    <li>Gluten-Free</li>
                    <li>Shop</li>
                </ul>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
