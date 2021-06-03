/**
 * Return props for authForm input element.
 *
 * @param {String} input - type of input element.
 * @param {String} enteredValue - input value
 * @param {Function} errorFunc - a function to update error massage state.
 * @return {Object} a object that can be spread as props
 * @example <Input {...getInputProps('email', enteredEmail, setError)}/>
 */

export const getInputProps = (input, enteredValue, errorFunc) => {
  switch (input) {
    case 'email':
      return {
        type: 'email',
        id: 'email',
        autoComplete: 'email',
        minLength: '5',
        required: 'required',
        value: enteredValue,
        onFocus: function () {
          errorFunc(null);
        },
      };

    case 'password':
      return {
        type: 'password',
        id: 'password',
        minLength: '4',
        required: 'required',
        value: enteredValue,
        onFocus: function () {
          errorFunc(null);
        },
      };
  }
};

/**
 * Return text children for authForm title.
 *
 * @param {String} mode - string state of authForm, could be 'signin' or 'signup'.
 * @param {String} forElement - string 3 use cases(subtitle,switch and option) on different authForm elements.
 * @return {Object} a object that can be spread as props
 * @example <SubTitle>{getDisplayText(mode, 'subtitle')}</SubTitle>
 */
export function getDisplayText(mode, forElement) {
  switch (forElement) {
    case 'subtitle':
      return mode === 'signin' ? 'New to Hotflix? ' : 'Already a user? ';

    case 'switch':
      return mode === 'signin' ? 'Sign up' : 'Sign in';

    case 'option':
      return mode === 'signin'
        ? 'Or sign in with'
        : "Don't want to be bothered?";

    default:
      return mode === 'signin' ? 'Sign in' : 'Sign up';
  }
}
