interface Link {
    id : number,
    name : string,
    path : string
}
const Links : Link[] = [
    {
        id : 0,
        name : 'Home',
        path : 'hero'
    },
    {
        id : 1,
        name : 'Inwestycje',
        path : 'investments'
    },
    {
        id:2,
        name : 'Wynajem',
        path : 'rent'
    },
    {
        id :3,
        name : 'Sprzedaż',
        path  :'sales'
    },
    {
        id :4,
        name : 'Realizacje',
        path : 'realizations'
    },
    {
        id :5,
        name : 'O nas',
        path : 'about'
    },
    

    
]

export { Links }