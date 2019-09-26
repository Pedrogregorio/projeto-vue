<template>
    <v-layout align-center justify-center fill-height >
	    <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Faça Seu Cadastro</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank" v-on="on">
                      <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field id="nome" name="nome" label="Nome de Usuario" type="text"></v-text-field>
                  <v-text-field id="email" name="Email" label="E-mail" type="E-mail"></v-text-field>
                  <v-text-field id="senha" name="senha" label="Senha" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <button onclick="salvarInformacoes">Salvar</button>
              </v-card-actions>
            </v-card>
          </v-flex>
	</v-layout>
</template>
<script type="text/javascript">
    function salvarInformacoes() {
			
			nome = document.getElementById("nome").value;
			
            senha = document.getElementById("senha").value;
            
            email = document.getElementById("email").value;
			
			sessionStorage.setItem('Email', email);
			
			sessionStorage.setItem('Usuario', nome);
			
			sessionStorage.setItem('Senha', senha);
			
			alert("Informações Salvas!");
		
		}
</script>
