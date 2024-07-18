.box{
     background-color: rgb(199, 197,197);

}

.topcontainer{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 15%;
}

.one{
    border-radius: 15px;
    width: -5%;
    height: 110px;
}

.three{
    border-radius: 15px;
    width: 19%;
    height: 90px;
    display: flex;
    justify-content: flex-end;
    
}


.flexbox1{
    display: flex;
    justify-content: space-between;
    width: 45%;
}

.flex2{
    position: relative;
    right: -6px;
}

.flexbox2{
    display: flex;
    justify-content: space-between;
    width: 45%;
}

.flex4{
    position: relative;
    right: -10px;
}

.container{
    width: 33%;
    height: 50%;
    position: absolute;
    right: 35px;
    top:175px
    
}

.rightbox{ 
    position: absolute;
    bottom: 24%;
    left: 70%;
    
}

.blackbox{
    background-color:black;
    width: 100%;
    height: 15px;
}

.lastbox{
    position: absolute;
    /*top: 248%;
    left:0%;*/
    border: 1px solid;
}





@media screen and (min-width: 400px){
    .box,.topcontainer,.one,.three,.flexbox1,.flex2,.flexbox2,.flex4,.container,.rightbox,.blackbox,.lastbox{
        width: 100%;
    }
}
