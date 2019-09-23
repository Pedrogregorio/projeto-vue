<template>
  <v-layout align-center justify-center row fill-height>
    <v-card justify-center class="pa-4 ">  
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
                      prefix="+55"
                      type="tel"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Senha*" type="password" required></v-text-field>
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
                  <v-text-field 
                  label="Preço" 
                  required 
                  type="number"
                  maxlength="13" 
                  prefix="R$"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>Voce so pode publicar 3 imoveis por mês</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog = false">Cancelar
              </v-btn>

              <v-dialog v-model="dialogg" persistent max-width="290">
                <template v-slot:activator="{ on }">
                  <v-btn color="blue darken-1" flat v-on="on">Salvar</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">Tudo Certo?</v-card-title>
                  <v-card-text>Seus dados estao corretos?</v-card-text>
                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="blue darken-1" flat text @click="dialogg = false">Nao</v-btn>
                    <v-btn color="blue darken-1" flat text @click="dialog = false">Sim</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-card>
    <v-alert
      type="success"
    >
      I'm a dense alert with the <strong>text</strong> prop and a <strong>type</strong> of success
    </v-alert>
  </v-layout>
  
</template>
<!-- Style -->
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
            dialog: false,
            dialogg: false,
            show: false, 
          })
        }
</script>
