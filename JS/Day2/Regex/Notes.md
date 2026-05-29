### Regular Expressions (Regex) :

Powerful tool for pattern matching in strings. Regex helps powerful text matching

### Used for:

email validation
password checking
search engines

In JavaScript, Regular Expressions (Regex) are objects used for matching and manipulating character combinations in strings

### Literal Notation:

Enclosed in slashes. Use this for static patterns to improve performance.

### Constructor Function:

Uses the RegExp object. Use this for dynamic patterns, such as user input.

| Part    | Meaning         |
| ------- | --------------- |
| `/ /`   | regex container |
| `hello` | pattern         |
| `g`     | flag            |

Flags : Flags change regex behavior.

### Common Flags (Modifiers)

Flags modify how the search is performed:
g: Global search; find all matches rather than stopping after the first.
i: Case-insensitive search.
m: Multiline search; makes ^ and $ match start/end of lines.
s: dotAll; allows . to match newline characters.

Creating Regular Expressions
we can define a regex in two ways
Literal Notation: Enclosed in slashes. Use this for static patterns to improve performance.
const regex = /pattern/flags;

### Key Methods

| Method      | Description                                                |
| :---------- | :--------------------------------------------------------- |
| `test()`    | Returns true or false if a match is found.                 |
| `exec()`    | Returns an array of match information or null.             |
| `match()`   | String method that returns an array of matches.            |
| `replace()` | Searches for a match and replaces it with a new substring. |
| `search()`  | Returns the index of the first match or -1 if not found.   |

### Syntax Cheat Sheet

**Anchors:**

- `^` : Start of string
- `$` : End of string

**Character Classes:**

- `.` - Matches any single character except newline
- `\d` - Matches any digit (0-9)
- `\w` - Matches any word character (alphanumeric and underscore)
- `\s` - Matches any whitespace character (spaces, tabs, etc.)
- `^ `- Matches the start of a string
- `$ `- Matches the end of a string
- `* `- Matches zero or more occurrences of the preceding pattern
- `+ `- Matches one or more occurrences of the preceding pattern
- `? `- Matches zero or one occurrence of the preceding pattern
- `{n}` - Matches exactly n occurrences of the preceding pattern
- `{n,}` - Matches n or more occurrences of the preceding pattern
- `{n,m}` - Matches between n and m occurrences of the preceding pattern

**Quantifiers:**

- `*` : 0 or more times
- `+` : 1 or more times
- `?` : 0 or 1 time
- `{n,m}` : Between n and m times

**Groups:**

- `(abc)` : Capturing group
- `(?:abc)` : Non-capturing group
- `[abc]` : Any character inside the brackets (character set)
