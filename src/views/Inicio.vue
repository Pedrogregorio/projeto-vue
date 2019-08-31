<template>
    <div>
		<v-carousel>
			<v-carousel-item v-for="m in imagens" :key="m.link" :src="m.link">
                
			</v-carousel-item>
		</v-carousel>	
		
    <v-layout wrap>
        <v-flex xs12 sm4 md3 lg2 class="pa-3" v-for="casa in casas" :key="casa.descricao">
            <v-card>
                <v-img
                    :src="casa.imagem"
                    aspect-ratio="2.75"
                ></v-img>
                <v-card-title>
                    {{casa.descricao}}
                    <span class="title">{{casa.preco}}</span>
                </v-card-title>
                <v-card-text>
                    Tamanho: {{casa.tamanhoC}} construído <br>
                    Terreno: {{casa.tamanhoT}} <br>
                </v-card-text>
                <v-card-actions>
                    <v-btn block color="info" small>Comprar</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
	</div>
</template>
<script>
export default {
	data(){
		return{
            logado: true,
			imagens:[
				{link: "https://www.plantasdecasas.com/wp-content/uploads/2015/10/house_102_fix_800.jpg"},
				{link: "https://www.plantasdecasas.com/wp-content/uploads/2013/10/Fachadas-de-casas-107.jpg"},
				{link: "https://www.plantasdecasas.com/wp-content/uploads/2014/08/304-A-modelos-de-casas-9001.jpg"},
				{link: "https://www.plantasdecasas.com/wp-content/uploads/2013/04/102-Plantas-de-Casas-vista-esquerda-800px-1.jpg"},
				
      ],
      casas: [
               {
                   descricao: "Apartamento Moreninha II",
                   tamanhoT: "40m²",
                   tamanhoC: "50m²",
                   imagem:"https://img.olx.com.br/images/77/771922021689166.jpg",
                   preco: "R$ 100.000,00"
               },
                {
                   descricao: "Apartamento Moreninha II",
                   tamanhoT: "40m²",
                   tamanhoC: "50m²",
                   imagem:"https://img.olx.com.br/images/77/771922021689166.jpg",
                   preco: "R$ 100.000,00"
               },
                {
                   descricao: "Apartamento Moreninha II",
                   tamanhoT: "40m²",
                   tamanhoC: "50m²",
                   imagem:"https://img.olx.com.br/images/77/771922021689166.jpg",
                   preco: "R$ 100.000,00"
               },
                {
                   descricao: "Apartamento Moreninha II",
                   tamanhoT: "40m²",
                   tamanhoC: "50m²",
                   imagem:"https://img.olx.com.br/images/77/771922021689166.jpg",
                   preco: "R$ 100.000,00"
               },
                {
                   descricao: "Apartamento Moreninha II",
                   tamanhoT: "40m²",
                   tamanhoC: "50m²",
                   imagem:"https://img.olx.com.br/images/77/771922021689166.jpg",
                   preco: "R$ 100.000,00"
               },
                {
                   descricao: "Apartamento Moreninha II",
                   tamanhoT: "40m²",
                   tamanhoC: "50m²",
                   imagem:"https://img.olx.com.br/images/77/771922021689166.jpg",
                   preco: "R$ 100.000,00"
               },
                {
                   descricao: "Apartamento Moreninha II",
                   tamanhoT: "40m²",
                   tamanhoC: "50m²",
                   imagem:"https://img.olx.com.br/images/77/771922021689166.jpg",
                   preco: "R$ 100.000,00"
               },
                {
                   descricao: "Apartamento Moreninha II",
                   tamanhoT: "40m²",
                   tamanhoC: "50m²",
                   imagem:"https://img.olx.com.br/images/77/771922021689166.jpg",
                   preco: "R$ 100.000,00"
               },
                {
                   descricao: "Apartamento Moreninha II",
                   tamanhoT: "40m²",
                   tamanhoC: "50m²",
                   imagem:"https://img.olx.com.br/images/77/771922021689166.jpg",
                   preco: "R$ 100.000,00"
               }
           ] 
		}
	}
}
</script>



