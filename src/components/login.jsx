
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { regexMail } from './mailRegex';


function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => { alert(JSON.stringify(data)) };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div class="mb-3 form-check">
            </div>

            <input type="submit"  />
        </form>
    );
}

export default Login;