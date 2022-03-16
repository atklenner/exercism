export class GradeSchool {
  constructor() {
    this.schoolRoster = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this.schoolRoster));
  }

  add(name, grade) {
    for (let key of Object.keys(this.schoolRoster)) {
      let index = this.schoolRoster[key].indexOf(name);
      if (index !== -1) {
        this.schoolRoster[key].splice(index, 1);
        break;
      }
    }

    if (this.schoolRoster[grade]) {
      this.schoolRoster[grade] = [...this.schoolRoster[grade], name].sort();
    } else {
      this.schoolRoster = { ...this.schoolRoster, [grade]: [name] };
    }
  }

  grade(grade) {
    if (this.schoolRoster[grade]) {
      return [...this.schoolRoster[grade]];
    } else {
      return [];
    }
  }
}
