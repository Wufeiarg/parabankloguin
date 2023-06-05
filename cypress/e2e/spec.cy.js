describe('Pruebas de registro y login en Parabank', () => {
  let username = '';
  let password = '';

  before(() => {
    // Generar un nombre de usuario y una contraseña aleatorios para usar en las pruebas
    username = `user_${Math.random().toString(36).substring(7)}`;
    password = `pass_${Math.random().toString(36).substring(7)}`;
  });

  it('Registro de usuario correctamente', () => {
    // Visitar la página de registro
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');

    // Ingresar los datos de registro
    cy.get('input[name="customer.firstName"]').type('John');
    cy.get('input[name="customer.lastName"]').type('Doe');
    cy.get('input[name="customer.address.street"]').type('123 Main St');
    cy.get('input[name="customer.address.city"]').type('Anytown');
    cy.get('input[name="customer.address.state"]').type('Anystate');
    cy.get('input[name="customer.address.zipCode"]').type('12345');
    cy.get('input[name="customer.phoneNumber"]').type('123-456-7890');
    cy.get('input[name="customer.ssn"]').type('123-45-6789');
    cy.get('input[name="customer.username"]').type(username);
    cy.get('input[name="customer.password"]').type(password);
    cy.get('input[name="repeatedPassword"]').type(password);

    // Hacer clic en el botón de registro
    cy.get('input[value="Register"]').click();

    // Verificar que se haya registrado correctamente
    cy.contains('Welcome').should('be.visible');
  });

  it('Iniciar sesión correctamente', () => {
    // Visitar la página de login
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Ingresar las credenciales de inicio de sesión
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);

    // Hacer clic en el botón de login
    cy.get('input[value="Log In"]').click();

    // Verificar que se haya iniciado sesión correctamente
    cy.contains('Accounts Overview').should('be.visible');
  });
});
