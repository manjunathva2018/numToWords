$(document).ready(function(){
    var digits=prompt("Enter a number upto 5 digits");
    console.log(typeof(digits));
    var len= digits.length;
    var first=digits.charAt(0);
    var second=digits.charAt(1);
    var third=digits.charAt(2);
    var four=digits.charAt(3);
    var five=digits.charAt(4);
    var ltTwenty;
    var gtTwenty;
    var ltTen=false;

   if(len===2){
       var twoDigit=first+second;
       var compare=Number(twoDigit);
       if(compare<=20){
       ltTwenty=true;
       gtTwenty=false;
       }
       else{
       gtTwenty=true;
       ltTwenty=false;
       }
       if(compare<=10){
           ltTen=true;
       }
   }
   if(len==1){
        ltTen=true;
   }

    console.log(first);
    console.log(second);
    var pos0=['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
    var pos1=['evelen','tweleve','thirteen','fourteen','fiveteen','sixteen','seventeen','eighteen','nineteen','twenty'];
    var pos=['twenty','thirty','fourty','fifity','sixity','seventy','eighty','ninty'];

    var pos2=['one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
    var pos3=['one thousand','two thousand','three thousand','four thousand','five thousand','six thousand','seven thousand','eight thousand','nine thousand'];
    var pos4=['one lakh','two lakh','three lakh','four lakh','five lakh','six lakh','seven lakh','eight lakh','nine lakh'];

    var result,result1="",result2="";

   
        switch(Number(first)){
            case 0: result1=pos0[0];
            break;
            case 1: result1=pos0[1];
            break;
            case 2: result1=pos0[2];
            break;
            case 3: result1=pos0[3];
            break;
            case 4: result1=pos0[4];
            break;
            case 5: result1=pos0[5];
            break;
            case 6: result1=pos0[6];
            break;
            case 7: result1=pos0[7];
            break;
            case 8: result1=pos0[8];
            break;
            case 9: result1=pos0[9];
            break;
            case 10: result1=pos0[10];
            break;
            default:result1="";console.log("No digits")
}
    
    console.log("somfjeuofjuedujh",first+second);
    if(ltTwenty===true && gtTwenty===false){
        switch(Number(first+second)){
            case 11: result2=pos1[0];
             break;
             case 12: result2=pos1[1];
             break;
             case 13: result2=pos1[2];
             break;
             case 14: result2=pos1[3];
             break;
             case 15: result2=pos1[4];
             break;
             case 16: result2=pos1[5];
             break;
             case 17: result2=pos1[6];
             break;
             case 18: result2=pos1[7];
             break;
             case 19: result2=pos1[8];
             break;
             case 20: result2=pos1[9];
             break;
             default:result2="";console.log("No digits")
    }
    }
    else if(ltTen===false){
        switch(Number(first)){
            case 2: result2=pos[0];
             break;
             case 3: result2=pos[1];
             break;
             case 4: result2=pos[2];
             break;
             case 5: result2=pos[3];
             break;
             case 6: result2=pos[4];
             break;
             case 7: result2=pos[5];
             break;
             case 8: result2=pos[6];
             break;
             case 9: result2=pos[7];
             break;
             default:result2="";console.log("No digits")
    }
    switch(Number(second)){
        case 0: result1=pos0[0];
        break;
        case 1: result1=pos0[1];
        break;
        case 2: result1=pos0[2];
        break;
        case 3: result1=pos0[3];
        break;
        case 4: result1=pos0[4];
        break;
        case 5: result1=pos0[5];
        break;
        case 6: result1=pos0[6];
        break;
        case 7: result1=pos0[7];
        break;
        case 8: result1=pos0[8];
        break;
        case 9: result1=pos0[9];
        break;
        case 10: result1=pos0[10];
        break;
        default:result1="";console.log("No digits")
}
    }
   if(len===1){
       result=result1;
       console.log(result);
   }
   else if(len==2){
       if(gtTwenty===true){
        result=result2+" "+result1;
        console.log(result);
       }
       else{
           result=result2;
           console.log(result);
       }
   }

});