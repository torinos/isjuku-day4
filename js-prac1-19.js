/**
 * @author ipu11
 */

var x = window.prompt('なんか一文字入れて',"");

switch(x){
	case 'A':
		mark='ﾟ▽ﾟ)＜ ◎';
		break;
	case 'B':
		mark='ﾟーﾟ)＜ ○';
		break;
	case 'c':
		mark='ﾟ_ﾟ)＜ △';
		break;
	default:
		mark='ﾟдﾟ)＜ ×';
}
window.alert(mark);