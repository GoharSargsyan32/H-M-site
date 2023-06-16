const sortInSubarray = (array, sortCount) => {
    const result = []
    for (let i = 0; i < array.length; i += sortCount) {
        result.push(array.slice(i, i + sortCount))
    }
    return result
}

export default sortInSubarray