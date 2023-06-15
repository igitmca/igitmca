"use client"
import { Button } from '@mui/material'
import styles from '@/styles/intropart.module.css'
// Import Swiper React components
import { homeImage } from '@/utils/homeImage';
import Image from 'next/image';
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { styled } from 'styled-components';


const IntroPart = () => {
    return (
        <div className={styles.main__container}>
            <div className={styles.content__container}>
                <h1 className='heading'>Welcome to IGIT MCA Student Website</h1>
                <p>
                    This page is developed by MCA 40th in view of helping the juniors.This page will help to connect their seniors and juniors.It includes all the semester notes, questions and assignments. It lets you to contact your senior throught their instagram and linkedin profile.
                </p>
                <Button variant='contained' href='/batch'>Get Started</Button>
            </div>
            <div className={styles.swipper__container}>
                <Carousel />
            </div>
        </div>
    )
}

export default IntroPart

const Carousel = () => {
    const options: Options = {
        type: 'loop',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        perPage:1 ,
        height:'28rem',
        breakpoints:{
            640:{
                height:'20rem',
                arrows:false
            }
        }
    }
    return (
        <CardContainer>
            <Splide options={options} aria-labelledby="autoplay-example-heading"
                hasTrack={false}>
                <SplideTrack>
                    {
                        homeImage.map((item,index) =>
                            <SplideSlide key={index} >
                                <Card>
                                    <Image width={200} height="0"  src={item} alt="Carousel Image" />
                                </Card>
                            </SplideSlide>)
                    }
                </SplideTrack>
            </Splide>
        </CardContainer>
    )
};

const Card=styled.div`
    border-radius: .5rem;
    box-shadow: rgba(72, 72, 72, 0.827) 0px 2px 20px 0px;
    background-color: white;
    margin: 3rem 2rem;
    img{
        width: 100%;
        height: 24rem;
        box-shadow: rgba(255, 59, 10, 0.781) 0px 2px 20px 0px;
    }
@media only screen and (max-width: 640px) {
    img{
        height: 15rem;
    }
}
`;
const CardContainer=styled.div`
`