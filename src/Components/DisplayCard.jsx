import {Col,Card, Button,Modal,Input } from "antd"
import {DeleteOutlined,EditOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux"
import { deleteContent,editRecord } from '../Redux/reducer'
import { useState } from "react";
import Quill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const toolbar=[
    ['bold','italic','underline','strike'],
    [{color:[]},{background:[]}]
]

const DisplayCard=(props)=>{
    const editorState=useSelector(state=>state.Editor.arr)
    const [content,setcontent]=useState('')
    const [title,settitle]=useState('')
    const [ModalOpen, setModalOpen] = useState(false);
    const dispatcher=useDispatch()
    
    const handletitle=(e)=>{
        settitle(e.target.value)
    }
    const handleOk=()=>{
        if(title.trim()===''){
          document.getElementById('error')?.removeAttribute('hidden')
        }
        else{
          dispatcher(editRecord({id:props.data.id,title:title,content:content}))
          setModalOpen(false);
          setcontent('')
          settitle('')
          console.log('edited')
        }
    }
    
    const handleClick=()=>{
        dispatcher(deleteContent(props.data.id))
    }
    const handleEdit=()=>{
        editorState.forEach((x)=>{
            if(x.id===props.data.id){
                settitle(x.title)
                setcontent(x.content)
            }
        })
        console.log(title,content)
        setModalOpen(true)
    }
    return(
    <>
        <Col span={6}>
        <Card extra={<><Button type="text" shape="circle" icon={<EditOutlined/>} onClick={handleEdit}/><Button type="text" shape="circle" icon={<DeleteOutlined/>} onClick={handleClick}/></>} headStyle={{fontSize:'30px'}} title={props.data.title} style={{height:'30vh',marginTop:'10%',fontSize:'20px'}} bordered={false}>
            <div dangerouslySetInnerHTML={{__html:props.data.content}}></div>
        </Card>
        </Col>
        <Modal title="Sticky Note" open={ModalOpen} onOk={handleOk} onCancel={()=>setModalOpen(false)}>
        <Input maxLength={20} placeholder="Enter Title" size="large" onChange={handletitle} value={title}/>
          <p id="error" style={{color:'red'}} hidden>Title cannot be empty</p>
        <Quill theme='snow' style={{marginTop:'3%'}} value={content} onChange={(value)=>setcontent(value)} modules={{toolbar:toolbar}}></Quill>
        </Modal>
    </>
    )
}
export default DisplayCard