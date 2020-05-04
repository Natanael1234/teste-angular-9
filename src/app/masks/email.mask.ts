
import emailMask from 'text-mask-addons/dist/emailMask';

export function mailMask () : any {
  return {
    placeholderChar: '\u2000',
    guide: true,
    mask: emailMask
  };
};
