

var total=0;
var prevEntry='';
var entry='';
var log =[];
var number1=0;
var number2=0;
var sign=
$(document).ready(function(){
	$('button').click(function(){
		entry = $(this).attr("value");
		if(prevEntry===''&&isNaN(entry)){
			prevEntry='';
			entry='';
		}
			else{
				
			console.log('entry:'+entry);
			console.log('prev: '+prevEntry)

			//if clear (ac, ce)clear all or clear last operation
			if(entry==='ac'||entry==='ce'){
				if(entry==='ac'){
					prevEntry='';
					log=[];
					entry='';
					console.log('entry ac');
				}else if(entry==='ce'){
					console.log('entry ce');
				}
				
			}
			// = operator
			if(entry==='='){
				if(prevEntry===''&log===[]){
					entry='';
				}
				else{
					//=function
				}
					
			}



			//if decimal no repeat per number
			if(entry==='.'&& log.indexOf('.')<0){
				$('#screen').append(entry);
				console.log('now '+entry);
			}else if(entry==='.' && log.indexOf('.')>=0){
				console.log('...');
			}
			

			//if number allow additional numbers
			if(prevEntry==='9'||prevEntry==='8'||prevEntry==='7'||prevEntry==='6'||prevEntry==='5'||prevEntry==='4'||prevEntry==='3'||prevEntry==='2'||prevEntry==='1'||prevEntry==='0'||prevEntry==='.'){
				if(entry!=='.'){
					$('#screen').append(entry);
				}
				
			}else{
				$('#screen').html(entry);
				log=[];
				
			}
			prevEntry=entry;
			log.push(entry);
			console.log('log '+log);
		}
	});
}); //end ready function


// function acClick(){
// 	total = 0;
// 	document.getElementById("screen").value=0;
// 	//window.alert("ac");
// }
// function ceClick(){
// 	//remove last option
// 	//window.alert("ce");
// }
// function divClick(){
// 	//divide
// 	//window.alert("divide");
// }
// function multClick(){
// 	//multiply
// 	//window.alert("multiply");
// }
// function minusClick(){
// 	//minus
// 	//window.alert("minus");
// }
// function plusClick(){
// 	//plus
// 	//window.alert("plus");
// }
// function equalClick(){
// 	//equal
// 	//window.alert("equal");
// }
// function decimalClick(){
// 	//.
// 	//window.alert("decimal");
// }
// function nineClick(){
// 	//9
// 	//window.alert("9");
// }
// function eightClick(){
// 	//8
// 	//window.alert("8");
// }
// function sevenClick(){
// 	//7
// 	//window.alert("7");
// }
// function sixClick(){
// 	//6
// 	//window.alert("6");
// }
// function fiveClick(){
// 	//5
// 	//window.alert("5");
// }
// function fourClick(){
// 	//4
// 	//window.alert("4");
// }
// function threeClick(){
// 	//3
// 	//window.alert("3");
// }
// function twoClick(){
// 	//2
// 	//window.alert("2");
// }
// function oneClick(){
// 	//1
// 	//window.alert("1");
// }
// function zeroClick(){
// 	//0
// 	//window.alert("0");
// }