<template>
  <v-app>
      
          <!--https://material.io/tools/icons/-->
          
    <v-toolbar color="light-blue darken-2 white--text" > 
        <v-toolbar-side-icon 
          class="white--text"
          @click="exibe = !exibe"
        ></v-toolbar-side-icon>
        
        <v-spacer></v-spacer>
        <v-toolbar-title justify-center>C A V I</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn to="/" flat class="white--text">Página Inicial</v-btn>
          <v-btn to="/perfil" flat class="white--text" v-if="logado">Perfil</v-btn>
          <v-btn to="/login" flat class="white--text" v-else="logado">Logar</v-btn>
          <v-btn to="/cadastrarI" flat class="white--text" v-if="logado">Cadastrar Imovel</v-btn>
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
            <v-icon color="light-blue darken-2">dashboard</v-icon>
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
      </v-list>
    </v-navigation-drawer>
    <v-content>
            
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
        logado: false
      }
    } 
  }
</script>

