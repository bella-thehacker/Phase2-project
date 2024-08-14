import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Alumnis = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return (
        <div className='carousel'>
          <div className='carousel-inn'>
          <Slider {...settings}>
            {data.map((d) => (
              <div className='carousel-inn-out'>
                <div className='carousel-img'>
                  <img src={d.img} alt='' className='c-image' />
                </div>
                <div className='details'>
                  <p>{d.name}</p>
                  <p>{d.job}</p>
                  <p>{d.review}</p>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      )
    }
    
    const data = [
        {
          img: 'public/alumnis/Joshua.jpeg',
          name: 'Joshua Nyambane',
          job: 'Software Engineer',
          review:
            'Attending BaySide International High School transformed my academic journey. The diverse curriculum and supportive teachers set a strong foundation for my career in tech.',
        },
        {
          img: 'public/alumnis/Ivy.jpeg',
          name: 'Ivy Bella',
          job: 'Graphic Designer',
          review:
            'BaySide International High School nurtured my creativity and passion for design. The art programs and inspiring faculty helped me hone my skills and find my path.',
        },
        {
          img: 'public/alumnis/Kevin.jpeg',
          name: 'Kevin Kiptoo',
          job: 'Data Scientist',
          review:
            'The rigorous academic environment at BaySide prepared me for the challenges of university and beyond. The focus on critical thinking was invaluable.',
        },
        {
          img: 'public/alumnis/Diana.jpeg',
          name: 'Diana Shauri',
          job: 'Marketing Specialist',
          review:
            'BaySide fostered my interest in marketing and communication. The extracurricular activities and leadership opportunities were instrumental in shaping my career.',
        },
        {
          img: 'public/alumnis/Namada.jpeg',
          name: 'Namada Jr',
          job: 'Civil Engineer',
          review:
            'The strong emphasis on STEM subjects at BaySide equipped me with the technical skills I needed. The hands-on projects were particularly beneficial!',
        },
        {
          img: 'public/alumnis/Bob.jpeg',
          name: 'Bob Oyier',
          job: 'Biochemist',
          review:
            "BaySide's science programs ignited my passion for research. The lab facilities and mentorship from teachers were outstanding and helped me excel.",
        },
        {
          img: 'public/alumnis/Titus.jpeg',
          name: 'Titus Ouko',
          job: 'Financial Analyst',
          review:
            'The economics and finance classes at BaySide were incredibly helpful. They provided me with a solid grounding in financial principles that I still use today.',
        },
        {
          img: 'public/alumnis/Fatma.jpeg',
          name: 'Fatma Omar',
          job: 'Journalist',
          review:
            "BaySide's journalism program honed my writing and storytelling skills. The opportunities to report on real events were invaluable for my growth as a journalist.",
        },
      ]
    
export default Alumnis