function CreateObj() {
  this.page = "page tests";
  this.showPage = () => console.log(this.page);
}

const obj = new CreateObj();

obj.showPage();

class CreateObj1 {
  page = "page tests1111";
  showPage = () => console.log(this.page);
}

const obj1 = new CreateObj1();

obj1.showPage();

const obj2 = {
  page: "page tests1111",
  showPage: () => console.log(this.page),
  showPage1: function () {
    console.log(this.page);
  },
};

obj2.showPage1();

function CreateObj12() {
  this.setName = () => {
    this.firstName = "test";
    this.lastName = "test11";
    this.fullName = () => console.log(`${this.firstName} ${this.lastName}`);
  };
}

const obj1214 = new CreateObj12();
const names = obj1214.setName();

obj1214.fullName();
