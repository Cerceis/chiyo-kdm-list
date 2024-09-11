import { ref, Ref } from "vue";



export const switchTabHotkeyPrefix: Ref<string> = ref("shiftKey");
export const switchTabHotkey: Ref<string> = ref("KeyS");


export const loadHotkeys = () => {
	const hk = localStorage.getItem("chiyoKDMHotkey");
	if(hk) switchTabHotkey.value = hk;
	const hkp = localStorage.getItem("chiyoKDMHotkeyPrefix");
	if(hkp) switchTabHotkeyPrefix.value = hkp;
}

export const getImgSrc = (name: string) => {
    return new URL(`../assets/images/${name}.png`, import.meta.url).href;
};
