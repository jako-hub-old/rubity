/**
 * This function allows to shuffle an array.
 * @param {*} array 
 */
export const shuffleArray = array => array.sort(() => Math.random() - 0.5);