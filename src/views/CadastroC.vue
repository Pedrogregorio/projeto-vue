<template>
  <div>
  <v-layout justify-center>
    <v-flex  
      text-xs-center
       xs10 sm6 m6 md5
       id="cor">
      <h1>Paaso a passo de como publicar um imovel</h1><br>
      <h1 class="hidden-md-and-down">=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</h1>
      <h3><li>Passo 1°</li></h3><br>
      Primeiro você deve clicar no botao abaixo escrito
      <b>cadastrar</b> 
      <h3><li>Passo 2°</li></h3>
      <h3><li>Passo 3°</li></h3>
      <h3><li>Passo 4°</li></h3>
    </v-flex>
  </v-layout>
        <v-layout justify-center>
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
                      <v-text-field label="Email*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Password*" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Age*"
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
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
        </v-dialog>
        </v-layout>
      </div>
      </template>
      <style>
        #cor{
          background: rgba(21,101,192,0.46);
background: -moz-radial-gradient(center, ellipse cover, rgba(21,101,192,0.46) 0%, rgba(21,101,192,0.45) 16%, rgba(21,101,192,0.43) 42%, rgba(21,101,192,0.43) 51%, rgba(21,101,192,0.42) 71%, rgba(21,101,192,0.4) 100%);
background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(21,101,192,0.46)), color-stop(16%, rgba(21,101,192,0.45)), color-stop(42%, rgba(21,101,192,0.43)), color-stop(51%, rgba(21,101,192,0.43)), color-stop(71%, rgba(21,101,192,0.42)), color-stop(100%, rgba(21,101,192,0.4)));
background: -webkit-radial-gradient(center, ellipse cover, rgba(21,101,192,0.46) 0%, rgba(21,101,192,0.45) 16%, rgba(21,101,192,0.43) 42%, rgba(21,101,192,0.43) 51%, rgba(21,101,192,0.42) 71%, rgba(21,101,192,0.4) 100%);
background: -o-radial-gradient(center, ellipse cover, rgba(21,101,192,0.46) 0%, rgba(21,101,192,0.45) 16%, rgba(21,101,192,0.43) 42%, rgba(21,101,192,0.43) 51%, rgba(21,101,192,0.42) 71%, rgba(21,101,192,0.4) 100%);
background: -ms-radial-gradient(center, ellipse cover, rgba(21,101,192,0.46) 0%, rgba(21,101,192,0.45) 16%, rgba(21,101,192,0.43) 42%, rgba(21,101,192,0.43) 51%, rgba(21,101,192,0.42) 71%, rgba(21,101,192,0.4) 100%);
background: radial-gradient(ellipse at center, rgba(21,101,192,0.46) 0%, rgba(21,101,192,0.45) 16%, rgba(21,101,192,0.43) 42%, rgba(21,101,192,0.43) 51%, rgba(21,101,192,0.42) 71%, rgba(21,101,192,0.4) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1565c0', endColorstr='#1565c0', GradientType=1 );
        }
      </style>
      
<script>
        export default {
          data: () => ({
            dialog: false
          })
        }
      </script>