import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';


function BasicExample() {


  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{ alert(JSON.stringify(data))};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    {...register("email", { required: true })}
                />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"
                    {...register('password', { required: true, minLength: 8 })}
                />
            </div>
          
      <input type="submit" class="btn btn-primary" />
    </form>


  );
}

export default BasicExample;