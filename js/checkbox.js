function func()
        {
            var chb = document.getElementsByClassName('chb');
            var card = document.getElementsByClassName('card');
          
            for(var i=0;i<=5;i++){
                card[i].style.display='none';}
                 
            if(chb[0].checked)
            {
              for(var i=0;i<=5;i++){
                card[i].style.display='inline';}
                
            }
            if(!chb[0].checked)
            {
                for(var i=0;i<=5;i++){
                card[i].style.display='none';}
            }
            
            if(chb[1].checked)
            {
                for(var i=6;i<=12;i++){
                card[i].style.display='inline';}
            }
            if(!chb[1].checked)
            {
                for(var i=6;i<=12;i++){
                card[i].style.display='none';}
            }
            
            if(chb[2].checked)
            {
                for(var i=6;i<=8;i++){
                card[i].style.display='inline';}
            }
            if(!chb[2].checked)
            {
                for(var i=6;i<=8;i++){
                card[i].style.display='none';}
            }
            if(chb[3].checked)
            {
                for(var i=9;i<=11;i++){
                card[i].style.display='inline';}
            }
            if(!chb[3].checked)
            {
                for(var i=9;i<=11;i++){
                card[i].style.display='none';}
            }

            if(!chb[0].checked && !chb[1].checked && !chb[2].checked &&  !chb[3].checked ){
                for(var i=0;i<=11;i++){
                card[i].style.display='inline';}
            }
            
        }

     