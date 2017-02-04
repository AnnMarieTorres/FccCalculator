var entry=[''];
var total;
var operators1=['*','/','+','-'];
var operators2=['.'];
var nums=[0,1,2,3,4,5,6,7,8,9];

function getValue(input){
	if(operators2.includes(entry[entry.length-1])===true && input==='.'){
		console.log('duplicate "."');
	}else if(entry.length===1 && operators1.includes(input)===false){
		entry.push(input);
	}else if(operators1.includes(entry[entry.length-1])===false&&entry.length>1){
		entry.push(input);
	}
	else if(nums.includes(Number(input))){
		entry.push(input);
	}
	update();
}

function update(){
	total=entry.join('');
	$('#screen').html(total);
	console.log(entry);
}

function getTotal(){
	total = entry.join('');
	$("#screen").html(eval(total));
}

$(document).ready(function(){
	$('button').click(function(){
		if($(this).attr("value")==='ac'){
			entry=[''];
			update();
		}else if($(this).attr("value")==='ce'){
			entry.pop();
			update();
		}else if($(this).attr("value")==="="){
			getTotal();
		}else{
			if(entry[entry.length-1].indexOf("*","/","+","-",".")===-1){
				getValue($(this).attr("value"));
			}else{
				getValue($(this).attr("value"))
			}
		}

		
	});
}); //end ready function


