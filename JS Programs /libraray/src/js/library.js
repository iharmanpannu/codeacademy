class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "String") {
      this._numberOfStudents = this.newNumberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }

  quickFacts() {
    console.log(
      `${name} educates ${numberOfStudents} students, typically between the ages of ${level}.`
    );
  }

  static pickSubstituteTeachers(substituteTeachers) {
    substituteTeachers = [
      Math.floor(substituteTeachers.length * Math.random())
    ];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, primary, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, high, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
    console.log(sportsTeams);
  }
}

const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, 
'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
School.pickSubstituteTeachers(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool("Al E. Smith", 451, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);