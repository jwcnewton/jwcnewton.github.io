$(function () {

    particlesJS("particles-oli-wrapper", {  
        "particles":{  
           "number":{  
              "value":160,
              "density":{  
                 "enable":true,
                 "value_area":800
              }
           },
           "color":{  
              "value":"#11eeff"
           },
           "shape":{  
              "type":"circle",
              
              "stroke":{  
                 "width":0,
                 "color":"white"
              },
              "polygon":{  
                 "nb_sides":5
              },
              "image":{  
                 "src":"img/github.svg",
                 "width":100,
                 "height":100
              }
           },
           "opacity":{  
              "value":1,
              "random":true,
              "anim":{  
                 "enable":true,
                 "speed":1,
                 "opacity_min":0,
                 "sync":false
              }
           },
           "size":{  
              "value":3,
              "random":true,
              "anim":{  
                 "enable":false,
                 "speed":4,
                 "size_min":0.3,
                 "sync":false
              }
           },
           "line_linked":{  
              "enable":false,
              "distance":150,
              "color":"#ffffff",
              "opacity":0.4,
              "width":1
           },
           "move":{  
              "enable":true,
              "speed":1,
              "direction":"none",
              "random":true,
              "straight":false,
              "out_mode":"out",
              "bounce":false,
              "attract":{  
                 "enable":false,
                 "rotateX":600,
                 "rotateY":600
              }
           }
        },
        "interactivity":{  
           "detect_on":"canvas",
           "events":{  
              "onhover":{  
                 "enable":false,
                 "mode":"bubble"
              },
              "onclick":{  
                 "enable":false,
                 "mode":"repulse"
              },
              "resize":true
           },
           "modes":{  
              "grab":{  
                 "distance":400,
                 "line_linked":{  
                    "opacity":1
                 }
              },
              "bubble":{  
                 "distance":20,
                 "size":0,
                 "duration":2,
                 "opacity":0,
                 "speed":3
              },
              "repulse":{  
                 "distance":400,
                 "duration":0.4
              },
              "push":{  
                 "particles_nb":4
              },
              "remove":{  
                 "particles_nb":2
              }
           }
        },
        "retina_detect":true
     });

    var $particle = $('#particles-oli-wrapper').css({ display: 'none' }).removeClass('hide');
    var $navH1 = $('.index-wrapper header h1, .index-wrapper header nav').hide();

    var $header = $('.index-wrapper .hide')
                    .removeClass('hide')
                    .css({
                        height: 0
                    })
                    .animate({
                        height: 120
                    }, 800, function() {
                        $particle.fadeIn(600);
                        $navH1.fadeIn(600);
                    });

    $('.head-nav__link').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        
        $particle.fadeOut(600);
        $navH1.fadeOut(100);

        $header.animate({
            height: 0
        }, 800, function() {
            window.location.href = $this.attr('href');
        });
    });

});
