let n = 15;

const EduWork = index => {
    for (let i = 1; i <= index; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("EduWork");
        } else if (i % 3 == 0) {
            console.log("Edu");
        } else if (i % 5 == 0) {
            console.log("Work");
        } else {
            console.log(i)
        }
    }
}

EduWork(n);