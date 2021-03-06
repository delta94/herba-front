export const state = {
  CPF: '',
  name: '',
  city: '',
  sexy: '',
  state: '',
  phone: '',
  email: '',
  other: '',
  weigth: '',
  heigth: '',
  alergy: '',
  address: '',
  zip_code: '',
  birthdate: '',
  profission: '',
  neighborhood: '',
  asma: false,
  anemia: false,
  diabetes: false,
  depressao: false,
  colesterol: false,
  sonolencia: false,
  hipertensao: false,
  osteoporose: false,
  dor_de_cabeca: false,
  dor_nas_pernas: false,
  intestino_preso: false,
  falta_de_energia: false,
  doencas_cardiacas: false
}
export interface NewClient {
  CPF: string
  name: string
  sexy: string
  city: string
  phone: string
  other: string
  email: string
  state: string
  weigth: string
  heigth: string
  alergy: string
  address: string
  zip_code: string
  birthdate: string
  profission: string
  neighborhood: string
  asma: boolean
  anemia: boolean
  diabetes: boolean
  depressao: boolean
  sonolencia: boolean
  colesterol: boolean
  hipertensao: boolean
  osteoporose: boolean
  dor_de_cabeca: boolean
  dor_nas_pernas: boolean
  intestino_preso: boolean
  falta_de_energia: boolean
  doencas_cardiacas: boolean
}

export const phoneNumberMask = [
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/
]
export const birthDateMask = [
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  /\d/,
  /\d/
]
export const CPFMask = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/
]
