
var aos = ["mom", "malayalam", "html", "css", "js", "dad",];
var aos2 = []


for (i = 0; i < aos.length; i++) {
    // console.log(aos[i])
    var x = aos[i]
    var aos1 = "";
    for(j=x.length-1;j>=0;j--){
//    console.log(x[j])
   aos1+= x[j]
    } if(x === aos1){
      aos2.push(x) 

    }
    } console.log(aos2)

