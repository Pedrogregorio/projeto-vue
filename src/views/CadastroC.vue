<template>
<<<<<<< HEAD
  <div class="Jumbotron">
  <v-layout justify-center>
    <v-flex  
       xs10 sm6 m6 md5
       class="cor">
      <h2 class="bar">Paso a passo de como publicar um imóvel</h2><br>
      
      <!--<h1 class="hidden-md-and-down">=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</h1>-->
      <div class="cartao_passo">
      <h3><li>Passo 1°</li></h3>
            Primeiro você deve clicar no botao abaixo escrito
      <b>cadastrar</b> 
      <h3><li>Passo 2°</li></h3>
            Logo em seguida, você ira preencher o formulario
      <h3><li>Passo 3°</li></h3>
      <h3><li>Passo 4°</li></h3>
      </div>
    </v-flex>
  </v-layout>
        <v-layout justify-center>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">Cadastrar</v-btn>
            </template>
            <v-card>
              <v-card-title class="bar">
                <span class="headline" >Preencrer Formulario</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="Nome" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="Sobrenome" ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        label="Telefone"
                        type="number"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Email" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Senha" type="password" required></v-text-field>
                    </v-flex>
                     <v-flex xs12>
                      <v-text-field label="Comfirme sua senha" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        :items="[ '18 - 29', '30 - 54', '60+']"
                        label="Idade (+18)"
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-autocomplete
                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                        label="Interests"
                        multiple
                      ></v-autocomplete>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small>Insira informações valida acima, obrigado.</small>
              </v-card-text>
              <v-card-actions class="bar">
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
=======
  <v-layout align-center justify-center row fill-height>
    <v-card justify-center class="pa-4">  
      <v-card-title primary-title >
        <div>
          <div class="headline">PASSO A PASSO DE COMO PUBLICAR UM IMOVEL</div>
        </div>
      </v-card-title>
        <v-spacer></v-spacer>
        <v-divider></v-divider><br>
          <h3><li>Passo 1°</li></h3><br>
             Primeiro você deve clicar no botao abaixo escrito
          <b>cadastrar</b><br> <br>
          <h3><li>Passo 2°</li></h3><br>
             Depois ira preencher um formulario com os seus dados  <br><br>
          <h3><li>Passo 3°</li></h3><br>
             clicar em publicar <b>se os dados estiveren corretos</b> <br><br>
          <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Cadastrar</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Preencrer Formulario</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Nome" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Bairro" ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      label="Telefone"
                      type="number"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Password*" type="password" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      :items="['18-29', '30-54', '54+']"
                      label="Idade"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-autocomplete
                      :items="['Casa', 'Apartamento', 'Terreno', 'Fazenda', 'Chacara']"
                      label="Imovel"
                      multiple
                    ></v-autocomplete>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                  <v-text-field label="Preço" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>Voce so pode publicar 3 imoveis por mês</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
>>>>>>> 52e354f1b8b421ed5e8e94148c815fd7e5fd1612
        </v-dialog>
    </v-card>
  </v-layout>
      </template>

<!-- Style -->
      <style>
<<<<<<< HEAD

            @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');


            .cor{

              background: #0288d1;
              -webkit-box-shadow: 0px 0px 8px -1px rgba(0,0,0,0.75);
              -moz-box-shadow: 0px 0px 8px -1px rgba(0,0,0,0.75);
              box-shadow: 0px 0px 8px -1px rgba(0,0,0,0.75);
              font-family: 'Montserrat', sans-serif;
            }

            .Jumbotron {
              padding: 15px;
              margin-top: 1rem;
              

            }

            .bar {

              background-color: whitesmoke;
              padding: 15px;
              text-align: center;
              

            }

            .cartao_passo {
              font-size: 12px;
              padding: 2%;
              padding-left: 1.5rem;
              text-align: left;
              color: white;

=======
        #cor{
          background: rgba(21,101,192,0.46);
          background: -moz-radial-gradient(center, ellipse cover, rgba(21,101,192,0.46) 0%, rgba(21,101,192,0.45) 16%, rgba(21,101,192,0.43) 42%, rgba(21,101,192,0.43) 51%, rgba(21,101,192,0.42) 71%, rgba(21,101,192,0.4) 100%);
          background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(21,101,192,0.46)), color-stop(16%, rgba(21,101,192,0.45)), color-stop(42%, rgba(21,101,192,0.43)), color-stop(51%, rgba(21,101,192,0.43)), color-stop(71%, rgba(21,101,192,0.42)), color-stop(100%, rgba(21,101,192,0.4)));
          background: -webkit-radial-gradient(center, ellipse cover, rgba(21,101,192,0.46) 0%, rgba(21,101,192,0.45) 16%, rgba(21,101,192,0.43) 42%, rgba(21,101,192,0.43) 51%, rgba(21,101,192,0.42) 71%, rgba(21,101,192,0.4) 100%);
          background: -o-radial-gradient(center, ellipse cover, rgba(21,101,192,0.46) 0%, rgba(21,101,192,0.45) 16%, rgba(21,101,192,0.43) 42%, rgba(21,101,192,0.43) 51%, rgba(21,101,192,0.42) 71%, rgba(21,101,192,0.4) 100%);
          background: -ms-radial-gradient(center, ellipse cover, rgba(21,101,192,0.46) 0%, rgba(21,101,192,0.45) 16%, rgba(21,101,192,0.43) 42%, rgba(21,101,192,0.43) 51%, rgba(21,101,192,0.42) 71%, rgba(21,101,192,0.4) 100%);
          background: radial-gradient(ellipse at center, rgba(21,101,192,0.46) 0%, rgba(21,101,192,0.45) 16%, rgba(21,101,192,0.43) 42%, rgba(21,101,192,0.43) 51%, rgba(21,101,192,0.42) 71%, rgba(21,101,192,0.4) 100%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1565c0', endColorstr='#1565c0', GradientType=1 );
>>>>>>> 52e354f1b8b421ed5e8e94148c815fd7e5fd1612
        }
      </style>
      


<script>
        export default {
          data: () => ({
            dialog: false,
            show: false
          })
        }
      </script>