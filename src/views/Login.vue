<template>
    <v-layout align-center justify-center fill-height >
	    <v-flex  xs10 sm5 md4 lg3 justify-center class="pa-3" id="p">
        <v-text-field
            label="E-mail"
            solo
				></v-text-field>
				<v-text-field
            label="Senha"
            solo
        ></v-text-field>
				<v-btn 
						color="grey darken-3 white--text"				
						block
						justify-center
					>
						Login
				</v-btn>
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
