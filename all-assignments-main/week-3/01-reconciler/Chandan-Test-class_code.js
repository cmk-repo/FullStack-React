function findDiff(arr1, arr2) {
    let updated = 0, added = 0, deleted = 0;
    for (let i = 0; i < arr2.length; i++) {
        let item = arr2[i];
        let found = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                found = true;
            }
        }
        if (found) {
            updated = updated + 1;
        } else {
            added = added + 1;
        }
    }

    for (var i = 0; i < arr1.length; i++) {
        let found = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                found = true;
            }
        }
        if (!found) {
            deleted++;
        }
    }

    return {
        updated: updated,
        added: added,
        deleted: deleted
    }
}

let diff = findDiff([1, 2, 3], [3]);
console.log(diff);