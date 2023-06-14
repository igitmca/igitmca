'use client'

import { styled } from "styled-components";
import { Options, Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { noticeList } from "@/utils/notice";
import Link from "next/link";
import { Button, Typography } from "@mui/material";
const NoticePage = () => {
    const options: Options = {
        type: 'loop',
        height: '370px',
        width: '17rem',
        arrows: false,
        autoplay: true,
        interval: 2000,
        gap: '1rem'
    }
    const handleLinkClick = (url:string) => {
        window.open(url, '_blank'); // Open the URL in a new tab
      };
    const slideColors = ['#ce1111', '#008cff', '#76a30c','#0ab86f','#d37a07','#b40a2f'];
    return (
        <NoticeContainer>
            <Typography variant="h1" textAlign={'center'}>Notices</Typography>
            <hr color="#6c63ff" />
            <NoticeScrollContainer>
                
                <Splide options={options}
                >
                    {
                        noticeList.map((notice, index) => <SplideSlide key={notice.id}>
                            <div className="slide" style={{ backgroundColor: slideColors[index % slideColors.length] }}>
                                <Card>
                                    <Typography variant="h5">{notice.title}</Typography>
                                    <Link href={notice.link} replace target="_blank" rel="noopener noreferrer">Link</Link>
                                </Card>
                            </div>
                        </SplideSlide>)
                    }
                </Splide>
            </NoticeScrollContainer>
        </NoticeContainer>
    )
}

export default NoticePage;
const NoticeContainer = styled.div`
    h1{
        font-size: 2.5rem;
        font-weight: 900;
    }
    hr{
        width: 50%;
        margin: .5rem auto;
    }
`;
const NoticeScrollContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0;
`
const Card = styled.div`
    height: 21rem;
    margin: 2rem 0;
    padding: 16px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* box-shadow: 10px 10px 4px rgba(255, 71, 71, 0.1); */
    li:nth-child(2) {
        background-color: yellow;
    }
    a{
        margin: 1rem 0;
        background-color: #6c63ff;
        padding: .9rem 2rem;
        border-radius: 2rem;
        transition: background-color ease 500ms;
        &:hover{
            background-color: #ffb116;
        }
    }
`