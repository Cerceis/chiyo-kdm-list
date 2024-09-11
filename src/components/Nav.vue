<template>
	<div class="ma-1 d-flex gap-1 justify-space-between">
 		<KDMImage src="chiyokdm" w="52px" />	

		<div class="d-flex gap-1">
			<v-tooltip text="Support me on Ko-fi">
				<template v-slot:activator="{ props }">
					<v-btn
						@click="openURL('https://ko-fi.com/T6T2W19IM')"
						color="primary" size="32"
						v-bind="props"
					>
						<v-icon>mdi-coffee</v-icon>
					</v-btn>
				</template>
			</v-tooltip>

			<v-divider vertical />
			<v-btn
			@click="save()"
			class="text-caption"
			size="32"
			>
				<template v-if="notSavedYet">
					<v-icon color="red">mdi-content-save</v-icon>
				</template>
				<template v-else-if="saving">
					<v-progress-circular
						color="green"
						indeterminate
						size="24"
					></v-progress-circular>
				</template>
				<template v-else>
					<v-icon color="green">mdi-content-save</v-icon>
				</template>
			</v-btn>
		</div>
	
		<v-dialog v-model="showDialog" persistent>
			<v-sheet class="pa-3">
				<div class="styledRow justify-space-between">
					Save String
					<v-btn
						@click="showDialog = false"
						color="error"
						size="32"
					>
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</div>
				<v-divider class="mt-1" />
				<div class="styledRow justify-space-between my-1">
					Copy this string, and save it somewhere. You can import data by using this string on other computer.
					<div class="d-flex gap-1">
						<v-btn
							@click="importString()"
							color="success"
						>
							Import data from string below
						</v-btn>
						<v-btn
							@click="FromString.copyToClipboard(saveString)"
							color="success"
							size="36"
						>
							<v-icon>mdi-content-copy</v-icon>
						</v-btn>
					</div>
				</div>
				<v-textarea 
					v-model="saveString"
					variant="outlined"
					hide-details
				/>
			</v-sheet>
		</v-dialog>
	</div>
</template>
 
<script setup lang="ts">
import { Ref, ref, onMounted, onUnmounted } from "vue";
import { 

} from "@/logics/global";
import { save, saving, lastSavedString, notSavedYet, load } from "@/logics/system";
import { FromString } from "cerceis-lib";

const openURL = (url: string) => {
    window.open(url, "_blank");
}

const showDialog: Ref<boolean> = ref(false);
const saveString: Ref<string> = ref("");

const initSavedString = (ex: boolean = true) => {
	saveString.value = "";
	if(ex){
		saveString.value = save();
	}
	showDialog.value = true;
}

const importString = () => {
	if(!saveString.value) return;
	load(saveString.value)
	showDialog.value = false;
}




</script>
 
<style scoped>
 
</style>