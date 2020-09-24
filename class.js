class Student{
    constructor(sid, sName){
        this.id = sid;
        this.name = sName;
        this.school = "Daffodil International School";
    }

}

const student1 = new Student (12, "masum");
const student2 = new Student (22, "sharif");
console.log(student1.name, student2.name);