//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async ()=>{

	let text = document.getElementById("text").value;
	let delay = document.getElementById("delay").value;

	let myPromise = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve (text);
		}, delay)

	}) 
		let text2 = await myPromise;
	document.getElementById("output").textContent = text2;
})