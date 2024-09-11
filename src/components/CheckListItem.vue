<template>
	<v-card class="mx-3" max-width="425">
		<div 
			:style="{
				height: '200px',
				width: '100%',
				backgroundImage:`url(https://archives.survivor.tools/images/${productInfo.image.uri})`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain'
			}"
		></div>

		<v-card-title>
			{{ productInfo.title }}
		</v-card-title>
		<v-divider />
		<v-card-actions class="justify-space-evenly">
			{{ initCheckListItem(productInfo.id) }}
			<v-checkbox
				hide-details
				density="compact"
				label="Painted"
				color="warning"
				v-model="checkList[productInfo.id].painted"
			/>
			<v-checkbox
				hide-details
				density="compact"
				label="Owned"
				color="warning"
				v-model="checkList[productInfo.id].owned"
			/>
		</v-card-actions>
	</v-card>

</template>

<script setup lang="ts">
import { PropType } from "vue";
import { KDMProduct } from "@/logics/network";
import { checkList } from "@/logics/system";

const props = defineProps({
	productInfo: {
		type: Object as PropType<KDMProduct>,
		required: true
	}
})

const initCheckListItem = (id: string) => {
	if(checkList.value[id]) return;
	checkList.value[id] = {
		painted: false,
		owned: false
	}
}

</script>

<style scoped>
</style>