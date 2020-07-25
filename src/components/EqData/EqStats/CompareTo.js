/**
 * this will compare 2 sets of data with a divider
 * A: this is the data e.g. Week
 * B: this is the whole data e.g. Year
 * Div: this is the divider e.g. if you are working out the average of a year over each week then the div would be 52
 */
export function CompareTo(A, B, div){
    if(div === 0) { return }
    return A - (B/div);
}