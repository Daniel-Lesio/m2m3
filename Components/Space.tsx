export interface SpaceProps {
    size : number
}
 
const Space: React.FunctionComponent<SpaceProps> = ({size}) => {
    return <div style={{height  : size}}></div>
}
 
export default Space;