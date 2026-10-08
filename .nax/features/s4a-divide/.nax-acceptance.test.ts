describe('divide', ...)` block has exactly 3 test calls with correct content |
| AC-7 | file-check | Each test case in divide block has exactly one expect() assertion |
| AC-8 | file-check | `describe('add')` and `describe('negate')` blocks are unchanged |

All tests use dynamic imports inside each test case so the file loads successfully even when the `divide` function doesn't yet exist in `src/math.ts`.