function getMoneySpent(keyboards, drives, b) {
    let highestCombo = -1;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let combo = keyboards[i] + drives[j];
            if (combo <= b && combo > highestCombo) {
                highestCombo = combo;
            }
        }
    }
    return highestCombo;
}