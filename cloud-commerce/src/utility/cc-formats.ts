interface CardType {
  pattern: RegExp
  maxLength: number
  format: (cc: string) => string
  type:
    | 'visa'
    | 'master'
    | 'amex'
    | 'jcb'
    | 'maestro'
    | 'discover'
    | 'instapayment'
    | 'diners_club'
    | 'diners_club_international'
    | 'diners_club_carte_blanche'
}

const _format_4444 = (cc: string): string => {
  return cc.match(/[0-9]{1,4}/g)?.join(' ') || ''
}

const _format_464 = (cc: string): string => {
  return [cc.substring(0, 4), cc.substring(4, 10), cc.substring(10, 14)].join(' ').trim()
}
const _format_465 = (cc: string): string => {
  return [cc.substring(0, 4), cc.substring(4, 10), cc.substring(10, 15)].join(' ').trim()
}

const _CARD_TYPES: Array<CardType> = [
  { type: 'visa', pattern: /^4/, format: _format_4444, maxLength: 19 },
  { type: 'master', pattern: /^((5[12345])|(2[2-7]))/, format: _format_4444, maxLength: 16 },
  { type: 'amex', pattern: /^3[47]/, format: _format_465, maxLength: 15 },
  { type: 'jcb', pattern: /^35[2-8]/, format: _format_465, maxLength: 19 },
  {
    type: 'maestro',
    pattern: /^(5018|5020|5038|5893|6304|6759|676[123])/,
    format: _format_4444,
    maxLength: 19,
  },
  { type: 'discover', pattern: /^6[024]/, format: _format_4444, maxLength: 19 },
  { type: 'instapayment', pattern: /^63[789]/, format: _format_4444, maxLength: 16 },
  { type: 'diners_club', pattern: /^54/, format: _format_4444, maxLength: 16 },
  { type: 'diners_club_international', pattern: /^36/, format: _format_464, maxLength: 14 },
  { type: 'diners_club_carte_blanche', pattern: /^30[0-5]/, format: _format_464, maxLength: 14 },
]

export const unFormatExpDate = (expDate: string) => {
  return expDate.match(/[0-9]{1,2}/g) || []
}

export const formatCardNumber = (cardNumber: string = ''): string => {
  cardNumber = cardNumber.replace(/[^0-9]+/g, '')

  for (var i in _CARD_TYPES) {
    const cardType = _CARD_TYPES[i]
    if (cardNumber.match(cardType.pattern)) {
      cardNumber = cardNumber.substring(0, cardType.maxLength)
      return cardType.format(cardNumber)
    }
  }

  cardNumber = cardNumber.substring(0, 19)
  return _format_4444(cardNumber)
}

export const cvvFormat = (cvv: string) => {
  return cvv.replace(/[^0-9]+/g, '').substring(0, 3)
}

export const expDateFormat = (expDate: string) => {
  expDate = expDate.replace(/[^0-9]+/g, '')
  return unFormatExpDate(expDate).slice(0, 2).join(' / ')
}
