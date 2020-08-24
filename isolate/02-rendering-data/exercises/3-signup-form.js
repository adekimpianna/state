'use strict';

const expect = chai.expect;

/**
 * generate a sign-up form for your app
 * conditionally renders a greeting at the top of the form
 * @param {string} appName - used to customize the sign-up button
 * @param {string} [greeting=''] - a friendly greeting for users
 * @returns {HTMLFormElement} a customized sign-up form
 */
const signupForm = (appName, greeting = '') => {
  const formEl = document.createElement('form');

  if (greeting) {
    // render a 'P' element and append it to the form
    const pEl = document.createElement('p');
    pEl.innerHTML = `${appName} welcomes you!`
    formEl.appendChild(pEl);
  }

  // this is the first input element, it's correct
  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.name = 'userName';
  input1.placeholder = 'user name';
  formEl.appendChild(input1);
  

  // render the second input
  formEl.appendChild(document.createElement('br'));

  // render the third input
  const input2 = document.createElement('input');
  input2.type = 'email';
  input2.name = 'email';
  input2.placeholder = 'email';
  formEl.appendChild(input2);

  // render the fourth input
  formEl.appendChild(document.createElement('br'));

   // render the 5th input
   const input3 = document.createElement('input');
   input3.type = 'password';
   input3.name = 'password';
   input3.placeholder = 'password';
   formEl.appendChild(input3);

  // render the 6th input
  formEl.appendChild(document.createElement('br'));

   // render the 7th input
   const signUpBtn = document.createElement('input');
   signUpBtn.type = 'button';
   signUpBtn.setAttribute('value', `sign up for ${appName}`);
   formEl.appendChild(signUpBtn);

  return formEl
};

describe('signupForm: renders a signup form for your app', () => {

  describe('signup form for WerWatWy, with no greeting', () => {
    const actual = signupForm('WerWatWy');

    it('has tagName: "FORM"', () => {
      expect(actual).to.have.property('tagName', 'FORM');
    });
    it('has childElementCount: 7', () => {
      expect(actual).to.have.property('childElementCount', 7);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "INPUT"', () => {
        expect(actualChild).to.have.property('tagName', 'INPUT');
      });
      it('has type: "text"', () => {
        expect(actualChild).to.have.property('type', 'text');
      });
      it('has name: "userName"', () => {
        expect(actualChild).to.have.property('name', 'userName');
      });
      it('has placeholder: "user name"', () => {
        expect(actualChild).to.have.property('placeholder', 'user name');
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "BR"', () => {
        expect(actualChild).to.have.property('tagName', 'BR');
      });
      console.dir(actualChild);
    }, true);

    describe(`.children[2]`, () => {
      const actualChild = actual.children[2];
      it('has tagName: "INPUT"', () => {
        expect(actualChild).to.have.property('tagName', 'INPUT');
      });
      it('has type: "email"', () => {
        expect(actualChild).to.have.property('type', 'email');
      });
      it('has name: "email"', () => {
        expect(actualChild).to.have.property('name', 'email');
      });
      it('has placeholder: "email"', () => {
        expect(actualChild).to.have.property('placeholder', 'email');
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[3]`, () => {
      const actualChild = actual.children[3];
      it('has tagName: "BR"', () => {
        expect(actualChild).to.have.property('tagName', 'BR');
      });
      console.dir(actualChild);
    }, true);

    describe(`.children[4]`, () => {
      const actualChild = actual.children[4];
      it('has tagName: "INPUT"', () => {
        expect(actualChild).to.have.property('tagName', 'INPUT');
      });
      it('has type: "password"', () => {
        expect(actualChild).to.have.property('type', 'password');
      });
      it('has name: "password"', () => {
        expect(actualChild).to.have.property('name', 'password');
      });
      it('has placeholder: "password"', () => {
        expect(actualChild).to.have.property('placeholder', 'password');
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[5]`, () => {
      const actualChild = actual.children[5];
      it('has tagName: "BR"', () => {
        expect(actualChild).to.have.property('tagName', 'BR');
      });
      console.dir(actualChild);
    }, true);

    describe(`.children[6]`, () => {
      const actualChild = actual.children[6];
      it('has tagName: "INPUT"', () => {
        expect(actualChild).to.have.property('tagName', 'INPUT');
      });
      it('has type: "button"', () => {
        expect(actualChild).to.have.property('type', 'button');
      });
      it('has value: "sign up for WerWatWy"', () => {
        expect(actualChild).to.have.property('value', 'sign up for WerWatWy');
      });
      console.dir(actualChild);
    }, true);
  });

  describe('signup form for Extarnir, with a friendly greeting', () => {
    const actual = signupForm('Extrarnir', 'Extrarnir welcomes you!');

    it('has tagName: "FORM"', () => {
      expect(actual).to.have.property('tagName', 'FORM');
    });
    it('has childElementCount: 8', () => {
      expect(actual).to.have.property('childElementCount', 8);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "P"', () => {
        expect(actualChild).to.have.property('tagName', 'P');
      });
      it('has text: "Extrarnir welcomes you!"', () => {
        expect(actualChild).to.have.text('Extrarnir welcomes you!');
      });
      console.dir(actualChild);
    }, true);

    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "INPUT"', () => {
        expect(actualChild).to.have.property('tagName', 'INPUT');
      });
      it('has type: "text"', () => {
        expect(actualChild).to.have.property('type', 'text');
      });
      it('has name: "userName"', () => {
        expect(actualChild).to.have.property('name', 'userName');
      });
      it('has placeholder: "user name"', () => {
        expect(actualChild).to.have.property('placeholder', 'user name');
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[1]`, () => {
      const actualChild = actual.children[2];
      it('has tagName: "BR"', () => {
        expect(actualChild).to.have.property('tagName', 'BR');
      });
      console.dir(actualChild);
    }, true);

    describe(`.children[2]`, () => {
      const actualChild = actual.children[3];
      it('has tagName: "INPUT"', () => {
        expect(actualChild).to.have.property('tagName', 'INPUT');
      });
      it('has type: "email"', () => {
        expect(actualChild).to.have.property('type', 'email');
      });
      it('has name: "email"', () => {
        expect(actualChild).to.have.property('name', 'email');
      });
      it('has placeholder: "email"', () => {
        expect(actualChild).to.have.property('placeholder', 'email');
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[4]`, () => {
      const actualChild = actual.children[4];
      it('has tagName: "BR"', () => {
        expect(actualChild).to.have.property('tagName', 'BR');
      });
      console.dir(actualChild);
    }, true);

    describe(`.children[5]`, () => {
      const actualChild = actual.children[5];
      it('has tagName: "INPUT"', () => {
        expect(actualChild).to.have.property('tagName', 'INPUT');
      });
      it('has type: "password"', () => {
        expect(actualChild).to.have.property('type', 'password');
      });
      it('has name: "password"', () => {
        expect(actualChild).to.have.property('name', 'password');
      });
      it('has placeholder: "password"', () => {
        expect(actualChild).to.have.property('placeholder', 'password');
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[6]`, () => {
      const actualChild = actual.children[6];
      it('has tagName: "BR"', () => {
        expect(actualChild).to.have.property('tagName', 'BR');
      });
      console.dir(actualChild);
    }, true);

    describe(`.children[7]`, () => {
      const actualChild = actual.children[7];
      it('has tagName: "INPUT"', () => {
        expect(actualChild).to.have.property('tagName', 'INPUT');
      });
      it('has type: "button"', () => {
        expect(actualChild).to.have.property('type', 'button');
      });
      it('has value: "sign up for Extrarnir"', () => {
        expect(actualChild).to.have.property('value', 'sign up for Extrarnir');
      });
      console.dir(actualChild);
    }, true);
  });
});
