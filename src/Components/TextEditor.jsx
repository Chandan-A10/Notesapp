import { useState } from "react";
import {Modal,Input} from 'antd'
import Quill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch} from 'react-redux'
import { setEditorContent } from '../Redux/reducer'

const toolbar=[
  ['bold','italic','underline','strike'],
  [{color:[]},{background:[]}]
]

const TextEditorModal=()=>{
  const [content,setcontent]=useState('')
  const [title,settitle]=useState('')
  const [ModalOpen, setModalOpen] = useState(false);
  
  const dispatch=useDispatch()

  const handleOk=()=>{
    if(title.trim()===''){
      document.getElementById('error')?.removeAttribute('hidden')
    }
    else{
      let obj={
        id:Date.now(),
        title:title,
        content:content
      }
      dispatch(setEditorContent(obj))
      setModalOpen(false);
      setcontent('')
      settitle('')
    }
  }

  const handletitle=(e)=>{
    document.getElementById('error')?.setAttribute('hidden','hidden')
    settitle(e.target.value)
  }
  return (
    <>
    <p style={{marginTop:'50%'}}>Add Note</p>
     <img src="/add.png" className="img" onClick={()=>setModalOpen(true)}  height={70} width={70} alt="Add Task"></img>
      <Modal title="Sticky Note" open={ModalOpen} onOk={handleOk} onCancel={()=>setModalOpen(false)}>
        <Input maxLength={20} placeholder="Title Cannot be blank" size="large" onChange={handletitle} value={title}/>
          <p id="error" style={{color:'red'}} hidden>Title cannot be empty</p>
        <Quill theme='snow' style={{marginTop:'3%'}} value={content} onChange={(value)=>setcontent(value)} modules={{toolbar:toolbar}}></Quill>
      </Modal>
    </>
  );
};

export default TextEditorModal