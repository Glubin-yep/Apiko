class UserDTO {
  constructor(name, { email, phoneNumber, businessSite }) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.businessSite = businessSite;
  }
}

export default UserDTO;
