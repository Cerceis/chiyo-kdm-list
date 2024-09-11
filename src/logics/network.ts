import axios from "axios";

const PRODUCTS_URL: string  = "https://api.survivor.tools/products";

export type KDMProduct = {
	id: string,
	title: string,
	state: string,
	image: {
		imageId: string | null,
		alt: string,
		width: number,
		height: number,
		uri: string,
		preview: string | null,
		thumbnailUri: string | null
	},
	type: string,					 // record this	
	currentTags: string[],			 // Not using this
	previousTags: string[]			 // Not using this
}

export const getProducts = async(): Promise<KDMProduct[]> => {
	try{
		const rs = await axios.get(PRODUCTS_URL);
		if(!rs || !rs.data || !rs.data.products) throw "Invalid response format";
		return rs.data.products;
	}catch(err){
		console.log(err);
		return [];
	}
}