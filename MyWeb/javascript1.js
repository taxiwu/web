function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
  
}


 var curIndex=0;
 //???隔 ?位毫秒
 var timeInterval=5000;
 var arr=new Array();
 arr[0]="images/index_BG1_14.jpg";
 arr[1]="images/index_BG2_14.jpg";
 arr[2]="images/index_BG3_14.jpg";
 arr[3]="images/index_BG4_14.jpg";
 arr[4]="images/index_BG5_14.jpg";
 arr[5]="images/index_BG6_14.jpg";
 arr[6]="images/index_BG7_14.jpg";
 arr[7]="images/index_BG8_14.jpg";
 arr[8]="images/index_BG9_14.jpg";

 setInterval(changeImg,timeInterval);
 function changeImg()
 {
   var obj=document.getElementById("showpic");
    if (curIndex==arr.length-1) 
    {
        curIndex=0;
    }
    else
    {
        curIndex+=1;
    }
    obj.src=arr[curIndex];
	//obj.style.opacity=1;  
    s=0;//?0?始  
	p=0;


 }
