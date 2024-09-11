<template>
	<v-text-field
		hide-details
		density="compact"
		variant="outlined"
		class="ma-3"
		placeholder="Search..."
		v-model="keywordDelay"
	/>
	<div class="check-list-panel-wrapper">
		<div class="check-list-panel">
			<CheckListItem 
				v-for="productInfo in filteredProducts" 
				:product-info = "productInfo" 
			/>
		</div>
	</div>
</template>
 
<script setup lang="ts">
import { onMounted, ref, Ref, computed, watch } from "vue";
import { getProducts, KDMProduct } from "@/logics/network";
import CheckListItem from "@/components/CheckListItem.vue"

const products: Ref<KDMProduct[]> = ref([]);
const keywordDelay: Ref<string> = ref("");
const keyword: Ref<string> = ref("");
let keywordTimeout: any = null

onMounted(async()=>{
	const rs = await getProducts();
	products.value = rs;
})

watch(
	() => keywordDelay.value,
	() => {
		if(keywordTimeout)
			clearTimeout(keywordTimeout)
		keywordTimeout = setTimeout(() => {
			keyword.value = keywordDelay.value
		}, 1000);
	}
)

const filteredProducts = computed(() => {
	const fixedKeyword = keyword.value.toUpperCase();
	return products.value.filter((product) => {
		return product.title.toUpperCase().includes(fixedKeyword);
	})
})
 
</script>
 
<style scoped>
.check-list-panel-wrapper{
	display: grid;
	max-width: 100vw;
	height: 100vh;
	max-height: calc(100vh - 50px - 36px - 24px);
	overflow-x: hidden;
	overflow-y: scroll;
	justify-content: center;
}
.check-list-panel{
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
	gap: 0.5em;
}
 
</style>