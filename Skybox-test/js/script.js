const slider = tns({
    container: '.carousel__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    autoplay: true,
    autoplayTimeout: 2800
  });

//   document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   }); - если используем кастомные стрелки и им необходимо задать ф-цию переключения.

//   document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   });


    // const slides = document.querySelectorAll('.carousel__item'),
    //       slider = document.querySelectorAll('.carousel__wrapper'),
    //       indicators = document.createElement('ol');
    // let slideIndex = 1;

    // showSlides(slideIndex);

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';
    // }

    // function plusSlider(n) {
    //     showSliders(slideIndex += n);
    // }

    // indicators.classList.add('carousel-indicators');
    // indicators.style.cssText = `
    //     position: absolute;
    //     right: 0;
    //     bottom: 0;
    //     left: 0;
    //     z-index: 15;
    //     display: flex;
    //     justify-content: center;
    //     margin-right: 15%;
    //     margin-left: 15%;
    //     list-style: none;
    // `; 
    // slider.append(indicators);

    // for (let i = 0; i < slides.length; i++) {
    //     const dot = document.createElement('li');
    //     dot.setAttribute('data-slide-to', i + 1);
    //     dot.style.cssText = `
    //         box-sizing: content-box;
    //         flex: 0 1 auto;
    //         width: 30px;
    //         height: 6px;
    //         margin-right: 3px;
    //         margin-left: 3px;
    //         cursor: pointer;
    //         background-color: #fff;
    //         background-clip: padding-box;
    //         border-top: 10px solid transparent;
    //         border-bottom: 10px solid transparent;
    //         opacity: .5;
    //         transition: opacity .6s ease;
    //     `;
    //     indicators.append(dot);
    // }

