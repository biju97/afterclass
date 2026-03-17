/**
 * 
 */
document.addEventListener("DOMContentLoaded",()=>{
	const fetchBtn =document.getElementById("fetch-btn");
	const resultArea = document.querySelector("#result");
	fetchBtn.addEventListener("click",()=>{
	/*	1. 비동기 요청 전송 "/hw01/worldtime/json"
		2. json 응답 수신 
		3.json 으로 부터 html을 생성하고 DOM 을 완성함*/
		fetch("../../../hw01/worldtime/json")
		.then(resp=>resp.json())
		.then(({now})=>{
			resultArea.innerHTML=`<h1>${now}<h1>`;
		});
		
	});
});