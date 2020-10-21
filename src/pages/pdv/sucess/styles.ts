import styled from 'styled-components'


export const Container = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
    
`

export const ContainerVenda = styled.div`
  
    display: flex;
    width: 95%;
    height: 80%;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    
  
`
export const ContainerVendido = styled.div`
/* position: absolute;
border-width: 100px;
border-style: solid;
border-color: #2FC84C;
background: #f2f; */

width: clamp(20rem, 50%, 60% );
height: clamp(20rem, 90%, 100% );
background: #1d1f2f;
color: #FFF;
padding: 20px;
border: 25px solid #2FC84C;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: center;
justify-items: center;
`

export const Imagem = styled.img`
width: clamp(15rem, 50%, 60% );
`

export const Texto = styled.p`
position: absolute;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: clamp(40px, 40px, 60px );
line-height: 42px;
color: #2FC84C;
width: clamp(20rem, 50%, 60% );
text-align: center;
`


export const BoxTexto = styled.div`
width: 100%;
height: 20%;
display: flex;
justify-content: center;

`