import React, {useState} from "react";
import 'semantic-ui-css/semantic.min.css'
import { Form, Button } from "semantic-ui-react";


const Register = () => {
    const [values, setValues] = useState({
        username: "",
        name: "",
        email:"",
        profilePic: "",
        password: "",
        confirmPassword:""
    }) 
    const onChange = (e)=>  {
    setValues({...values, [e.target.name]: e.target.value})}

    // const [ addUser, { loading }] = useMutation(REGISTER_USER,{
    //     update(proxy, result){
    //     console.log(result)},
    //     variables: values
    // })
    const onSubmit = (e) => {
        e.preventDefault();

    }
    
    return(
        <div className = "container">
            <Form onSubmit = {onSubmit} noValidate>
                <h1>Register</h1>
                <Form.Input required
                    //error={{ content: 'Please enter your username', pointing: 'below' }}
                    label = "Username"
                    placeholder = "Username"            //username
                    name = "username"
                    value = {values.username}
                    onChange = {onChange}
                    />

                <Form.Input required
                    label = "Name"
                    placeholder = "Name"
                    name = "name"                           // name
                    value = {values.name}
                    onChange = {onChange}
                    />

                <Form.Input required
                    id='form-input-control-error-email'
                    label = "E-mail"
                    placeholder = "E-mail"              //email
                    name = "email"
                    value = {values.email}
                    onChange = {onChange}
                    />

                <Form.Input required
                    label = "Password"
                    placeholder = "Password"
                    name = "password"
                    value = {values.password}               //password
                    onChange = {onChange}
                    />
                <Form.Input required
                    label = "Confirm password"
                    placeholder = "Confirm Password"
                    name = "confirmPassword"
                    value = {values.confirmPassword}                   //confirm Password
                    onChange = {onChange}
                    />
                <Button className = "btn btn-primary mt-2" type="submit"primary>Register</Button>            
            </Form>
            {/* <form class="ui form"><div class="required Input"><label>Last name</label><div class="ui input"><input type="text" placeholder="Full name"/></div></div></form> */}
        </div>
    );
}

// const REGISTER_USER = gql`
// mutation register(
//     $name = String!
//     $username = String!
//     $email = String!
//     $password = String!
//     $confirmPassword = String!

// ){
//     register(
//         registerInput:{
//             name: $name
//             username : $username
//             email : $email
//             password: $password
//             confirmPassword: $confirmPassword
//         }
//     ){
//         id email username created
//     }
// }`

export default Register;