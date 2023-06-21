import { useSelector } from "react-redux"
import DisplayCard from "./DisplayCard"
import { Row } from "antd"

const Display=({value})=>{
    const editorState=useSelector(state=>state.Editor.arr)

    return(
        <Row gutter={16}>
            {console.log(editorState)}
            {value.trim()===''?editorState.map((x)=>{
                return <DisplayCard key={x.id} data={x}/>
            }):
            editorState.map((x)=>((x.title.toLowerCase().includes(value) || x.content.toLowerCase().includes(value)) && <DisplayCard key={x.id} data={x}/> ))}
        </Row>
    )
}
export default Display