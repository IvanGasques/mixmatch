import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imagem from '../../assets/banner.jpg'
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
            {/* <h1 className='titleBlog' id='text-focus-in'> Nosso Blog</h1> */}
            <ImQuotesLeft id="wobble-hor-bottom" className="aspasL" size={60} />
            <h5 className='subDescription' id='text-focus-in'>Nosso Blog tem como objetivo fornecer conteúdo útil e interessante para os clientes e visitantes do site, abordando temas como técnicas de restauração, cuidados com móveis antigos, tendências de decoração, histórias e curiosidades sobre móveis e muito mais. Além disso, o blog também pode ser usado para divulgar novidades sobre a empresa, como promoções, eventos e lançamentos de produtos.</h5>
            <ImQuotesRight id="wobble-hor-bottom" className="aspasR" size={60} />



            <div className='contentBlog'>
            
             {apiPost.map((post, index) => (
                <div key={index}>
                    <Card id='cardBlog' sx={{ maxWidth: 345, margin: '20px 0' }}  >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="160"
                        image= {post.imagem+'.jpg'}
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
