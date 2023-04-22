import React, { useRef,useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import './adm.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import AdmGallery from './AdmGallery';


const validationPost = yup.object().shape({
    title: yup
        .string()
        .required("O título é obrigatório.")
        .max(50, "O título deve ter no máximo 50 caracteres.")
        .min(30, "O título deve ter no mínimo 30 caracteres para acompanhar o layout do card."),
    content: yup
        .string()
        .required("O conteúdo é obrigatório.")
        .min(150, "O conteúdo deve ter pelo menos 150 caracteres."),
    description: yup
        .string()
        .required("A descrição é obrigatória.")
        .max(130, "A descrição deve ter no máximo 130 caracteres.")
        .min(100, "A descrição deve ter no mínimo 100 caracteres para acompanhar o layout do card."),
    image: yup
        .string()
        .required("A imagem é obrigatória para a estética da página e o padrão do layout."),

    senha: yup
        .string()
        .required("A senha é obrigatória.").min(9, 'Senha deve ter no mínimo 9 caracteres'),

})






const AdmCarla = () => {
    const [apiPost, setApiPost] = useState([]);
    const [deleteItem, setDeleteItem] = useState(false);
    const [showPost, setShowPost] = useState(true)


    const formRef = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationPost) });



    const addPost = data => {
        const today = new Date();
        const day = today.toLocaleDateString('pt');


        // enviar uma requisição POST para a API com os dados do novo post
        axios.post('http://localhost:3000/post', {
            title: data.title,
            content: data.content,
            description: data.description,
            day: day,
            imagem: data.image
        })
            .then(response => {
                console.log(response.data); // exibir a resposta da API
                formRef.current.reset(); // limpar os campos do formulário
            })
            .catch(error => {
                console.log(error); // lidar com possíveis erros
            });
    };



    useEffect(() => {
        axios.get('http://localhost:3000/post')
            .then(response => {
                console.log(response.data[3]);
                setApiPost(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const handleDelete = (id) =>  {
        const confirmDelete = window.confirm("Você tem certeza que deseja deletar este item?");
        if (confirmDelete) {
            axios.delete(`http://localhost:3000/post/${id}`)
                .then(response => {
                    console.log(response.data);
                    setDeleteItem(!deleteItem); // atualiza o estado de deleteItem para forçar a atualização da lista após a deleção
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    const ShowGalery = () => {
        return setShowPost(false);
    }
    const ShowPost = () => {
        return setShowPost(true);
    }
    return (
       
        
    <>
    <div className="container-BTN">
    <button className='button' onClick={ShowPost}>Adm Post</button>
    <button className='button' onClick={ShowGalery}>Adm Galeria</button>
</div>
    {showPost? (<>
        <div className='adm'>
            <h1>Ola Carla</h1>
            <div className='postAdm'>
                <h3 className='titleAdm'> Fazer um novo Post</h3><br />

                <form className='formPost' onSubmit={handleSubmit(addPost)} ref={formRef}>
                    <label>Titulo</label>
                    <input className='titlePost' type='text' name='title' {...register('title')} placeholder='Digite o Título' maxLength="50" />
                    <div className='error-message'>{errors.title?.message}</div><hr />

                    <label>Imagem do Poste</label>
                    <textarea className='titlePost' type='text' name='image'  {...register('image')} placeholder='Coloque o URL da imagem' />
                    <p className='error-message'>{errors.image?.message}</p><hr />


                    <label>Conteúdo do Post</label>
                    <textarea className='contentPost' type='text' name='content'  {...register('content')} placeholder='Digite o conteúdo' />
                    <p className='error-message'>{errors.content?.message}</p><hr />

                    <label> Conteúdo visivel no card</label>
                    <input className='textCard' type='text' name='description' {...register('description')} placeholder='Pequeno texto para o card' maxLength="128" />
                    <p className='error-message'>{errors.description?.message}</p><hr />

                    <button type='submit' className='button' >Postar</button>
                </form>
            </div>
        </div>
        <h1 className='title-atuais'>Imagens Atuais</h1><hr/>
       <div className='post-adm'>
       

        {apiPost.map((post, index) => (
                <div key={index} className='cardsAdm'>
                 <div className='img-post'><img src={post.imagem+".png"} alt={post.id} /></div>
                    <h3>{post.title}</h3>
                    <button className='btn-delete' onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
        ))}</div></>) : (<AdmGallery/>)}
        



        </>
        
    )
}

export default AdmCarla
