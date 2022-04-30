import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Typography } from "@mui/material";
import data from "./data";
import { Grid } from "@mui/material";
import { Pagination, Scrollbar } from "swiper";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "./testimonials.css";

const Testimonials = () => {
  console.log(data);
  return (
    <section>
      <Typography variant='h5'>Review from CLients</Typography>
      <Typography variant='h2' gutterBottom style={{ marginBottom: "2rem" }}>
        Testimonials
      </Typography>
      <Grid container>
        <Swiper
          modules={[Pagination, Scrollbar]}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          spaceBetween={40}
          slidesPerView={1}
          className='myslider'
        >
          {data.map((d, index) => (
            <Grid item key={index} xs={12}>
              <SwiperSlide key={index}>
                <div className='slides'>
                  <img className='img' src={d.image} alt={d.name} />
                  <Typography
                    variant='h6'
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    {d.name}
                  </Typography>
                  <Typography
                    style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                    variant='body2'
                  >
                    {d.testimony}
                  </Typography>
                </div>
              </SwiperSlide>
            </Grid>
          ))}
        </Swiper>
      </Grid>
    </section>
  );
};

export default Testimonials;
