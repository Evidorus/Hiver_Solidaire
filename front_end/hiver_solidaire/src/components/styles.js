import styled from 'styled-components';

export const Styles = styled.div`
h2{
    text-align : center; 
    color : #777;
    margin : 50px;
}
form{
    display : flex;
    flex-direction : column;
    width : 80%;
    height : auto;
    margin : 100px auto;
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
    max-width : 30%;
    height : auto;
    margin : 100px auto;
    border : 1px solid white;
    border-radius : 5px;
    box-shadow : 0 8px 16px rgba(0,0,0,.3)
}
`
