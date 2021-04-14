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
    width : 70%;
    height : auto;
    margin : 50px auto;
    border : 1px solid white;
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

.liste{
    display : flex;
    flex-direction : column;
    width : 100%;
    height : auto;
    border : 1px solid white;
    border-radius : 5px;
    box-shadow : 0 8px 16px rgba(0,0,0,.3)
}

.nomAgenda{
    text-align: center;
    font-family: 'Leckerli One', cursive;
    color :  #f69d3c;
}

#rowHome{
    border-radius : 5px;
    box-shadow : 0 8px 16px rgba(0,0,0,.2);
    margin-top : 10px
}

#h2Home{
    color : #f69d3c;
}
`
