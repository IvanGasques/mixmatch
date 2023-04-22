import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const validationImage = yup.object().shape({
    img: yup
        .string()
        .required("A imagem é obrigatória para a estética da página e o padrão do layout."),

})

const AdmGallery = () => {

    const [apiImage, setApiImage] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [deleteItem, setDeleteItem] = useState(false);

    const formRef = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationImage) });


    const addImage = (data) => {

        axios.post('http://localhost:3000/galeria', {

            img: data.img
        })
            .then(response => {
                console.log(response.data); // exibir a resposta da API
                formRef.current.reset(); 
                setFormSubmitted(true)
               
            })
            .catch(error => {
                console.log(error); // lidar com possíveis erros
            });
            
              
    };

    const handleDelete = (id) =>  {
        const confirmDelete = window.confirm("Você tem certeza que deseja deletar este item?");
        if (confirmDelete) {
            axios.delete(`http://localhost:3000/galeria/${id}`)
                .then(response => {
                    console.log(response.data);
                    setDeleteItem(!deleteItem); // atualiza o estado de deleteItem para forçar a atualização da lista após a deleção
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    useEffect(() => {
        axios.get('http://localhost:3000/galeria')
            .then(response => {
                console.log(response.data[3]);
                setApiImage(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [addImage, deleteItem]);



    return (
        <div>
            <div className='postAdm'>
                <h1 className='titleAdm'> Adicionar uma nova imagem na galeria</h1><br />

                <form className='formPost' id='galery' onSubmit={handleSubmit(addImage)} ref={formRef}>
                    <label>URL da imagem a ser adicionada</label>
                    <textarea className='titlePost' type='text' name='img'  {...register('img')} placeholder='Coloque o URL da imagem' />
                    <p className='error-message'>{errors.image?.message}</p><hr />
                    <button type='submit'  className='button' >Postar</button>
                </form>
            </div>


            <h1 className='title-atuais'>Imagens Atuais</h1><hr/>

            <div className='show-galery'>
            {apiImage.map((imagem, index) => (
                <div className='container-img' key={index}>
                    {/* <p >{imagem.id}</p> */}
                    <div className='imageAdm'><img src={imagem.img+'.jpg'} alt={imagem.id} /></div>
                    <button className='btn-delete' onClick={() => handleDelete(imagem.id)}>Delete</button>
               </div>
           ) )}</div>
        </div>
    )
}

export default AdmGallery
