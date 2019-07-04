// 1. Lijst op alfabetische volgorde zetten.

const array = ['prijsvergelijken','edwin', 'coen', 'cedric', 'danielle']

const swap = (array, leftIndex, rightIndex) => {
    let z = array[leftIndex]
    array[leftIndex] = array[rightIndex]
    array[rightIndex] = z
}

const partition = (array, left, right) => {
    let selectedItem   = array[Math.floor((right + left) / 2)]
    i       = left
    j       = right
while (i <= j) {
    while (array[i] < selectedItem) {
        i++;
    }
    while (array[j] > selectedItem) {
        j--;
    }
    if (i <= j) {
        swap(array, i, j)
        i++;
        j--;
    }
}
return i;
}

const arraySort = (array, left, right) => {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right)
        if (left < index - 1) { 
            quickSort(array, left, index - 1)
        }
        if (index < right) { 
            quickSort(array, index, right);
        }
    }
    console.log('Lijst op alfabetische volgorde:', array)
}

function quickSort(array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right)
        if (left < index - 1) { 
            quickSort(array, left, index - 1);
        }
        if (index < right) { 
            quickSort(array, index, right);
        }
    }
    return array
}

arraySort(array, 0, array.length - 1)

// 4. Intersectie tussen twee lijsten berekenen.

const array1 = ['prijsvergelijken','edwin', 'coen', 'cedric','danielle']
const array2 = ['intersection', 'edwin', 'prijsvergelijken', 'prijsvergelijken']

const intersection = () => {
const duplicates = []
    if(array1.length < array2.length) {

        for(let i = 0; i <array1.length; i++) {
            if(array2.includes(array1[i]) && !duplicates.includes(array1[i])){
                duplicates.push(array1[i])
            }
        }
        console.log(duplicates)
        }

        for(let i = 0; i <array2.length; i++) {
            if(array1.includes(array2[i]) && !duplicates.includes(array2[i])){
                duplicates.push(array2[i])
            }
        }
        console.log('Dit is de intersectie tussen de twee lijsten:', duplicates)
}

intersection()
