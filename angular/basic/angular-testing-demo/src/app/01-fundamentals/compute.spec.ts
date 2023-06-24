import { compute } from "./compute"
import { toBase64String } from '@angular/compiler/src/output/source_map';

describe('compute', () => {
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('should increment the input if it is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
})