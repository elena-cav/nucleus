import { getStrapiURL } from "../lib/api";
// import React from "react";

// export default class Background extends React.Component {
//     constructor(props) {
//       super(props);

//       const images = [
//         getStrapiURL('/uploads/2_Twin_Lee_bc58e1ea0c.jpg'),
//         getStrapiURL('/uploads/4_Radio_City_67ae2e71b5.jpg'),
//         getStrapiURL('/uploads/6_Ollie_Wride_9177b9c63f.jpg'),
//         getStrapiURL('/uploads/1_Kelli_leigh_8ee8a01fa3.png'),
//         getStrapiURL('/uploads/5_Ollie_Wride_OIALT_9c58282827.jpg'),
//         getStrapiURL('/uploads/3_USHUAIA_a66a5c6efc.jpg')

//       ];
//       this.state = {
//         images,
//         currentImg: 0
//       }
//     }

//     componentDidMount() {
//         console.log('didmount')

//       this.interval = setInterval(() => this.changeBackgroundImage(), 3500);
//     }

//     componentWillUnmount() {
//         console.log('willunmount')
//       if (this.interval) {
//         clearInterval(this.interval);
//       }
//     }

//     changeBackgroundImage() {
//         console.log('changebackground')
//       let newCurrentImg = 0;
//       const {images, currentImg} = this.state;
//       const noOfImages = images.length;

//       if (currentImg !== noOfImages - 1) {
//         newCurrentImg = currentImg + 1;
//       }

//       this.setState({currentImg: newCurrentImg});
//     }

//     render() {
//       const {images, currentImg} = this.state;
//       const urlString = `url('${images[currentImg]}')`;
// console.log(currentImg)
// console.log(urlString)
// var sectionStyle = {
//     width: "100%",
//     height: "100vh",
//     backgroundImage: urlString,
//     objectFit: "cover"
//   };
  
  
//       return (
//         <section className='fadein' style={ sectionStyle }>
//       </section>
//       );
//     }
//   }


// import React, { useState, useEffect } from "react";

// // const heroImage = ["hero1.svg", "hero2.svg"];

// export default function Background() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const images = [
//             getStrapiURL('/uploads/2_Twin_Lee_bc58e1ea0c.jpg'),
//             getStrapiURL('/uploads/4_Radio_City_67ae2e71b5.jpg'),
//             getStrapiURL('/uploads/6_Ollie_Wride_9177b9c63f.jpg'),
//             getStrapiURL('/uploads/1_Kelli_leigh_8ee8a01fa3.png'),
//             getStrapiURL('/uploads/5_Ollie_Wride_OIALT_9c58282827.jpg'),
//             getStrapiURL('/uploads/3_USHUAIA_a66a5c6efc.jpg')
    
//           ];
//   useEffect(() => {
//     setInterval(() => {
//         activeIndex !== images.length ? setActiveIndex(activeIndex+1): setActiveIndex(0)
//         // activeIndex  === 0 ? setactiveIndex(1) : setactiveIndex(0);
//     }, 3000);
//   });

//   const imageStyle = {backroundImage: crossFade( url( getStrapiURL('/uploads/2_Twin_Lee_bc58e1ea0c.jpg')), url( getStrapiURL('/uploads/4_Radio_City_67ae2e71b5.jpg')), url( getStrapiURL('/uploads/6_Ollie_Wride_9177b9c63f.jpg')))}

//   return (
//     <div style={imageStyle}>
//       {/* <img
//         className='featureImage'
//         src={images[activeIndex]}
//         alt={"imageTitle"}
//       /> */}
//     </div>
//   );
// }





import React, { Component } from "react";
import ReactDOM from "react-dom";
import Crossfade from 'react-crossfade-responsive'
  const images = [
            getStrapiURL('/uploads/2_Twin_Lee_bc58e1ea0c.jpg'),
            getStrapiURL('/uploads/4_Radio_City_67ae2e71b5.jpg'),
            getStrapiURL('/uploads/6_Ollie_Wride_9177b9c63f.jpg'),
            getStrapiURL('/uploads/1_Kelli_leigh_8ee8a01fa3.png'),
            getStrapiURL('/uploads/5_Ollie_Wride_OIALT_9c58282827.jpg'),
            getStrapiURL('/uploads/3_USHUAIA_a66a5c6efc.jpg')
    
          ];

export default function Background ({projects}) {


console.log('PROJECTS', projects)
const {content} = projects.find(e => e.title === 'Images')
return (
      <div className="fadecycle">
      <div className='singleimage'>
      <div className='imagegradient'>
        <img src={  getStrapiURL(content[0].media.url)}/>  </div>       <h2 className='caption'>{content[0].media.caption}</h2>
</div>
        <div className='singleimage'>
        <div className='imagegradient'>

        <img src={  getStrapiURL(content[1].media.url)}/> </div>         <h2 className='caption'>{content[1].media.caption}</h2>
</div>
        <div className='singleimage'>
        <div className='imagegradient'>
        <img src={  getStrapiURL(content[2].media.url)}/> </div>  
               <h2 className='caption'>{content[2].media.caption}</h2>
</div>
        <div className='singleimage'>
        <div className='imagegradient'>
        <img src={  getStrapiURL(content[3].media.url)}/> </div>       <h2 className='caption'>{content[3].media.caption}</h2>
</div>
        <div className='singleimage'>
        <div className='imagegradient'>
        <img src={  getStrapiURL(content[4].media.url)}/></div>
        <h2 className='caption'>{content[4].media.caption}</h2></div>
        <div className='singleimage'>
          <div className='imagegradient'>
        <img src={  getStrapiURL(content[5].media.url)}/></div>
        <h2 className='caption'>{content[5].media.caption}</h2></div>

    </div>


    );
  
}

