import React, {useState,useRef } from 'react'
import { useForm } from 'react-hook-form'
import './adm.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import mixmatxh from '../../assets/|| COVER MIX&MATCH ||.png'
import AdmCarla from './AdmCarla';



const validationPoste = yup.object().shape({
    name: yup
        .string().min(8, "Password minimum 8 characters").required("Nome é obrigatório"),
    password: yup
        .string()
        .min(8, "Password minimum 8 characters")
        .required("Password é obrigatório").test('password-match', 'A senha está incorreta', function (value) {
            return value === '000000000';
        })
})





const Secao = () => {

    const formRef = useRef();
const [passConfirm, setPassConfirm] = useState(false)
const [pagePost, setPagePost] = useState('box')


    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationPoste) });
const validepass = (date) => {
    if(date.password === "000000000"){
        setPassConfirm(true)
         setPagePost('clean')
    }else{
        console.log('erro')
    }
}


  return (
  <div className={pagePost}>
    <div className='adme'>
      <form className='formPost' onSubmit={handleSubmit(validepass)} ref={formRef}>
                    <label>Nome</label>
                    <input className='titlePost' type='text' name='name' {...register('name')} placeholder='Digite o Nome' maxLength="30" />
                    <div className='error-message'>{errors.name?.message}</div><hr />

                    <label>Imagem do Poste</label>
                    <input className='titlePost' name="password" type="password"  {...register("password")} placeholder='Password' />
                    <p className='error-message'>{errors.password?.message}</p><hr />


                    <img src={mixmatxh} alt='Foto de Carla ' />
                    <button type='submit' className='button' >Postar</button>
                </form>
    </div>
    {passConfirm? (<AdmCarla/>
    ) 
    : 
    ('')}
    </div>
  )
}

export default Secao
