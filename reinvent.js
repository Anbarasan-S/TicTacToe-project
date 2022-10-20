const is_clicked={};
const data={};
let x=1;
let player_turn = 'o'
let player_x=0;
let player_o=0;

for(let i=1;i<=9;i++)
{
    i=i.toString();
    is_clicked[i]=0;
    data[i]=null;
}

const clicked=()=>
{
    let id=event.target.id;
    if(!is_clicked[id])
    {
        is_clicked[id]=1;
        const element=document.getElementById(id);
        if(x)
        {
            x=0;
            element.innerHTML='X';
            data[id]='x';
        }
        else
        {
            x=1;
            element.innerHTML='O';
            data[id]='o';
        }
        checkWin();
    }
}


const checkWin=()=>{
    //checking each rows
    for(let i=1;i<=9;i+=3)
    {
        let i1=(i+1).toString();
        let i2=(i+2).toString();
        i=i.toString();
        if(data[i]!==null&&data[i]===data[i1]&&data[i]===data[i2])
        {
            if(data[i]==='x')
            callX();
            else
            callO();
            gameOver();
            return
        }
        i=parseInt(i)
    }
    //checking each columns
    for(let i=1;i<=3;i++)
    {
        let i1=(i+3).toString();
        let i2=(i+6).toString();
        i=i.toString();
        if(data[i]!==null&&data[i]===data[i1]&&data[i]===data[i2])
        {
            if(data[i]==='x')
            callX();
            else
                callO();
            gameOver();
            return
        }
        i=parseInt(i)
    }
    //checking left diagonal
    if(data['1']!=null&&data['1']===data['5']&&data['1']===data['9'])
    {
        if(data['1']==='x')
        callX();
        else
        callO();
        gameOver();
        return
    }
    //checking right diagonal
    if(data['3']!=null&&data['3']===data['5']&&data['5']===data['7'])
    {
        if(data['3']==='x')
        callX();
        else
        callO();
        gameOver();
        return
    }
    //check game over
    let i='1';
    for(i='1';i<='9';i++)
    {
        i=i.toString();
        if(is_clicked[i]===0)
        {
            break;
        }
    }
    i=i.toString();
    if(i==='10')
    {
        gameOver();
        display('Tie');
    }
}

const callX=()=>{
    player_x++;
    document.getElementById('x').innerHTML=`PlayerX:${player_x}`;
    display('Player X scored 1 point');
}

const callO=()=>{
    player_o++;
    document.getElementById('o').innerHTML=`PlayerY:${player_o}`;
    display('Player O scored 1 point');
}

const gameOver=()=>
{
    const func=()=>{
     for(let i=1;i<=9;i++)
     {
     i=i.toString();
     document.getElementById(i).innerHTML='';
     is_clicked[i]=0;
     data[i]=null; 
    }
    // toggle player option x or o
        if(player_turn == 'x')
        {
            x = 1
            player_turn = 'o'
        }
        else
        {
            x = 0
            player_turn = 'x'
        }
    }
    setTimeout(func,900);
}

const display=(msg)=>{
    document.getElementById("displaybox").innerHTML=msg;
    document.getElementById("displaybox").style.visibility="visible";
    setTimeout(()=>{
    document.getElementById("displaybox").style.visibility="hidden";
    },2000);
}