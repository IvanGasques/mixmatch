import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Parallax } from 'react-parallax';
import foto1 from '../../assets/blog.jpg'
import axios from 'axios';

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import { Link } from 'react-router-dom';

import './blog.css'
import CarouselFadeExample from '../../components/Carousel/Carousel';

export default function Blog() {


    const [apiPost, setApiPost] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/post')
            .then(response => {
                console.log(response.data[3]);
                setApiPost(response.data)
                const imagens = response.data
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const url = `https://lh3.googleusercontent.com/pw/AJFCJaUHRNOPe9A7u_tqpCgWbEuayEWbY2nj3oJMqQFyHdrdTJxtW7y9p0IGFFCVxWFq6N78adZ27S3jycHB-trLOQYxHZLcsoVGK3TEuSrDt3K06aa1M3KIYUhlJMWt2ylUBuAjabFBmfT9h8T4xFGS3Xbr=w1140-h733-s-no?authuser=0.jpg`

    return (
        <>



            <CarouselFadeExample />
            <Parallax
                bgImage={foto1}
                height='380px'
                bgImageAlt="Imagem de fundo"
                strength={1000}>
                <h5 className='subDescription' id='text-focus-in'>"Nosso portfólio de restauração de móveis apresenta uma ampla variedade de projetos em que trabalhamos, desde peças clássicas de madeira até móveis modernos e estofados. Cada peça apresentada em nosso portfólio foi cuidadosamente restaurada para refletir seu design original, mas com a adição de um toque moderno."</h5>
            </Parallax>


            <div className='contentBlog'>

                {apiPost.map((post, index) => (
                    <div key={index}>
                        <Card id='cardBlog' sx={{ maxWidth: 345, margin: '20px 0' }}  >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="160"
                                image={post.imagem + '.jpg'}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <p>{post.day}</p>
                                    {post.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="medium">Compartilhar</Button>
                                <Button size="medium">Ver mais</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}


            </div>
        </>
    );
}
