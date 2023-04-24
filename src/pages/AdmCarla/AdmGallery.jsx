import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const validationImage = yup.object().shape({
    img: yup
        .string()
        .required("A imagem é obrigatória para a estética da página e o padrão do layout."),
});

const AdmGallery = () => {

    const [apiImage, setApiImage] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [deleteItem, setDeleteItem] = useState(false);

    const formRef = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationImage) });

    const addImage = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/galeria/', data);
            console.log(response.data);
            formRef.current.reset();
            setFormSubmitted(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) =>  {
        const confirmDelete = window.confirm("Você tem certeza que deseja deletar este item?");
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://localhost:3000/galeria/${id}`);
                console.log(response.data);
                setDeleteItem(!deleteItem);
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        axios.get('http://localhost:3000/galeria/')
            .then(response => {
                setApiImage(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [formSubmitted, deleteItem]);

    return (
        <div>
            <div className='postAdm'>
                <h1 className='titleAdm'> Adicionar uma nova imagem na galeria</h1><br />

                <form className='formPost' id='galery' onSubmit={handleSubmit(addImage)} ref={formRef}>
                    <label>URL da imagem a ser adicionada</label>
                    <textarea className='titlePost' type='text' name='img'  {...register('img')} placeholder='Coloque o URL da imagem' />
                    <p className='error-message'>{errors.img?.message}</p><hr />
                    <button type='submit'  className='button' >Postar</button>
                </form>
            </div>

            <h1 className='title-atuais'>Imagens Atuais</h1><hr/>

            <div className='show-galery'>
            {apiImage.map((imagem, index) => (
                <div className='container-img' key={index}>
                    <div className='imageAdm'><img src={imagem.img} alt='imagem galeria'/> </div>
                    <button className='btn-delete' onClick={() => handleDelete(imagem.id)}>Delete</button>
               </div>
           ) )}</div>
        </div>
    );
};

export default AdmGallery;
