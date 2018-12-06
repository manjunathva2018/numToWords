$(document).ready(function(){
    var input=prompt("Enter a number upto 5 digits");
    //var input=$('#digits').val();
    var digits=Number(input);
    var digitToChar=digits.toString(); 
    console.log(typeof(digits));
    console.log("input=",digits);
    
    function numToWords(digits){
        var pos0=['zero','one','two','three','four','five','six','seven','eight','nine'];
        var pos1=['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
        var pos=['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
        var pos2=['one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
        var pos3=['one thousand','two thousand','three thousand','four thousand','five thousand','six thousand','seven thousand','eight thousand','nine thousand'];
    
             if(digits<=9){
                var first=Number(digitToChar.charAt(0));
                 return pos0[first];
             }
             else if(digits===10 || digits===20 || digits===30 || digits===40 || digits===50 || digits===60 || digits===70 || digits===80 || digits===90){
                var first=Number(digitToChar.charAt(0));
                return pos[first-1];
             }
         else if(digits>=11 && digits<=19){
             var first=Number(digitToChar.charAt(0));
             var second=Number(digitToChar.charAt(1));
                return pos1[second-1];
         }
         else if(digits>20 && digits<=99){
            var first=Number(digitToChar.charAt(0));
            var second=Number(digitToChar.charAt(1));
                 return pos[first-1]+" "+pos0[second];
         }
         else if(digits===100 || digits===200 || digits===300 || digits===400 || digits===500 || digits===600 || digits===700 || digits==800 ||digits===900){
            var third=Number(digitToChar.charAt(0));
            return pos2[third-1];
        }
         else if(digits>99 && digits<=999){
            var first=Number(digitToChar.charAt(0));
            var second=Number(digitToChar.charAt(1));
            var third=Number(digitToChar.charAt(2));

            if(third === 0){
                return pos0[first]+" hundred "+pos[second-1];
            }else if(digits>=111 && digits<=119){
                 return pos0[first]+ " hundred and "+pos1[third-1];
            }else if(second === 0){
                return pos0[first]+" hundred and "+pos0[third];
            }
            else{
                return pos0[first]+" hundred "+pos[second-1]+" "+pos0[third];
            }
         }
         else if(digits===1000 || digits===2000 || digits===3000 || digits===4000 || digits===5000 || digits===6000 || digits===7000 || digits==8000 ||digits===9000){
            var third=Number(digitToChar.charAt(0));
            return pos3[third-1];
        }
         else if(digits>999 && digits<=9999){
            var first=Number(digitToChar.charAt(0));
            var second=Number(digitToChar.charAt(1));
            var third=Number(digitToChar.charAt(2));
            var four=Number(digitToChar.charAt(3))

            if(four === 0 && second === 0){
                return pos0[first]+" thousand "+pos[third-1];
            }else if(digits>=1011 && digits<=1019){
                 return pos0[first]+ " thousand and "+pos1[four-1];
                 
            }else if(second === 0 && third === 0){
                return pos0[first]+" thousand and "+pos0[four];
            
            }else if(second === 0){
                 return pos0[first]+" thousand and "+pos[third-1]+" "+pos0[four];
            }
            else if(third === 1){
                return pos0[first]+" thousand and "+pos0[second]+" hundred and "+pos1[four-1];
            }
            else{
                return pos0[first]+" thousand and "+pos0[second]+" hundred and "+pos[third-1]+" "+pos0[four];
            }
         } 
         else if(digits===10000 || digits===20000 || digits===30000 || digits===40000 || digits===50000 || digits===60000 || digits===70000 || digits==80000 ||digits===90000){
            var first=Number(digitToChar.charAt(0));
            return pos[first-1]+ " thousand";
        }
        else if(digits>10000 && digits<=10999){
            var first=Number(digitToChar.charAt(0));
            var second=Number(digitToChar.charAt(1));
            var third=Number(digitToChar.charAt(2));
            var four=Number(digitToChar.charAt(3));
            var five=Number(digitToChar.charAt(4));

        }
        else if(digits>=11000 && digits<=19999){
            var first=Number(digitToChar.charAt(0));
            var second=Number(digitToChar.charAt(1));
            var third=Number(digitToChar.charAt(2));
            var four=Number(digitToChar.charAt(3));
            var five=Number(digitToChar.charAt(4));
        }
         else{
              return numToWords(digits);
            }
       
    }

    var nos=numToWords(digits);
    //var filterString=nos.replace("undefined","");
    $('#output').text(nos);
    console.log(nos);

})