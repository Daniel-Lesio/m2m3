import {createContext,useState} from 'react'


const pageContext = createContext(null)

 const PageContextProvider = ({children})=>{
    const [sectionActive,setSectionActive] = useState('hero')
    const [scrolled , setScrolled]= useState(false)
    const [ primaryColor ] = useState("#972355")
        const changeActive = (section) =>{
                setSectionActive(section)
            }

    return (
        <pageContext.Provider value={{
            sectionActive,
            changeActive,
            primaryColor,
            scrolled,
            setScrolled
            }}>
            {children}
        </pageContext.Provider>
    )

}

export {pageContext,PageContextProvider}

