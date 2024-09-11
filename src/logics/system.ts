import { Ref, ref, watch } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// The checklist
export const checkList: Ref<{
	[key: string]: {
		painted: boolean,
		owned: boolean
	}
}> = ref({})

dayjs.extend(relativeTime)

export const saving: Ref<boolean> = ref(false);
let lastSaved = dayjs();
export const lastSavedString: Ref<string> = ref(lastSaved.fromNow());
export const notSavedYet: Ref<boolean> = ref(true);

// Time interval
setInterval(() => {
	lastSavedString.value = lastSaved.fromNow();
}, 1000 * 44)

export const save = () => {
	saving.value = true;
	const root = {
	}
	const saveString = JSON.stringify(root);
	localStorage.setItem("chiyoKDMSaveString", saveString);
	lastSaved = dayjs();
	saving.value = false;
	notSavedYet.value = false;
	return saveString;
}

export const load = (inputString?: string) => {
	let saveString = null;
	if(inputString){
		saveString = inputString;
	}else{
		saveString = localStorage.getItem("chiyoKDMSaveString");
	}
	if(!saveString) return;
	const parsedSaveString = JSON.parse(saveString);
}

let saveTimeout: any = null;
const watchedFunc = () => {
	notSavedYet.value = true;
	if(saveTimeout) clearTimeout(saveTimeout);
	saveTimeout = setTimeout(() => {
		save();
	}, 5000)
}

/*
	Product caching to prevent exessive fetch.
	Only fetch if there's no data or older than
	5 minutes TODO:
*/


