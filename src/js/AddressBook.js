class AddressBook {
  index() {}
  create(data) {
    let contacts = []
    contacts.push(data)
    window.localStorage.setItem('contacts', contacts)
    return "The entry was added to the address book"
  }
}

module.exports = AddressBook;
