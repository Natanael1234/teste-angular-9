
export function foneMask () : any {
  return {
    placeholderChar: '\u2000',
    guide: true,
    mask: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  };
};
