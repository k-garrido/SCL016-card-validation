// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      // 1 - llamar a la funcion validator.isValid con el parametro 4083952015263
      // 2 -  El resultado debe ser true
      const isValid =  validator.isValid("4083952015263"); 
      expect(isValid).toBe(true)
    });

    it('debería retornar true para "79927398713"', () => {
      const isValid =  validator.isValid("79927398713"); 
      expect(isValid).toBe(true)
    });

    it('debería retornar false para "1234567890"', () => {
      const isValid =  validator.isValid("1234567890"); 
      expect(isValid).toBe(false)
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      const masquify = validator.maskify ("4556364607935616");
      expect(masquify).toBe("############5616")
    });

    it('Debería retornar "1" para "1"', () => {
      const masquify = validator.maskify ("1");
      expect(masquify).toBe("1")
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      const masquify = validator.maskify ("helloworld");
      expect(masquify).toBe("######orld")
    });
  });
});
