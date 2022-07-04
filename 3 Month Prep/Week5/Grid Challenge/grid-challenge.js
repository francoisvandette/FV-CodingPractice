function gridChallenge(grid) {
    
    // cloning the grid array.
    let lattice = JSON.parse(JSON.stringify(grid));
    
    // ordering the letters alphabetically. 
        // - turns each string variable into an array, making lattice into a 2D array,
        // - sorts it.
    for (let i = 0; i < lattice.length; i++) {
        lattice[i] = lattice[i].split("");
        lattice[i].sort();
    }
    
    // go through each column and see if the values are alphabetical
        // - make two arrays
        // - sort one
        // - compare
    const strLength = grid[0].length;
    for (let i = 0; i < strLength; i++) {
        let rayOriginal = [];
        let raySorted = [];
        for (let j = 0; j < lattice.length; j++) {
            rayOriginal.push(lattice[j][i]);
            raySorted.push(lattice[j][i]);
        }
        raySorted.sort();
        
        if (rayOriginal.join() == raySorted.join()) {
            // do nothing
        } else {
            return "NO";
        }
    }
    
    // if all cases comparing rayOriginal to raySorted are true...
    return "YES"; 
}