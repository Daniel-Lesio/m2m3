import Logo from '../../Components/Header/Logo'
export interface HeaderProps {
    
}
 
const Header: React.FunctionComponent<HeaderProps> = () => {
    return ( 
        
            
        <header style={{position : 'fixed', top: '0px',width : '100vw' , height : '80px'}} className="text-gray-700 bg-white border-t  body-font">
<div className="container h-full flex flex-col flex-wrap px-5 mx-auto md:items-center md:flex-row ">
 <a href='/' className="flex items-center w-40 mb-4 font-medium text-gray-900 title-font md:mb-0">
 <Logo/>
 </a>
 <nav className="d-none md:flex flex-wrap items-center justify-center ml-4 text-base">
     <a href="#"
         className="cursor-pointer	 mr-5 text-sm font-semibold text-gray-700 rounded-xl hover:text-red-800 uppercase">Home</a>
     <a href="#"
         className="cursor-pointer	 mr-5 text-sm font-semibold text-gray-700 rounded-xl hover:text-red-800 uppercase">Inwestycje</a>
     <a href="#"
         className="cursor-pointer	 mr-5 text-sm font-semibold text-gray-700 rounded-xl hover:text-red-800 uppercase">Wynajem</a>
     <a href="#"
         className="cursor-pointer	 mr-5 text-sm font-semibold text-gray-700 rounded-xl hover:text-red-800 uppercase">Sprzedaż</a>
     <a href="#"
         className="cursor-pointer	 mr-5 text-sm font-semibold text-gray-700 rounded-xl hover:text-red-800 uppercase">Realizacje</a>
     <a href="#"
         className="cursor-pointer	 mr-5 text-sm font-semibold text-gray-700 rounded-xl hover:text-red-800 uppercase">Sprzedaż</a>
 </nav>
 <button
     className="ml-auto text-darkblue hover:text-bordo ">
  PL       
</button>
                     </div>
</header>                     
    );
}
 
export default Header
