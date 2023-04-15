import React from 'react'
import { useForm } from 'react-hook-form'
import './adm.css'

const AdmCarla = () => {
 
    const { register, handleSubmit, formState: { errors } } = useForm()


const addPost = data => {return (console.log(data))}

    return (
        <div className='adm'>
            <h1>Ola Carla</h1>

            <div className='postAdm'>
                <h3 className='titleAdm'> Fazer um novo Post</h3><br />
                
                
                <form className='formPost' onSubmit={handleSubmit(addPost)}>
                <label>Titulo</label>
                    <input className='titlePost' type='text' name='title' {...register('title')} placeholder='Digite o Título' /><hr />
                    <label>Conteúdo do Post</label>
                    <textarea className='contentPost' type='text' name='content'  {...register('content')}  placeholder='Digite o conteúdo' /><hr />
                    {/* <input className='imagem' type="file" name="image" id="image-upload" /><hr /> */}
                    <label> Conteúdo visivel no card</label>
                    <input className='textCard' type='text' name='description' {...register('description')} placeholder='Pequeno texto para o card' maxLength="100" /><hr />
                    <button type='submit' className='button' >Postar</button>
                </form>
            </div>
        </div>
    )
}

export default AdmCarla
