import styled from 'styled-components';

export const Styles = styled.div`
h1,
h5,
h4{
    color : #37628d;
}

h2{
    text-align : center; 
    color : #777;
    margin : 50px;
}

form{
    display : flex;
    flex-direction : column;
    width : 50%;
    height : auto;
    margin : 10px auto;
    // border : 1px solid white;
    border-radius : 5px;
    box-shadow : 0 8px 16px rgba(0,0,0,.3)
}

button{
    margin-top : 5%;
    margin-left : 20%;
    border : none;
    outline : none;
    cursor : pointer;
    font-size : 14px;
    border-radius : 4px;
    transition : .3s;
    background-color : #37628d;
}

#inputimage{
    margin-top : 6%;
    border : none;
    outline : none;
    font-size : 14px;
    border-radius : 4px;
    background-color :  #f69d3c;
}

.liste{
    display : flex;
    flex-direction : column;
    width : 100%;
    height : auto;
    border-radius : 5px;
    box-shadow : 0 8px 16px rgba(0,0,0,.2);
}

.nomAgenda{
    text-align: center;
    font-size : 1.3em;
}
#rowHome{
    border-radius : 5px;
    box-shadow : 0 8px 16px rgba(0,0,0,.1)
}

#h2Home{
    color : #f69d3c;
}

`
