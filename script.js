//your JS code here. If required.
function domLevel(elementId) {
	const element=document.getElementById(elementId);
	let cnt=0;
	while(element){
		cnt++;
		element=element.parentElement
	}
	
}
const getLevel=domLevel('level');
alert(`The level of the element is:${getLevel}`);
