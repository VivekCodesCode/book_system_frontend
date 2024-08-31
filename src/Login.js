import axios from "axios";
import 'rsuite/dist/rsuite.min.css';
import React, { useState } from "react";
import { Audio } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Content,
  Footer,
  Form,
  Button,
  Navbar,
  Panel,
  Stack,
  Divider,
  InputGroup
} from 'rsuite';
import { Link } from "react-router-dom";
import { FaGithub, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { bindActionCreators, useDispatch } from "react-redux";
import { actionCreators } from "./State/index";
function Login() {
  const [user_data, set_user_data] = useState({
    name: "",
    password: ""
  });
  const [loader_display, set_loader_display] = useState("none");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  function onchange_listner(value, name) {
    set_user_data({
      ...user_data,
      [name]: value
    });
  }

 async function onclick_listner() {
  set_loader_display("block")
  await axios.post("https://book-system-backend-3.onrender.com/check_data",user_data).then((res)=>{
    console.log(res.data);
    set_loader_display("none")
    if(res.data=="exist"){
        dispatch(actionCreators.get_name(user_data.name));
        navigate("/App")
    }
    else if(res.data=="nouser"){
        alert("Please Signup First");
    }
    else{
        alert("Wrong password")
    }
   })
  }

  return (
    <Container>
      <Header className="user_login_navbar"> 
        <Navbar className="user_login_navbar" appearance="inverse">
          <Navbar.Brand className="navbar_head_admin">Mercedes-Benz</Navbar.Brand>
        </Navbar>
      </Header>
      <Content>
      <div className="book_store_loader" style={{display:loader_display}}><Audio
  height="80"
  width="80"
  radius="9"
  color="blue"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
</div> 
        <Stack alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
          <Panel className="admin_login_container" header="Login Please" bordered style={{ width: 500 }}>
            <Form fluid>
              <Form.Group>
                <Form.ControlLabel>Name</Form.ControlLabel>
                <Form.Control 
                  name="name" 
                  style={{ backgroundColor: "white" }}
                  onChange={(value) => onchange_listner(value, "name")} 
                />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Password</Form.ControlLabel>
                <InputGroup inside>
                  <Form.Control
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="off"
                    style={{ backgroundColor: "white" }}
                    onChange={(value) => onchange_listner(value, "password")}
                  />
                  <InputGroup.Button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </InputGroup.Button>
                </InputGroup>
              </Form.Group>
              <Button className="admin_login_button" appearance="primary" block onClick={onclick_listner}>
                SUBMIT
              </Button>
              <Divider>OR</Divider>
               <center>
               
              No Account? <Link to="/Signup"> Signup </Link>
                </center>
            </Form>
          </Panel>
        </Stack>
      </Content>
    </Container>
  );
}

export default Login;
