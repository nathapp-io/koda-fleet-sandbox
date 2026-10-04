describe('subtract')` block, and unchanged `describe('add')` block |

**Key design decisions:**
- Used **dynamic imports** (`await import(...)`) for runtime checks so the file loads successfully before the `subtract` implementation exists
- Used `describe` import (unused) to satisfy bun:test's requirement without affecting functionality
- Used `readFileSync` for file-check ACs (AC-4, AC-5) since they explicitly ask about source file contents and exports