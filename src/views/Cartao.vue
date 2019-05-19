<template>
    <v-layout wrap>
        <v-flex xs12 sm4 md3 lg2 class="pa-1" v-for="casa in casas" :key="casa.descricao">
            <v-card>
                <v-img
                    :src="casa.imagem"
                    aspect-ratio="2.75"
                ></v-img>
                <v-card-title>
                    {{casa.descricao}}
                </v-card-title>
                <v-card-text>
                    Tamanho: {{casa.tamanhoC}} construído <br>
                    Terreno: {{casa.tamanhoT}} <br>
                    Valor: {{casa.preco}} <br>
                </v-card-text>
                <v-card-actions>
                    <v-btn block color="info" small>Comprar</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <!--
        <v-flex xs12 sm6 md3 lg2 class="green">
            asdfs
        </v-flex>
        <v-flex xs12 sm6 md3 lg2 class="blue hidden-sm-and-down">
            asdfs
        </v-flex>
        <v-flex xs12 sm6 md3 lg2 class="yellow">
            asdfs
        </v-flex>
        <v-flex xs12 sm6 md3 lg2 class="pink">
            asdfs
        </v-flex>
        <v-flex xs12 sm6 md3 lg2 class="black">
            asdfs
        </v-flex>
        -->
    </v-layout>
    
</template>
<script>
export default {
    data(){
        return{
           casas: [
               {
                   descricao: "Casa Moreninha 1",
                   tamanhoT: "12 x 20",
                   tamanhoC: "50m²",
                   imagem:"https://cdn.vuetifyjs.com/images/cards/desert.jpg",
                   preco: "R$ 70.000,00"
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
