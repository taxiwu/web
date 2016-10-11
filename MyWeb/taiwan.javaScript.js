var isCenter = false;
var button = new Array();	// 未選擇按鈕
var _button = new Array();	// 選取按鈕
var lock = new Array();
var _block1 = new Array();
var _block2 = new Array();
var _block3 = new Array();
var _block4 = new Array();
var _blockB1 = new Array();
var _blockB2 = new Array();
var _blockB3 = new Array();

var subBlock = new Array();
var subButton = new Array(); // 選擇前
var _subButton = new Array(); // 選擇後
var subLock = new Array();

_button[0] = "images/taiwan_bottom_10.jpg";
_button[1] = "images/taiwan_bottom_11.jpg";
_button[2] = "images/taiwan_bottom_12.jpg";
_button[3] = "images/taiwan_bottom_13.jpg";
_button[4] = "images/taiwan_bottom_14.jpg";

button[0] = "images/taiwan_14.jpg";
button[1] = "images/taiwan_15.jpg";
button[2] = "images/taiwan_16.jpg";
button[3] = "images/taiwan_17.jpg";
button[4] = "images/taiwan_18.jpg";

lock[0] = 1;
lock[1] = 0;
lock[2] = 0;
lock[3] = 0;
lock[4] = 0;

subLock[0] = 0;
subLock[1] = 0;
subLock[2] = 0;

_block1[0] = "images/taiwan_21.jpg";
_block1[1] = "images/taiwa_8day_21.jpg"
_block1[2] = "images/taiwan_7day-1_21.jpg";
_block1[3] = "images/taiwan_7day-2_21.jpg";
_block1[4] = "images/taiwan_center_21.jpg";


_block2[0] = "images/taiwan_22.jpg";
_block2[1] = "images/taiwa_8day_22.jpg"
_block2[2] = "images/taiwan_7day-1_22.jpg";
_block2[3] = "images/taiwan_7day-2_22.jpg";
_block2[4] = "images/taiwan_center_22.jpg";


_block3[0] = "images/taiwan_23.jpg";
_block3[1] = "images/taiwa_8day_23.jpg"
_block3[2] = "images/taiwan_7day-1_23.jpg";
_block3[3] = "images/taiwan_7day-2_23.jpg";
_block3[4] = "images/taiwan_center_23.jpg";


_block4[0] = "images/taiwan_26.jpg";
_block4[1] = "images/taiwa_8day_26.jpg"
_block4[2] = "images/taiwan_7day-1_26.jpg";
_block4[3] = "images/taiwan_7day-2_26.jpg";
_block4[4] = "images/taiwan_center_26.jpg";

_blockB1[0] = "images/taiwan_25.jpg";
_blockB1[1] = "images/taiwa_8day_25.jpg"
_blockB1[2] = "images/taiwan_7day-1_25.jpg";
_blockB1[3] = "images/taiwan_7day-2_25.jpg";
_blockB1[4] = "images/taiwan_center_25.jpg";

_blockB2[0] = "images/taiwan_27.jpg";
_blockB2[1] = "images/taiwa_8day_27.jpg"
_blockB2[2] = "images/taiwan_7day-1_27.jpg";
_blockB2[3] = "images/taiwan_7day-2_27.jpg";
_blockB2[4] = "images/taiwan_center_27.jpg";

_blockB3[0] = "images/taiwan_28.jpg"
_blockB3[1] = "images/taiwa_8day_28.jpg"
_blockB3[2] = "images/taiwan_7day-1_28.jpg"
_blockB3[3] = "images/taiwan_7day-2_28.jpg";
_blockB3[4] = "images/taiwan_center_28.jpg"

function pagechange(id){
	var i;
	document.getElementById("b1").src=button[0];
	document.getElementById("b2").src=button[1];
	document.getElementById("b3").src=button[2];
	document.getElementById("b4").src=button[3];
	document.getElementById("b5").src=button[4];
	lock[0] = 0;
	lock[1] = 0;
	lock[2] = 0;
	lock[3] = 0;
	lock[4] = 0;
	isCenter = false;
	
	if (id == 'b1')
	{
		i = 0;
		lock[i] = 1;
		document.getElementById(id).src=_button[i];
		
		document.getElementById("block1").src=_block1[i];
		document.getElementById("block2").src=_block2[i];
		document.getElementById("block3").src=_block3[i];
		document.getElementById("block4").src=_block4[i];
		document.getElementById("blockB1").src=_blockB1[i];
		document.getElementById("blockB2").src=_blockB2[i];
		document.getElementById("blockB3").src=_blockB3[i];
		
	}	
	if (id == 'b2')
	{
		i = 1;
		lock[i] = 1;
		document.getElementById(id).src=_button[i];

		document.getElementById("block1").src=_block1[i];
		document.getElementById("block2").src=_block2[i];
		document.getElementById("block3").src=_block3[i];
		document.getElementById("block4").src=_block4[i];
		document.getElementById("blockB1").src=_blockB1[i];
		document.getElementById("blockB2").src=_blockB2[i];
		document.getElementById("blockB3").src=_blockB3[i];
	}	
	if (id == 'b3')
	{
		i = 2;
		lock[i] = 1;
		document.getElementById(id).src=_button[i];

		document.getElementById("block1").src=_block1[i];
		document.getElementById("block2").src=_block2[i];
		document.getElementById("block3").src=_block3[i];
		document.getElementById("block4").src=_block4[i];
		document.getElementById("blockB1").src=_blockB1[i];
		document.getElementById("blockB2").src=_blockB2[i];
		document.getElementById("blockB3").src=_blockB3[i];
	}
	if (id == 'b4')
	{
		i = 3;
		lock[i] = 1;
		document.getElementById(id).src=_button[i];

		document.getElementById("block1").src=_block1[i];
		document.getElementById("block2").src=_block2[i];
		document.getElementById("block3").src=_block3[i];
		document.getElementById("block4").src=_block4[i];
		document.getElementById("blockB1").src=_blockB1[i];
		document.getElementById("blockB2").src=_blockB2[i];
		document.getElementById("blockB3").src=_blockB3[i];
	}
	if (id == 'b5')
	{
		i = 4;
		lock[i] = 1;
		document.getElementById(id).src=_button[i];

		document.getElementById("block1").src=_block1[i];
		document.getElementById("block2").src=_block2[i];
		document.getElementById("block3").src=_block3[i];
		document.getElementById("block4").src=_block4[i];
		document.getElementById("blockB1").src=_blockB1[i];
		document.getElementById("blockB2").src=_blockB2[i];
		document.getElementById("blockB3").src=_blockB3[i];
		
		isCenter = true;
		subPageChange('blockB1');
	}
}
function mouseOver(id){
	
	/*document.getElementById("b1").src=button[0];
	document.getElementById("b2").src=button[1];
	document.getElementById("b3").src=button[2];
	document.getElementById("b4").src=button[3];
	document.getElementById("b5").src=button[4];*/
	if (isCenter)
	{
		if (id == 'blockB1')
		{
			document.getElementById(id).src=_subButton[0];
		}
		if (id == 'blockB2')
		{
			document.getElementById(id).src=_subButton[1];
		}
		if (id == 'blockB3')
		{
			document.getElementById(id).src=_subButton[2];
		}
	}
	
	if (id == 'b1')
	{
		document.getElementById(id).src=_button[0];
	}
	if (id == 'b2')
	{
		document.getElementById(id).src=_button[1];
	}
	if (id == 'b3')
	{
		document.getElementById(id).src=_button[2];
	}
	if (id == 'b4')
	{
		document.getElementById(id).src=_button[3];
	}
	if (id == 'b5')
	{
		document.getElementById(id).src=_button[4];
	}
}
function mouseOut(id){
	
	if (isCenter)
	{
		if (id == 'blockB1' && subLock[0] == 0)
		{
			document.getElementById(id).src=subButton[0];
		}
		if (id == 'blockB2'&& subLock[1] == 0)
		{
			document.getElementById(id).src=subButton[1];
		}
		if (id == 'blockB3'&& subLock[2] == 0)
		{
			document.getElementById(id).src=subButton[2];
		}
	}
	
	if (id == 'b1' && lock[0] == 0)
	{
		document.getElementById(id).src=button[0];
	}
	if (id == 'b2'&& lock[1] == 0)
	{
		document.getElementById(id).src=button[1];
	}
	if (id == 'b3'&& lock[2] == 0)
	{
		document.getElementById(id).src=button[2];
	}
	if (id == 'b4'&& lock[3] == 0)
	{
		document.getElementById(id).src=button[3];
	}
	if (id == 'b5'&& lock[4] == 0)
	{
		document.getElementById(id).src=button[4];
	}
}


subBlock[0] = "images/taiwan_north_23.jpg";
subBlock[1] = "images/taiwan_center_23.jpg";
subBlock[2] = "images/taiwan_down_23.jpg";

subButton[0] = "images/taiwan_center_25.jpg";
subButton[1] = "images/taiwan_center_27.jpg";
subButton[2] = "images/taiwan_center_28.jpg";

_subButton[0] = "images/taiwan_down_25.jpg";
_subButton[1] = "images/taiwan_down_27.jpg";
_subButton[2] = "images/taiwan_down_28.jpg";

function subPageChange(id){
	if (isCenter)
	{	
		var i = 0;
		
		subLock[0] = 0;
		subLock[1] = 0;
		subLock[2] = 0;
				
		document.getElementById("blockB1").src=subButton[0];
		document.getElementById("blockB2").src=subButton[1];
		document.getElementById("blockB3").src=subButton[2];	
		
		if (id == 'blockB1')
		{
			i = 0;
			subLock[i] = 1;
			document.getElementById("blockB1").src=_subButton[i];
			document.getElementById("block3").src=subBlock[i];
		}
		if (id == 'blockB2')
		{
			i = 1;
			subLock[i] = 1;
			document.getElementById("blockB2").src=_subButton[i];
			document.getElementById("block3").src=subBlock[i];
		}
		if (id == 'blockB3')
		{
			i = 2;
			subLock[i] = 1;
			document.getElementById("blockB3").src=_subButton[i];
			document.getElementById("block3").src=subBlock[i];
		}
	}
}
