import {Layout,Input} from "antd";
import './assests/styles/app.css'
import {Styles} from './assests/styles/App'
import Display from "./Components/Display";
import TextEditorModal from "./Components/TextEditor";
import { useState } from "react";

const App=()=>{
  const { Header, Sider, Content } = Layout;
  const {Search}=Input
  const [searchvalue, setsearchvalue] = useState('')
  
  const handleSearch=(e)=>{
    console.log(e.target.value)
    setsearchvalue(e.target.value)
  }

  return(
    <Layout style={{minHeight:'100vh'}}>
      <Sider style={Styles.siderStyle}><TextEditorModal/></Sider>
      <Layout>
        <Header style={Styles.headerStyle}>Notepad
          <Search placeholder="Input keywords to search" onChange={handleSearch} size="medium" enterButton />
        </Header>
        <Content style={Styles.contentStyle}>
          <Display value={searchvalue}/>
        </Content>
      </Layout>
    </Layout>
  )
};
export default App;
