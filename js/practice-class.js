class TeamMember {
  name;
  address;
  skills;
  constructor(name, address, skills) {
    this.name = name;
    this.address = address;
    this.skills = skills;
  }
  shereExperience() {
    console.log(`${this.name}, thank you for your feedback about experience`);
  }
}

class Goli extends TeamMember {
  were;
  constructor(name, address, skills, were) {
    super(name, address, skills);
    this.were = were;
  }
}

const anamul = new Goli(
  "Anamul huque",
  "cumilla, bangla desh",
  "Goli",
  "hand glovs"
);
console.log(anamul);
anamul.shereExperience();
