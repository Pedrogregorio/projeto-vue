<template>
    <v-layout align-center justify-center fill-height >
	    <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Faça Seu Login</v-toolbar-title>
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
                  <v-text-field prepend-icon="person" name="Email" label="E-mail" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
	</v-layout>
</template>
<script>
	export default {
    data(){
      return{
				esconder: false,
				login: false
      }
    } 
  }

</script>
<style>
	#p{
		background: rgba(0,0,0,0.7);
		background: -moz-linear-gradient(left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 47%, rgba(0,0,0,0.7) 70%);
		background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0,0,0,0.7)), color-stop(47%, rgba(0,0,0,0.7)), color-stop(70%, rgba(0,0,0,0.7)));
		background: -webkit-linear-gradient(left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 47%, rgba(0,0,0,0.7) 70%);
		background: -o-linear-gradient(left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 47%, rgba(0,0,0,0.7) 70%);
		background: -ms-linear-gradient(left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 47%, rgba(0,0,0,0.7) 70%);
		background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 47%, rgba(0,0,0,0.7) 70%);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=1 );
		border-radius: 10px;
	}
</style>
