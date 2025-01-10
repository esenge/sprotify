import arrayToCommaSeparatedString from './arrayToCommaSeparatedString';

describe('arrayToCommaSeparatedString', () => {
    it('should return a string with default comma separator', () => {
        const input = ['Alice', 'Bob', 'Charlie'];
        const result = arrayToCommaSeparatedString(input, ', ');
        expect(result).toBe('Alice, Bob, Charlie');
    });

    it('should return a string with custom separator', () => {
        const input = ['Alice', 'Bob', 'Charlie'];
        const result = arrayToCommaSeparatedString(input, ' | ');
        expect(result).toBe('Alice | Bob | Charlie');
    });

    it('should return an empty string for an empty array', () => {
        const input: string[] = [];
        const result = arrayToCommaSeparatedString(input, ', ');
        expect(result).toBe('');
    });

    it('should handle an array with a single string', () => {
        const input = ['Alice'];
        const result = arrayToCommaSeparatedString(input, ', ');
        expect(result).toBe('Alice');
    });

    it('should handle strings with special characters', () => {
        const input = ['Alice', 'Bob', 'Charlie, Jr.'];
        const result = arrayToCommaSeparatedString(input, ' - ');
        expect(result).toBe('Alice - Bob - Charlie, Jr.');
    });
});
