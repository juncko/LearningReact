import React from 'react';
import Button from '@material-ui/core/Button';
import { Container, Avatar, Typography } from '@material-ui/core';
import LockOutLineIcon from '@material-ui/icons/LockOutlined'

const style = {
    paper:{
        marginTop : 8,
        display : "flex",
        flexDirection : "column",
        alignItems : "center"
    },
    avatar:{
        margin : 8,
        backgorundColor: "#e53935"
    }
}

class Register extends React.Component{
    render(){
        return (
            <Container maxWidth ="md">
                <div style={style.paper}>
                    <Avatar style = {style.avatar}>
                        <Typography component="h1" variant="h5">
                            Registre su cuenta
                        </Typography>
                    </Avatar>
                </div>
            </Container>
          );
    }
}
export default Register;