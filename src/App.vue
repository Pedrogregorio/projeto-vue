<template>
  <v-app >
      
          <!--https://material.io/tools/icons/-->
          
    <v-toolbar color="light-blue darken-2 white--text" v-if="login"> 
        <v-toolbar-side-icon 
          class="white--text"
          @click="exibe = !exibe"
        ></v-toolbar-side-icon>
        
        <v-spacer></v-spacer>
        <v-toolbar-title class="font-weight-black" justify-center><b>C</b>ompra <b>A</b>luguel e <b>V</b>enda de <b>I</b>moveis</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn to="/" flat class="white--text">Página Inicial</v-btn>
          <v-btn to="/perfil" flat class="white--text" v-if="logado">
            <v-icon color="white">person</v-icon>Perfil</v-btn>
          <v-btn to="/login" flat class="white--text" v-else="">Logar</v-btn>
          <v-btn to="/cadastrar" flat class="white--text" v-if="logado">
            <v-icon color="white">attachment</v-icon>Cadastrar Imovel</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer 
      absolute
      temporary
      v-model="exibe"
    >
      <v-toolbar color="light-blue darken-2 white--text">
        <h1>C A V I</h1>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon color="light-blue darken-2">apps</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Início
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/login">
          <v-list-tile-action>
            <v-icon color="light-blue darken-2">person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Login
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/cartao">
          <v-list-tile-action>
            <v-icon color="light-blue darken-2">credit_card</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Exemplo de Cartão
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/cadastrar">
          <v-list-tile-action>
            <v-icon color="light-blue darken-2">attachment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              Cadastrar Imovel
          </v-list-tile-content>
        </v-list-tile>
        
      </v-list>
    </v-navigation-drawer>
    <v-content class="light-blue lighten-2">
            
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
        logado: true
      }
    } 
  }
</script>

