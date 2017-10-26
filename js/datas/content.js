new Vue({
  el: '#app',
  data: {
    projects: [
      {
        id: 'project1',
        anchor: '1',
        title: 'Échó',
        description: 'description 2',
        image: 'img/cover_echo_x2.png',
        link: {
          title: 'link',
          url: 'http://fredericbriolet.com/echo/'
        },
      },

      {
        id: 'project2',
        anchor: '2',
        title: 'Data \n Exposure',
        description: 'Dans le cadre de la fête du graphisme et pour répondre au sujet du "Big Data", j\'ai choisi de dresser le portrait d\'un monde dans lequel la transparence est rendue totale par la mise en exposition des données privées d’autrui. Un monde froid et presque apocalyptique, où la masse de données est omniprésente.',
        image: 'img/cover_data-exposure_x2.png',
        link: {
          title: 'link',
          url: 'project2.html'
        },
      },
      {
        id: 'project3',
        anchor: '3',
        title: 'Emeraude',
        description: 'description 2',
        image: 'img/cover_emeraude_x2.png',
        link: {
          title: 'link',
          url: 'project3.html'
        },
      },
      {
        id: 'project4',
        anchor: '4',
        title: 'Responsive Wishes',
        description: 'description 3',
        image: 'img/cover_responsive-wishes_x2.png',
        link: {
          title: 'link',
          url: 'http://lieucommun.com/responsivewishes2017/'
        },
      },
      {
        id: 'project5',
        anchor: '5',
        title: 'Spectre',
        description: 'description 3',
        image: 'img/cover_spectre_x2.png',
        link: {
          title: 'link',
          url: 'http://www.example.org'
        },
      },
      {
        id: 'project6',
        anchor: '6',
        title: 'Singularité',
        description: 'description 3',
        image: 'img/cover_singularite_x2.png',
        link: {
          title: 'link',
          url: 'project6.html'
        },
      },
      {
        id: 'project7',
        anchor: '7',
        title: 'Daily Routine',
        description: 'description 3',
        image: 'img/cover_daily-routine_x2.png',
        link: {
          title: 'link',
          url: 'https://www.behance.net/gallery/53116037/Daily-Routine/?q=html+ouvrir+lien+onglet'
        },
      },
      {
        id: 'project8',
        anchor: '8',
        title: 'Souffle',
        description: 'description 3',
        image: 'img/cover_souffle_x2.png',
        link: {
          title: 'link',
          url: 'https://vimeo.com/160308878'
        },
      },
    ]
  }
})



new Vue({
  el: '#app_project2',
  data: {
      title: 'Data Exposure',
      description: 'Dans le cadre de la fête du graphisme et pour répondre au sujet du "Big Data", j\'ai choisi de dresser le portrait d\'un monde dans lequel la transparence est rendue totale par la mise en exposition des données privées d’autrui. Un monde froid et presque apocalyptique, où la masse de données est omniprésente.',
      role1: 'Illustrateur',
      role2: 'Motion Designer',
      image_mobile: 'img/cover_data-exposure_x2.png',
      image1: 'img/data-exposure_1.png',
      image2: 'img/data-exposure_2.png',
      image3: 'img/data-exposure_3.png',
      image4: 'img/data-exposure_4.png',
      link: {
          title: 'link',
          url: 'https://vimeo.com/140685513'
      },
      previous_project : 'project6.html',
      next_project : 'project3.html',
    }
  })

new Vue({
  el: '#app_project3',
  data: {
      title: 'Emeraude',
      description: 'En août 2014, cinq étudiants dans le domaine du web ont constitué une association dans le but de développer une application mobile. L\'objectif de cette initiative étant de, grâce à une simple application, pouvoir venir en aide à un maximum de sans-abris dans les rues de Paris.',
      role1: 'Directeur Artistique',
      role2: 'UX/UI Designer',
      image_mobile: 'img/cover_emeraude_x2.png',
      image1: 'img/emeraude_1.png',
      image2: 'img/emeraude_2.png',
      image3: 'img/emeraude_3.png',
      image4: 'img/emeraude_4.png',
      previous_project : 'project2.html',
      next_project : 'project6.html',
    }
  })

new Vue({
  el: '#app_project6',
  data: {
      title: 'Singularité',
      description: 'Cette représentation traite des trajets effectués par les étudiants en BDDI entre l’école des Gobelins et leurs domiciles. Son but est de montrer visuellement qu’à Paris, le trajet le plus court n’est pas toujours le plus rapide',
      role1: 'Directeur Artistique',
      role2: 'UX/UI Designer',
      link: {
          title: 'Singularité',
          url: 'https://leonixe.github.io/Singularite/'
      },
      image_mobile: 'img/cover_singularite_x2.png',
      image1: 'img/singularite_1.png',
      image2: 'img/singularite_2.png',
      image3: 'img/singularite_3.png',
      previous_project : 'project3.html',
      next_project : 'project2.html',
    }
  })