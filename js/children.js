let button1 = document.getElementsByClassName("icon1") ,
    ph1 = document.getElementsByClassName("photo1"),
    body = document.getElementById("y"),
    container = document.getElementById("container"),
    first = document.getElementById("first"),
    copy,
    show = document.getElementById("show"),
    scrol;



    
    for( let i = 0 ; i < button1.length ; i++ ){


        button1[i].onclick = function( ){

            copy = ph1[i].childNodes[0].cloneNode(true);
            scrol = document.documentElement.scrollTop;

            show.style.width = "80%";
            show.style.height = "700px";
            show.appendChild(copy);
            show.style.margin = "auto"
            show.style.padding = "14px"
            container.style.width = "0";
            container.style.height = "0";
            container.style.visibility = "hidden";
            first.style.width = "0";
            first.style.height = "0";
            first.style.overflow = "hidden";

            
            console.log(scrol)
            
            }

        
        
            show.onclick = function(){
            
                show.style.width = "0px";
                show.style.height = "0"; 
                show.style.padding = "0" ;
                container.style.width = "100%";
                container.style.height = "10600px";
                container.style.visibility = "visible";
                first.style.width = "100%";
                first.style.height = "80px";
                button1[i].style.visibility = "visible";
                button1[i].style.opacity = "1";
                document.documentElement.scrollBy(0 ,scrol+600);
                
        
                copy.remove();
            
            }
        
        
        

    }






