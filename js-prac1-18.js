/**
 * @author ipu11
 */

var x = window.prompt("なんか数字入れて","");

x = parseInt(x); //xの整数値化

if(!isNaN(x)){
	if(x%2==0)window.alert('偶数っす');
	else window.alert('奇数っす');
	}
else window.alert('数字でないっす');
