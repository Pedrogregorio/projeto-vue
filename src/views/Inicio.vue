<template>
    <div>
		<v-carousel>
			<v-carousel-item v-for="m in imagens" :key="m.link" :src="m.link">
			</v-carousel-item>
		</v-carousel>	
		 <v-flex xs12 sm3 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
	</div>
</template>
<script>
export default {
	data(){
		return{
			imagens:[
				{link: "https://www.plantasdecasas.com/wp-content/uploads/2015/10/house_102_fix_800.jpg"},
				{link: "https://www.plantasdecasas.com/wp-content/uploads/2013/10/Fachadas-de-casas-107.jpg"},
				{link: "https://www.plantasdecasas.com/wp-content/uploads/2014/08/304-A-modelos-de-casas-9001.jpg"},
				{link: "https://www.plantasdecasas.com/wp-content/uploads/2013/04/102-Plantas-de-Casas-vista-esquerda-800px-1.jpg"},
				
			]
		}
	}
}
</script>



