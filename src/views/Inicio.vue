<template>
    <div>
		<v-carousel>
			<v-carousel-item v-for="m in imagens" :key="m.link" :src="m.link">
			</v-carousel-item>
		</v-carousel>	
	</div>
</template>
<script>
export default {
	data(){
		return{
			imagens:[
				{link: "https://www.plantasdecasas.com/wp-content/uploads/2015/10/house_102_fix_800.jpg"},
				{link: "https://www.plantasdecasas.com/wp-content/uploads/2013/10/Fachadas-de-casas-107.jpg"},
				{link: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
				{link: "https://www.plantasdecasas.com/wp-content/uploads/2013/04/102-Plantas-de-Casas-vista-esquerda-800px-1.jpg"},
				
			]
		}
	}
}
</script>

