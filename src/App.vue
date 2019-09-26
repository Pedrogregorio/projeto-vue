<template>
  <v-app>
    <!--https://material.io/tools/icons/-->
    <v-toolbar color="light-blue--text"> 
        <v-toolbar-side-icon 
          class="light-blue--text"
          @click="exibe = !exibe"
        ></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title class="font-weight-black " justify-center><b>C</b>ompra <b>A</b>luguel e <b>V</b>enda de <b>I</b>moveis</v-toolbar-title>
        <v-spacer></v-spacer>
        
    </v-toolbar>
    <v-navigation-drawer 
      absolute
      temporary
      v-model="exibe"
    >
        <v-img :aspect-ratio="16/9" src="https://cdn.pixabay.com/photo/2016/11/22/23/03/hardwood-1851071_960_720.jpg">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
            <div class="subheading">{{name}}</div>
            <div class="body-1">{{email}}</div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile to="/inicio">
          <v-list-tile-action>
            <v-icon color="light-blue darken-2">apps</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Início
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/perfil">
          <v-list-tile-action>
            <v-icon color="light-blue darken-2">person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Perfil
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/CadastrarImovel">
          <v-list-tile-action>
            <v-icon color="light-blue darken-2">attachment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              Cadastrar Imovel
          </v-list-tile-content>
        </v-list-tile>
        
      </v-list>
    </v-navigation-drawer>
    <v-content class="light-blue lighten-5">
            
      <router-view>
      </router-view>
    </v-content>
  </v-app>
</template>
<script>
  export default {
    data(){
      return{
        exibe: false,
        name: 'Pedro G',
        email: 'pedrogregoriodias675@gmail.com'
      }
    } 
  }
</script>
<style scoped>
  .v-navigation-drawer {
    transition: none !important;
  }

  .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
</style>