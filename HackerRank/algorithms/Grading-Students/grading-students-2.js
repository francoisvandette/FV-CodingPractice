function gradingStudents(grades) {
    let roundedGrades = [];
    for (let i = 0; i < grades.length; i++) {
        const nextMultiple = Math.ceil(grades[i]/5) * 5;
        if (grades[i] < 38) {
            roundedGrades.push(grades[i]);
        } else if (grades[i] >= nextMultiple-2) {
            roundedGrades.push(nextMultiple);
        } else {
            roundedGrades.push(grades[i]);
        }
    }
    return roundedGrades
}