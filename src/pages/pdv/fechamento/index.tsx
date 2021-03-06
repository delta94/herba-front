import React, { useEffect, useState } from 'react'
import {
  Navbar,
  Container,
  ContainerProducts,
  ContainerVenda,
  ContainerValores,
  LabelValorTotal,
  FormTotal,
  BtnFinalizar,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  BoxDetalhes,
  Detalhes,
  Label,
  Descricao,
  ContainerResum,
  ContainerBoxes,
  Boxes,
  ContainerBox,
  Box,
  BoxDescription,
  BoxInformations,
  BoxDescriptionCustom,
  FormTotalCustomColor
} from '../styles'
import { NavbarBrand } from 'reactstrap'
import { GetServerSideProps, InferGetStaticPropsType } from 'next'
import apiService from '../../../services/apiService'

interface SaleProps {
  id: string
  created_at: string
  updated_at: string
  collaborator_id: string
  type_of_payment: string
  sub_total: string
  descount: string
  total: string
  owner_id: string
}

const CloseBox = ({
  salesOfDay
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const [salesSize, setSalesSize] = useState<number>(salesOfDay.length)

  const [totalValueSalesDescount, setTotalValueSalesDescount] = useState(
    salesOfDay.reduce((a: SaleProps, b: SaleProps) => a + b.descount, 0)
  )

  const [totalSalesByCards, setTotalSalesByCards] = useState(
    salesOfDay
      .filter((p: SaleProps) => p.type_of_payment !== 'dinheiro')
      .reduce((a: SaleProps, b: SaleProps) => a + b.total, 0)
  )

  const [totalValueSales, setTotalValueSales] = useState(
    salesOfDay.reduce((a: SaleProps, b: SaleProps) => a + b.total, 0)
  )

  const [totalSalesByDebito, setTotalSalesByDebito] = useState(
    salesOfDay
      .filter((p: SaleProps) => p.type_of_payment === 'debito')
      .reduce((a: SaleProps, b: SaleProps) => a + b.total, 0)
  )

  const [totalSalesByCredito, setTotalSalesByCredito] = useState(
    salesOfDay
      .filter((p: SaleProps) => p.type_of_payment !== 'dinheiro')
      .reduce((a: SaleProps, b: SaleProps) => a + b.total, 0)
  )

  const [totalSalesByMoney, setTotalSalesByMoney] = useState(
    salesOfDay
      .filter((p: SaleProps) => p.type_of_payment === 'dinheiro')
      .reduce((a: SaleProps, b: SaleProps) => a + b.total, 0)
  )

  const [parsedToBRLTotal, setParsedToBRLTotal] = useState('')
  const [parsedToBRLDebitosales, setParsedToBRLDebitosales] = useState('')
  const [parsedToBRLCreditosales, setParsedToBRLCreditoSales] = useState('')
  const [parsedToBRLMoneySales, setParsedToBRLMoneySales] = useState('')
  const [parsedToBRLBySalesCards, setParsedToBRLBySalesCards] = useState('')
  const [parsedToBRLBySalesDescount, setParsedToBRLBySalesDescount] = useState(
    ''
  )

  useEffect(() => {
    setParsedToBRLBySalesDescount(
      new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
      }).format(totalValueSalesDescount)
    )
  }, [totalValueSalesDescount])

  useEffect(() => {
    setParsedToBRLTotal(
      new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
      }).format(Number(totalValueSales))
    )
  }, [totalValueSales])

  useEffect(() => {
    setParsedToBRLDebitosales(
      new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
      }).format(totalSalesByDebito)
    )
  }, [totalSalesByDebito])

  useEffect(() => {
    setParsedToBRLCreditoSales(
      new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
      }).format(totalSalesByCredito)
    )
  }, [totalSalesByCredito])

  useEffect(() => {
    setParsedToBRLMoneySales(
      new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
      }).format(totalSalesByMoney)
    )
  }, [totalSalesByMoney])

  useEffect(() => {
    setParsedToBRLBySalesCards(
      new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
      }).format(totalSalesByCards)
    )
  }, [totalSalesByCards])

  return (
    <div>
      <Navbar light expand="ml">
        <div>
          <NavbarBrand href="/">
            <img
              src="/image/logo-pdv.svg"
              alt="this is a logo push left side of menu on top level"
            />
          </NavbarBrand>
        </div>

        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            Barbara C.
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>
              Log-Off
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Navbar>
      <Container>
        <ContainerVenda>
          <ContainerProducts>
            <ContainerBoxes>
              <Boxes>
                <ContainerBox>
                  <Box>
                    {parsedToBRLMoneySales && (
                      <BoxDescription>
                        {parsedToBRLMoneySales}
                      </BoxDescription>
                    )}
                  </Box>
                  <Box>
                    <BoxInformations>
                      Venda no Dinheiro
                    </BoxInformations>
                  </Box>
                </ContainerBox>
                <ContainerBox>
                  <Box>
                    {parsedToBRLDebitosales && (
                      <BoxDescription>
                        {parsedToBRLDebitosales}
                      </BoxDescription>
                    )}
                  </Box>
                  <Box>
                    <BoxInformations>
                      Venda no Débito
                    </BoxInformations>
                  </Box>
                </ContainerBox>
                <ContainerBox>
                  <Box>
                    <BoxDescriptionCustom>
                      {parsedToBRLCreditosales}
                    </BoxDescriptionCustom>
                  </Box>
                  <Box>
                    <BoxInformations>
                      Venda no Crédito
                    </BoxInformations>
                  </Box>
                </ContainerBox>
              </Boxes>
            </ContainerBoxes>
          </ContainerProducts>

          <ContainerResum>
            <BoxDetalhes>
              <Detalhes>Vendas:</Detalhes>
            </BoxDetalhes>

            <ContainerValores>
              <Label>N° de Vendas:</Label>
              <Descricao>{salesSize}</Descricao>
            </ContainerValores>
            <ContainerValores>
              <Label>Carro Chefe:</Label>
              <Descricao>Cookie</Descricao>
            </ContainerValores>

            {/* <ContainerValores>
              <Label>Subtotais:</Label>
              <Descricao>R$100,00</Descricao>
            </ContainerValores> */}

            <ContainerValores>
              <Label>Descontos:</Label>
              {parsedToBRLBySalesDescount && (
                <Descricao>{parsedToBRLBySalesDescount}</Descricao>
              )}
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Valor Total:</LabelValorTotal>
              {parsedToBRLTotal && (
                <FormTotalCustomColor>{parsedToBRLTotal}</FormTotalCustomColor>
              )}
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Dinheiro:</LabelValorTotal>
              {parsedToBRLMoneySales && (
                <FormTotal>{parsedToBRLMoneySales}</FormTotal>
              )}
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Cartões:</LabelValorTotal>
              {parsedToBRLBySalesCards && (
                <FormTotal>{parsedToBRLBySalesCards}</FormTotal>
              )}
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Débito:</LabelValorTotal>
              {parsedToBRLBySalesCards && (
                <FormTotal>{parsedToBRLBySalesCards}</FormTotal>
              )}
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Crédito:</LabelValorTotal>
              {parsedToBRLBySalesCards && (
                <FormTotal>{parsedToBRLBySalesCards}</FormTotal>
              )}
            </ContainerValores>
            <ContainerValores>
              <BtnFinalizar>Fechar Caixa</BtnFinalizar>
            </ContainerValores>
          </ContainerResum>
        </ContainerVenda>
      </Container>
    </div>
  )
}

export default CloseBox

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await apiService.get<SaleProps[]>(
    '/associates/salesOfDay/?associado=2c7c5e72-41ef-4233-a096-67e1ded3703b'
  )
  // console.log('278 => ', response.data)
  const res = response.data.map(sa => ({ ...sa, total: Number(sa.total) }))
  console.log('280 => ', res)
  return {
    props: { salesOfDay: res }
  }
}
