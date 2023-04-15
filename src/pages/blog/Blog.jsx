import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imagem from '../../assets/banner.jpg'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import { Link } from 'react-router-dom';

import './blog.css'
import CarouselFadeExample from '../../components/Carousel/Carousel';

export default function Blog() {
    return (
        <>

<CarouselFadeExample/>
            {/* <h1 className='titleBlog' id='text-focus-in'> Nosso Blog</h1> */}
            <ImQuotesLeft id="wobble-hor-bottom" className="aspasL" size={60} />
            <h5 className='subDescription' id='text-focus-in'>Nosso Blog tem como objetivo fornecer conteúdo útil e interessante para os clientes e visitantes do site, abordando temas como técnicas de restauração, cuidados com móveis antigos, tendências de decoração, histórias e curiosidades sobre móveis e muito mais. Além disso, o blog também pode ser usado para divulgar novidades sobre a empresa, como promoções, eventos e lançamentos de produtos.</h5>
            <ImQuotesRight id="wobble-hor-bottom" className="aspasR" size={60} />
            <div className='contentBlog'>
                <Card id='cardBlog' sx={{ maxWidth: 345, margin: '20px 0' }}  >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="160"
                        image={imagem}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium">Share</Button>
                        <Button size="medium">Learn More</Button>
                    </CardActions>
                </Card>


                <Card id='cardBlog' sx={{ maxWidth: 345, margin: '20px 0' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="160"
                        image={imagem}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium">Share</Button>
                        <Button size="medium">Learn More</Button>
                    </CardActions>
                </Card>


                <Card id='cardBlog' sx={{ maxWidth: 345, margin: '20px 0' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="160"
                        image={imagem}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium">Share</Button>
                        <Button size="medium">Learn More</Button>
                    </CardActions>
                </Card>

                <Card id='cardBlog' sx={{ maxWidth: 345, margin: '20px 0' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="160"
                        image={imagem}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium">Share</Button>
                        <Button size="medium">Learn More</Button>
                    </CardActions>
                </Card>
                <Card id='cardBlog' sx={{ maxWidth: 345, margin: '20px 0' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="160"
                        image={imagem}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium">Share</Button>
                        <Button size="medium">Learn More</Button>
                    </CardActions>
                </Card>

            </div>
        </>
    );
}
