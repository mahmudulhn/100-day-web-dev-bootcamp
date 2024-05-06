class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }

    describe() {
        console.log(`I am a ${this.title}, I work in ${this.location}, I earn ${this.salary}`)
    }
}

const dev = new Job("Dev", "NY", 50000);
console.log(dev);

dev.describe();