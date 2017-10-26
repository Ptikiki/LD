$(document).ready(function() {

    $(".menu_mobile_burger > a").click(function() {
      $(".menu_mobile_toggle").fadeIn( "fast" )
      $("body").css( "overflow-y", "hidden" )
    })
    $(".menu_mobile_cross").click(function() {
      $(".menu_mobile_toggle").fadeOut( "fast" )
      $("body").css( "overflow-y", "initial" )
    })

    $('html, body').animate({
      scrollLeft: 0
    }, 100)  

    let mobile = false
    detectMobile()

    let positions_projects = []
    $('.list_anchors').fadeOut(0)

    // console.log(window.innerWidth)

    // EVENTS (scroll, click...)

    if (designDatas && mobile == false) {
      setTimeout(function() {

        $(window).scroll(function() {

          // trick pour avoir le menu et les ancres qui défilent en même temps que le scroll (équivalent à position : fixed)
          $('.menu, .list_anchors').css({
            'left': $(this).scrollLeft()
          })

          for(let i = 1; i < designDatas.projects.length+1; i++) {

            // enregistrement de la position de chaque bloc-projet lors de chaque scroll
            let position_project = $("#project"+i).offset().left-window.innerWidth/2
            positions_projects.push(position_project)

            // attribution du design en fonction de la position du scroll par rapport au projet courant 
            if ($(this).scrollLeft() > positions_projects[i-1] && $(this).scrollLeft() < positions_projects[i]) {
              $(".background").css("background-color", designDatas.projects[i-1].background_color)
              $(".block_project").css("background-color", designDatas.projects[i-1].other_projects_color)
              $("#project"+i+"").css("background-color", designDatas.projects[i-1].background_color)
              $(".block_project").css("transform", "scale(0.95)")
              $("#project"+i+"").css("transform", "scale(1)")
              $(".block_project img").css("opacity", "0")
              $("#project"+i+" img").css("opacity", "1")  
              $(".block_project span").css({"opacity" : "0"})  
              $("#project"+i+" span").css({"opacity" : "1"})
            }
            // cas particulier pour la condition de boucle du dernier projet 
            // (sa position n'est inférieure à celle d'aucun autre projet contrairement aux autres)
            else if ($(this).scrollLeft() > positions_projects[positions_projects.length-1]) {
              $(".background").css("background-color", designDatas.projects[designDatas.projects.length-1].background_color)
              $(".block_project").css("background-color", designDatas.projects[designDatas.projects.length-1].other_projects_color)
              $(".block_project img").css("opacity", "0")
              $("#project"+designDatas.projects.length+" img").css("opacity", "1")
              $(".block_project span").css({"opacity" : "0"})  
              $("#project"+designDatas.projects.length+" span").css({"opacity" : "1"})  
            }
          }

          if ($(this).scrollLeft() > 100) {
            $(".menu a").css("color", "white");
            $(".background").css("margin-left", 0)
            $('.home_intro').fadeOut()
            $('.social').fadeOut()
            $('.list_anchors').fadeIn() 
            $(".block_project span").css("display", "inherit")  
          } 
          else if ($(this).scrollLeft() < 100 && mobile == false ) {
            $(".menu a").css("color", "black");
            $(".background").css({"margin-left" : 66.64+'%', "background-color" : "#e5e5e5"})
            $('.home_intro').fadeIn()
            $('.list_anchors').fadeOut()
            $('.social').fadeIn()
            $(".list_projects li ").css("background-color", "#c3c3c3")
            $(".block_project span").css("display", "none")
            $(".block_project").css("transform", "scale(0.95)")
          }
        })
      }, 400)
    }

    $(".anchor").click(function() {
      for(let i = 0; i < positions_projects.length; i++) {
        let id = $(this).attr('id')
        let demi_image = $("#project"+id)[0].clientWidth/2
        let page = positions_projects[id-1]+demi_image
        let speed = 500
        $('html, body').stop(true, false).animate( { scrollLeft: page }, speed )

        $(".anchor").css("background-color", designDatas.projects[id-1].other_projects_color)
        $(this).css("background-color", "white")
      }
    })

  

    // FUNCTIONS
    windowResize()

    function setContainerHeight(){
      let biggestHeight = $(".menu").outerHeight(true) + $(".list_projects").outerHeight(true)
      $(".container").height(biggestHeight)
    }

    function resizePictures() {
      let nbr_screens = nbr_projects/2 // chaque "écran" contient deux projets

      let largeur_list_projects = nbr_screens*100 // pour que la largeur de la liste dépende du nombre de projets précisé
      $(".list_projects").css("width", largeur_list_projects+"%")

      let largeur_img_projet = 25/nbr_screens // pour que le pourcentage corresponde à une taille d'écran de 100%
      $(".block_project").css("width", largeur_img_projet+"%")

      let decalage_img_projet = 16.6/nbr_screens // même chose
      $(".block_project").css("margin-left", decalage_img_projet+"%")

      setTimeout(setContainerHeight,300)
    }

    function detectMobile() {
      if(window.innerWidth <= 667) {
        console.log("mobile")
        mobile = true
        $('.home_intro').fadeOut(0)
        $(".list_projects").css("top", "0")
        $(".list_projects li").css("width", "74.97vw")
        $(".list_projects li").css("margin", "0")
        $(".list_projects li").css("margin-bottom", "9.375vh")
        $(window).unbind('scroll')
      } else if (designDatas) {
        console.log("desktop")
        mobile = false
        horizontalScroll()
        resizePictures()
      } else {
        mobile = false
      }
    }

    function horizontalScroll() {
      // SMOOTH SCROLL (au clic sur une ancre)
      $('a[href*="anchor-"]').click( function() { 
        let page = $(this).attr('href') 
        let ancre = page.replace('#','')
        let coordonnees = $('a[name="' + ancre + '"]').offset().top
        let speed = 750 
        $('html, body').animate( { scrollTop: coordonnees }, speed )
        return false
      });

      // MOUSEWHEEL
      $('html, body, *').mousewheel(function(e, delta) {
        if (delta < 0) {
          this.scrollLeft += (40)
        }
        else if (delta > 0) {
          this.scrollLeft -= (50)
        }
        e.preventDefault()
      })
    }

    function windowResize() {
      $( window ).resize(function() {
        detectMobile()
      })
    }

    $(".menu_projects").click(function() {
       $('html, body').animate({
            scrollLeft: 180
        }, 800);
    })
   
  })