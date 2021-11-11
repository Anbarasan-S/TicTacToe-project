let x=false,total1=0,total2=0,is_clicked={"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0};
const playerx=document.getElementById("player1");
const playery=document.getElementById("player2");
const clicked=()=>
{
    const id=event.target.id;
    if(is_clicked[id]===0)
    {
        event.target.innerHTML=x===false?"X":"O";
        is_clicked[id]=event.target.innerHTML;
        x=!x;
        checkWin();
    }
}
const checkWin=()=>
{
    let ptr=1,rplayer1,rplayer2,cplayer1=0,cplayer2=0;

    
    //check each row
    for(let ind1=1;ind1<=3;ind1++)
    {
        rplayer1=0,rplayer2=0;
        for(let ind2=0;ind2<3;ind2++,ptr++)
        {
            if(is_clicked[ptr]==="X")
            {
                if(rplayer2!=0)
                {
                    break;
                }
                rplayer1++;
            }
            else if(is_clicked[ptr]==="O")
            {
                if(rplayer1!=0)
                {
                    break;
                }
                rplayer2++;
            }
            else
            {
                break;
            }
        }
        if(rplayer1==3)
        {
            xwon();
            return 
        }
        else if(rplayer2==3)
        {
            ywon();
            return 
        }
        ptr=(ind1*3)+1;
    }


    //check each column
    ptr=1
    for(let ind1=1;ind1<=3;ind1++)
    {
        cplayer1=0,cplayer2=0,ptr=ind1;
        for(let ind2=1;ind2<=3;ind2++,ptr+=3)
        {
            if(is_clicked[ptr]=="X")
            {
                if(cplayer2!=0)
                {
                    break;
                }
                cplayer1++;
            }
            else if(is_clicked[ptr]==="O")
            {
                if(cplayer1!=0)
                {
                    break;
                }
                cplayer2++;
            }
            else //If box is not clicked
            {
                break;
            }
        }
        if(cplayer1===3)
        {
            xwon();
            return;
        }
        else if(cplayer2===3)

        {
            ywon();
            return;
        }
    }

    //check diagonal
    if(is_clicked[1]!==0&&is_clicked[1]===is_clicked[5]&&is_clicked[5]===is_clicked[9])
    {
        if(is_clicked[1]==="X")
        {
            xwon();
            return;
        }
        else 
        {
            ywon();
            return;
        }
    }
    else if(is_clicked[5]!==0&&is_clicked[3]===is_clicked[5]&&is_clicked[5]===is_clicked[7])
    {
        if(is_clicked[5]==="X")
        {
            xwon();
            return;
        }
        else 
        {
            ywon();
            return;
        }
    }
    let count=0;
    for(i=1;i<=9;i++)
    {
        if(is_clicked[i]!==0)
        {
            count++;
        }
    }
    if(count===9)
    {
        display("Tie");
        setTimeout(reset,1000);
    }
}
const xwon=()=>
{
    total1+=1;
    playerx.innerHTML=`PlayerX:${total1}`;
    display("Player X scored 1 point");
    setTimeout(reset,1000);
}
const ywon=()=>{
    total2+=1;
    playery.innerHTML=`PlayerY:${total2}`;
    display("Player Y scored 1 point");
    setTimeout(reset,1000);
}
const reset=()=>
{
    for(let i="1";i<="9";i++)
    {
        document.getElementById(i).innerHTML="";
    }
    x=false,is_clicked={"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0};
}
const display=(val)=>
{
    document.getElementById("displaybox").innerHTML=val;
    document.getElementById("displaybox").style.visibility="visible";
    setTimeout(()=>{
    document.getElementById("displaybox").style.visibility="hidden";
    },2000);
}