export default class numberFormatter {
  static addSymbolAtEnd(value, symbol) {
    return `${value}${symbol}`;
  }

  static isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  static isNaturalNumber(n) {
    return n >= 0 && Math.floor(n) === +n && n.indexOf('.') === -1;
  }

  static removeSymbols(string, ...symbols) {
    const s = symbols.join('|');
    return string.replace(new RegExp(s, 'g'), '');
  }

  static howManyDecimalPlaces(number) {
    return (number.split('.')[1] || []).length;
  }

  static removeExtraDecimalNumbers(number, decimalPaces) {
    const totalRemove = this.howManyDecimalPlaces(number) - decimalPaces;
    return totalRemove > 0 ? number.slice(0, -totalRemove) : number;
  }

  static formatCurrency(number) {
    const numbers = number.split('.');
    return `$${numbers[0]
      .reverse()
      .match(/\d{1,3}/g)
      .join(',')
      .reverse()}${numbers.length > 1 ? '.'.concat(numbers[1]) : ''}`;
  }

  static trailZeros(number, decimalPaces) {
    const totalZeros = decimalPaces - this.howManyDecimalPlaces(number) + 1;
    return `${number}${number.indexOf('.') === -1 ? '.' : ''}${Array(+(totalZeros > 0 && totalZeros)).join('0')}`;
  }
}
