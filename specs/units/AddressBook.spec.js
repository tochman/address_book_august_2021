const { expect } = require("chai");
const AddressBook = require("../../src/js/AddressBook");

describe("AddressBook", () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  subject(() => new AddressBook());
  def("contactsInStorage", () => JSON.parse(window.localStorage.data.contacts));
  def("validData", {
    name: "Thomas",
    phone: "031-111111",
    email: "thomas@craft.com",
  });

  it(() => is.expected.to.be.an("object"));

  it(() => is.expected.to.be.an.instanceOf(AddressBook));

  it(() => is.expected.to.respondTo("index"));

  it(() => is.expected.to.respondTo("create"));

  describe("#create", () => {
    let setItemSpy;
    before(() => {
      setItemSpy = sinon.spy(window.localStorage, "setItem");
    });

    context("with valid data", () => {
      def("response", () => $subject.create($validData));

      beforeEach(() => {
        $response;
      });

      it("is expected to call on localStorage.setItem()", () => {
        expect(setItemSpy).to.have.been.calledOnce;
      });

      it("is expected to add a contact to localStorage", () => {
        expect($contactsInStorage).to.have.length(1);
      });

      it("is expected to respond with success message", () => {
        expect($response).to.equal("The entry was added to the address book");
      });
    });
  });
});
