<template>
<<<<<<< HEAD
    <v-layout align-center justify-center fill-height >
	    <v-flex xs12 sm8 md4>
=======
    <v-layout align-center justify-center fill-height>
      <v-flex xs12 sm8 md4>
>>>>>>> ae5222bfe37c3381cf351b272c3bef5e5719fa55
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
<<<<<<< HEAD
                  <v-text-field id="nome" name="nome" label="Nome de Usuario" type="text"></v-text-field>
                  <v-text-field id="email" name="Email" label="E-mail" type="E-mail"></v-text-field>
                  <v-text-field id="senha" name="senha" label="Senha" type="password"></v-text-field>
=======
                  <v-text-field id="nome" name="Nome" label="Nome" type="text"></v-text-field>
                  <v-text-field id="sob" name="Sobrenome" label="Sobrenome" type="text"></v-text-field>
                  <v-text-field id="email" name="Email" label="E-mail" type="E-mail"></v-text-field>
                  <v-text-field id="senha" name="password" label="Senha" type="password"></v-text-field>
                  <v-text-field id="senha" name="password" label="Confirme a senha" type="password"></v-text-field>
>>>>>>> ae5222bfe37c3381cf351b272c3bef5e5719fa55
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
<<<<<<< HEAD
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
=======
                <v-btn color="primary" @click="pedro()">Cadastrar</v-btn>
                
              </v-card-actions>
            </v-card>
          </v-flex>
    </v-layout>
</template>
<script>
  var nome = document.getElementById("nome");
  var sob = document.getElementById("nome");
  var email = document.getElementById("nome");
  var senha = document.getElementById("nome");

  function pedro() {
    localStorage.setItem('nome', nome);
  }
   var pedro = localStorage.getItem('nome');
   alert(pedro);

>>>>>>> ae5222bfe37c3381cf351b272c3bef5e5719fa55
</script>
