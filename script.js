//your JS code here. If required.
document.getElementById("button").addEventListener("click", async ()=>{

	let text = document.getElementById("text").value;
	let delay = document.getElementById("delay").value;

	if(text&&delay){
		let myPromise = new Promise((resolve, reject)=>{
			sertTimeout(()=>{
				resolve(text);
			},delay)
		})

		let text2 = await myPromise;
		if(text2){ 
			document.getElementById("output").textContent = text2;	
		}
	}
	
	
})