// import React from 'react';
// //import { Component } from 'react';
// import TextField from 'material-ui/TextField';

// export default class CurrencyTextField extends TextField {

//   constructor() {
//     super();
//     this.state = { value: '' };
//   }

//   isNumber(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
//   }

//   removeCurrencySymbols(number) {
//     return number.replace(new RegExp('\\$|,', 'g'), '');
//     //return number.replace(new RegExp('(\\$|,|\\%)', 'g'), '');
//   }

//   howManyDecimalPlaces(number) {
//     return (number.split('.')[1] || []).length;
//   }

//   removeExtraDecimalNumbers(number, decimalPaces) {
//     const totalRemove = this.howManyDecimalPlaces(number) - decimalPaces;
//     return totalRemove > 0 ? number.slice(0, -totalRemove) : number;
//   }

//   formatCurrency(number) {
//     const numbers = number.split('.');
//     return `$${numbers[0].reverse().match(/\d{1,3}/g).join(',').reverse()}${numbers.length > 1 ? '.'.concat(numbers[1]) : ''}`;
//   }

//   trailZeros(number, decimalPaces) {
//     const totalZeros = decimalPaces - this.howManyDecimalPlaces(number) + 1;
//     console.log(Array(+(totalZeros > 0 && totalZeros)).join('0'));
//     return `${number}${number.indexOf('.') === -1 ? '.' : ''}${Array(+(totalZeros > 0 && totalZeros)).join('0')}`;
//   }

//   onBlur() {
//     const value = this.removeCurrencySymbols(this.state.value);
//     if (!this.isNumber(value) || value.length === 0) {
//       this.setState({
//         value: ''
//       });
//     } else if (this.howManyDecimalPlaces(value) !== 2) {
//       this.setState({
//         value: this.trailZeros(value, 2)
//       });
//     }
//   }

//   onChange(newValue) {
//     let value = this.removeCurrencySymbols(newValue);
//     if (this.isNumber(value)) {
//       const currentAmount = this.removeCurrencySymbols(this.state.value);
//       value = this.removeExtraDecimalNumbers(value, 2);
//       if (currentAmount !== value) {
//         this.setState({
//           value: this.formatCurrency(value)
//         });
//       }
//     } else if (value.length === 0) {
//       this.setState({
//         amount: '$'
//       });
//     }
//   }

//   onclick() {
//     console.log('test');
//     const element = this.input;
//     element.setSelectionRange(0, element.value.length);
//   }

//   /*render() {
//     return (
//       <TextField
//         ref={e => {
//           if (this.principalAmountElement === undefined) {
//             this.principalAmountElement = e.input;
//           }
//         }}
//         name='mortgagePrincipal'
//         floatingLabelText='Principal Amount'
//         type='text'
//         value={this.state.amount}
//         onBlur={this.onBlur.bind(this)}
//         onChange={(input, newValue) => { this.onChange(newValue); }}
//         onClick={this.onClickElement(this.principalAmountElement)}
//       />
//     );
//   }*/
// }
