export function getBalancedSubstrings(S: string): string[] {
    let longestBalancedSubstrings: string[] = [];

    for (let i = 0; i < S.length - 1; i++) {
        let char1 = S[i];
        let char2 = '';
        let balancedSubstring = char1;
        let count1 = 1;
        let count2 = 0;

        for (let j = i + 1; j < S.length; j++) {
            if (S[j] !== char1 && char2 === '') {
                char2 = S[j];
                count2++;
            }

            if (S[j] === char1) {
                count1++;
            } else if (S[j] === char2) {
                count2++;
            } else {
                break;
            }

            if (count1 === count2 && (j - i + 1) > balancedSubstring.length) {
                balancedSubstring = S.substring(i, j + 1);
                longestBalancedSubstrings = [balancedSubstring];
            } else if (count1 === count2 && (j - i + 1) === balancedSubstring.length) {
                longestBalancedSubstrings.push(balancedSubstring);
            }
        }
    }

    return longestBalancedSubstrings;
}