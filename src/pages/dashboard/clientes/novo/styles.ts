import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
  }
`

export const ContainerInclusao = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
`

export const ContainerConteudo = styled.div`
  /* @media (max-width: 767px) {
    display: none;
    background: red;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const ContainerSide = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    flex-direction: row;
  }
  @media (min-width: 768px) {
    background: #282741;
    width: 15%;
    max-width: 20%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    justify-items: center;
  }
`

export const ContainerIconsLg = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 60%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    margin-bottom: 100px
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 90%;
    height: 100%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    justify-items: center;
    margin-top: 50px;
    margin-bottom: 100px

  }
`

export const ContainerNovoCliente = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 2000px;
    display: flex;
    margin: none;
    padding: none;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 90%;
    height: 100%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: flex-start;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }
`

export const IconsTags = styled.div`
  @media (max-width: 767px) {
    background: #282741;
    width: 90%;
    height: 70px;
    display: flex;
    background-size: cover;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    background: #282741;
    width: 20%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    margin-top: 45px;
    flex-direction: column;
    font-size: 1rem;
  }
`

export const ContainerTags = styled.div`
  @media (max-width: 767px) {
    width: 90%;
    height: 90%;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    /* margin-bottom: 50px; */
  }
  @media (min-width: 768px) {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #1d1f2f;
  }
`

export const LabelClienteDashboard = styled.span`
  @media (max-width: 767px) {
    color: #2fc84c;
    width: 100%;
    text-align: center;

    font-family: Roboto;
    font-style: normal;
  }

  @media (min-width: 768px) {
    color: #2fc84c;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-size: 100%;
  }
`

export const LabelClienteDashboardMenos = styled.span`
  @media (max-width: 767px) {
    color: #ef6e6e;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
  }
  @media (min-width: 768px) {
    color: #ef6e6e;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-size: 100%;
  }
`

export const LabelDescricaoDashboard = styled.span`
  @media (max-width: 767px) {
    color: #fff;
    width: 100%;
    height: 40%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
  }

  @media (min-width: 768px) {
    color: #fff;
    width: 100%;
    text-align: center;

    font-family: Roboto;
    font-style: normal;
  }
`
export const ContainerListAdicionar = styled.div`
  /* aumenta o container com a label e o input dentro  */
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    flex-direction: column;
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    /* width: 100%;
    height: 20%;
    display: flex;
    justify-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: yellow; */
    display: none;
  }
`


export const ContainerListAdicionarCustomMobile = styled.div`
  /* aumenta o container com a label e o input dentro  */
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 85%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    flex-direction: row;
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    /* width: 100%;
    height: 20%;
    display: flex;
    justify-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: yellow; */
    display: none;
  }
`

export const ContainerListAdicionarComDivisao = styled.div`
  /* controla o container com 2 inputs e 2 labels  */
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 80%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    color: #fff;
    margin-bottom: 15px;
  }
  @media (min-width: 768px) {
    /* background: red;
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    color: #fff;
    margin-bottom: 15px; */
    display: none;
  }
`

export const Containeradicionar = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 80%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 20%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    justify-items: flex-start;
    color: #fff;
    font-size: 1.1rem;
    flex-direction: column;
    margin-bottom: 15px;
  }
`

export const ContainerAdicionarComDivisao = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    justify-items: center;
    color: #fff;
    font-size: 1.1rem;
    flex-direction: column;
  }
`

export const ContainerTituloNovoCliente = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 80%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-items: center;
    color: #fff;
    font-size: 1.1rem;
    margin-top: 2px;
  }
`

export const Input = styled.input`
  @media (max-width: 767px) {
    background: #282741;
    color: #ffffff;
    width: 100%;
    height: 40px;
    margin-top: 5px;
    border: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`



export const InputCustomMobile = styled.input`
  @media (max-width: 767px) {
    background: #282741;
    color: #ffffff;
    width: 100%;
    height: 40px;
    margin-top: 5px;
    border: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const LabelInput = styled.span`
  @media (max-width: 767px) {
    background: #1d1f2f;
    color: #ffffff;
    width: 100%;
    height: 40%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const InputComDivisao = styled.input`
  background: #282741;
  color: #fff;
  width: 40px;
  height: 100%;

  size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
`


export const InputComDivisaoCustomMobile = styled.input`
  background: #282741;
  color: #fff;
  width: 40px;
  height: 30%;

  size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
`

export const LabelInputComDivisao = styled.span`
  @media (max-width: 767px) {
    background: #1d1f2f;
    color: #fff;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-items: center;
    size: 1.1rem;
  }

  @media (min-widht: 768px) {
    /* background: #282741;
    color: #fff;
    width: 100%;
    height: 20%;
    display: flex;
    justify-items: flex-start;
    align-items: flex-start;
    justify-content: flex-start; */
    display: none;
  }
`

export const Titulo = styled.h6`
  background: #1d1f2f;
  color: #fff;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  border: none;
  padding: none;
`

export const ContainerListAdicionarSemDivisao = styled.div`
  /* controla o container com 2 inputs e 2 labels  */
  @media (max-width: 767px) {
    /* background: red;
    width: 80%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    color: #fff;
    margin-bottom: 15px; */
    display: none;
  }
  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 15px;
    display: none;
  }
`

export const ContainerAdicionarSemDivisao = styled.div`
  /* controla o container com 2 inputs e 2 labels  */
  @media (max-width: 767px) {
    /* background: red;
    width: 80%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    color: #fff;
    margin-bottom: 15px; */
    display: none;
  }
  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 20%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
    flex-direction: column;
  }
`

export const ContainerIconsDeCima = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 20%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 90%;
    height: 100%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    justify-items: center;
  }
`

// 74F471

export const BtnAdicionar = styled.button`
  @media (max-width: 767px) {
    background: #2FC84C;
    width: 100%;
    height: 100%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    outline: none !important;
  }

  @media (min-width: 768px) {
    background: #74f471;
    width: 40%;
    height: 50%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    justify-items: center;
    align-items: center;
    outline: none !important;

  }
`

// a partir daqui é relacionado a desktop >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const LabelParaDesktop = styled.span`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    width: 90%;
    height: 30%;
    margin-left: 5px;
    background-color: #1d1f2f;
  }
`

export const ContainerAdicionarDesktop = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 30%;
    height: 100%;
    background-color: #1d1f2f;

    flex-direction: column;
  }
`

export const ContainerAdicionarDesktopCustom = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 48%;
    height: 100%;
    background-color: #1d1f2f;

    flex-direction: column;
  }
`


export const BoxAdicionarDesktopCustom = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #1d1f2f;
    flex-direction: column;
    margin-top: 20px;
  }
`



export const ContainerListAdicionarDesktop = styled.div`
  /* aumenta o container com a label e o input dentro  */
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: #1d1f2f;
    margin-top: 15px;
    margin-bottom: 5px;
  }
`
export const InputDesktop = styled.input`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #282741;
    border: none;
    color: #eff0f5;
    height: 40px;
    outline: none;
    padding-left: 5px;
  }
`

export const DivCheckBox = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;

    align-items: center;
    justify-items: center;
  }
`


export const DivCheckBoxCustomPremium = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 50%;
    align-items: center;
    justify-items: flex-start;
    justify-content: flex-start;
  }
`



export const CheckBoxDesktop = styled.input`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 25%;
    background-color: #1d1f2f;
    height: 25px;
  }
`


export const CheckBoxDesktopCustomPremium = styled.input`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 10%;
    background-color: #1d1f2f;
    height: 25px;
    /* visibility: hidden */

  }
`



export const LabelParaCheckBox = styled.span`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 65%;
    height: 30px;
    margin-left: 0px;
    text-align: start;
    background-color: #1d1f2f;
    font-size: 1rem;
    align-items: center;
    display: flex;
  }
`


export const LabelParaCheckBoxCustomPremium = styled.span`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 40%;
    height: 30px;
    margin-left: 0px;
    text-align: start;
    background-color: #1d1f2f;
    font-size: 1rem;
    align-items: center;
    display: flex;
  }
`


export const ContainerCheckBoxDesktop = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 100%;
    background-color: #1d1f2f;
    margin-top: 20px;
    flex-direction: row;
  }
`

export const BtnAdicionarDesktop = styled.button`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 330px;
    height: 50px;
    margin-top: 50px;
    background-color:  #2FC84C;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin-bottom: 50px;
    outline: none !important;

  }
`

export const ContainerSpan = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    padding: 0 10px;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 0 10px;
    width: 100%;
  }
`
// #1D1F2F  - color fundo

// #282741  -  color input
