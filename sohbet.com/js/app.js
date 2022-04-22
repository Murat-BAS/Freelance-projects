// splide-js-start
    document.addEventListener('DOMContentLoaded', function () {//bu fonksiyon ile sliderin index bilgisini çektik ve başka sliderlara aynı özelliklerin bulaşmamsını sağladık
        new Splide('#sliderSectionBlogs', {//id vererek bu slider için sadece geçerli olmasını sağladık
            type: 'loop',
            perMove: 1,
            perPage: 3,
            breakpoints: {
                1180: {
                    perPage: 2,
                   
                  },
                  767: {
                    perPage: 2,
                
                  },
                  640: {
                    perPage: 1,
              
                  },
            },
            autoplay: 'playing',
            pagination: false,
        }).mount();
    });
// splide-js-end