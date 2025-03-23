<script>
import imgUrl from '../assets/logo.png'
import Menu from './Menu.vue'

  export default {
    components: {
        Menu
    },
    data: () => ({
      sourceImage:imgUrl,
      drawer: false,
      menu: [
        { title: 'Accueil', sub: [], link: 'Home' },
        { title: 'Histoire', sub: [
            { title: 'MARPEN', link: 'Story', id:'marpen' },
            { title: 'Fondation de l\'ASSISE', link: 'Story', id:'fondation' },
            { title: 'Les premiers Chantiers', link: 'Story', id:'chantier'},
            { title: 'Le Cyclone Jean-MI', link: 'Story', id:'cyclone' },
            { title: 'Note à Demain', link: 'Story', id:'demain' },
          ] 
        },
        { title: 'Projets', sub: [
            { title: 'Mémoire d\'épicière', link: 'Valtaud' },
            { title: 'Guinguette', link: 'Guinguette' },
            { title: 'Chantier Jeune', link: 'Chantier' },
            { title: 'Coq à l\'Âme', link: 'Echoisy' },
          ]
        },
        { title: 'Organisation', sub: [
            { title: 'Les Comissions', link: 'Comission' },
            { title: 'Les Membres', link: 'Membre' },
            { title: 'Nos Valeurs', link: 'Valeur' },
          ] 
        },
        { title: 'Actualités', sub: [
            { title: 'Article', sub: [], link: 'Article' },
            { title: 'Carte des Evénements', sub: [], link: 'Evenement' },
            { title: 'Galerie Photo', sub: [], link: 'Photo' },

        ]},
        { title: 'Contact', sub: [
              { title: 'Nous Contacter', link: 'Contact' },
              { title: 'Recrutement', link: 'Recrutement' },
              { title: 'FAQ', link: 'FAQ' },
              { title: 'Que dit-on de nous ?', sub: [], link: 'Presse' },
              { title: 'Partenaires', sub: [], link: 'Partenaires' },        
          ] 
        }
      ],
    }),
  }
</script>

<template>
    <v-app id="inspire">
      <v-toolbar color="white">
        <v-app-bar-nav-icon 
          class="hidden-md-and-up"
          @click="drawer = true">
        </v-app-bar-nav-icon>
        <v-row justify="center" align="center" class="mx-5">
          <v-col md="4" sm="12" xs="12">
            <v-toolbar-title>
              <v-row justify="center" align="center">
                <v-col md="4" sm="12">
                  <v-img
                    height="70"
                    :src="sourceImage"
                  ></v-img>
                </v-col>
                <v-col class="hidden-sm-and-down" md="8">
                  <span>
                    Association ASSISE
                  </span>
                </v-col>
              </v-row>
            </v-toolbar-title>
          </v-col>

          <v-col md="8" >
            <v-row>
              <v-col cols="2" v-for="item in menu" :key="item.icon" class="hidden-sm-and-down">
                <Menu :title="item.title" :link="item.link" :items="item.sub"></Menu>
            </v-col>
            </v-row>
          </v-col>         

        </v-row>
      </v-toolbar>
      <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
          >
        <v-list nav dense>
          <span v-for="(item) in menu">

            <v-list-group v-if="item.sub.length > 0" :value="item.title">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  :title="item.title"
                ></v-list-item>
              </template>
              <v-list-item
                v-for="(sub) in item.sub"
                :title="sub.title"
                :value="sub.title"
                @click="$router.push(sub.id ?
                {name: sub.link, params: { id: sub.id } } :
                {name: sub.link})"
              ></v-list-item>
            </v-list-group>

            <v-list-item v-else
              :title="item.title"
              :value="item.title"
              @click="$router.push(item.id ?
                {name: item.link, params: { id: item.id } } :
                {name: item.link})"
            ></v-list-item>

          </span>
        </v-list>
      </v-navigation-drawer>
      <v-main>
          <router-view></router-view>
      </v-main>
  
    </v-app>  
  </template>
  
  <style>
  p{
    font-family:Arial, Helvetica, sans-serif;
    font-size:14px;
  }
  </style>