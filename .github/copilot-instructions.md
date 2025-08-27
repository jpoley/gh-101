# gh-101 Repository Instructions

**ALWAYS follow these instructions first and only fallback to additional search and context gathering if the information in these instructions is incomplete or found to be in error.**

## Repository Overview

gh-101 is currently a minimal repository containing only a README.md file. This repository serves as a foundational starting point for development projects and can be expanded with various technologies and frameworks.

## Current Repository State

**CRITICAL**: This repository is in a minimal state with:
- Only a README.md file containing "# gh-101"
- No build system, dependencies, or application code
- No tests, CI/CD pipelines, or deployment configurations
- No package managers or project configuration files

## Working Effectively

### Prerequisites and Environment
The development environment includes:
- Git version 2.51.0
- Node.js v20.19.4 with npm 10.8.2
- Python 3.12.3 with pip 24.0
- GCC compiler and make utilities
- Standard Unix/Linux development tools

### Basic Repository Operations
**All timing measurements are from validation - commands complete in under 1 second unless noted:**

- **Clone and navigate**: `git clone <repo-url> && cd gh-101`
- **Check repository status**: `git status` (completes in ~0.002s)
- **View commit history**: `git log --oneline` (completes in ~0.004s) 
- **List all files**: `ls -la` (completes in ~0.002s)
- **Find markdown files**: `find . -name "*.md"` (completes in ~0.002s)
- **View repository structure**: `tree` or `find . -type f ! -path "./.git/*"`

### Git Operations
- **Check current branch**: `git branch -a` (completes in ~0.003s)
- **View uncommitted changes**: `git diff` (completes in ~0.003s)
- **Stage changes**: `git add .`
- **Commit changes**: `git commit -m "Your message"`
- **Push changes**: `git push origin <branch-name>`

### File Operations
- **Create files**: `echo "content" > filename.ext`
- **Edit files**: Use `nano`, `vim`, or other available editors
- **View file contents**: `cat filename.ext` (completes in ~0.001s)
- **Remove files**: `rm filename.ext` (completes in ~0.001s)

## Development Guidelines

### Before Making Changes
1. **ALWAYS run `git status`** to check the current state
2. **ALWAYS run `git diff`** to see any uncommitted changes
3. **ALWAYS check `ls -la`** to understand current directory contents

### When Adding New Functionality
Since this repository is minimal, when adding new functionality:

1. **Determine the project type first**:
   - Web application: Create `package.json` with `npm init`
   - Python project: Create `requirements.txt` or `pyproject.toml`
   - Documentation site: Set up appropriate static site generator
   - Library/tool: Choose appropriate language and build system

2. **Add appropriate project structure**:
   - Create proper directory structure
   - Add configuration files (package.json, requirements.txt, etc.)
   - Set up build and test scripts
   - Add .gitignore for the chosen technology

3. **Update these instructions** to reflect new build processes, test commands, and validation scenarios

### Code Quality and Standards
- **ALWAYS run linting tools** if/when they are added to the project
- **ALWAYS run tests** if/when they are added to the project
- **ALWAYS validate file permissions** after creating new files
- **ALWAYS check git status** before and after making changes

## Validation Requirements

### Current Validation Steps
Since there are no builds or tests yet, validation consists of:

1. **File system operations**:
   ```bash
   # Test file creation and removal
   echo "test" > temp.txt && cat temp.txt && rm temp.txt
   ```

2. **Git operations**:
   ```bash
   # Verify git is working
   git status && git log --oneline
   ```

3. **Repository structure verification**:
   ```bash
   # Confirm expected files exist
   ls -la && find . -type f ! -path "./.git/*"
   ```

### Future Validation Requirements
When the repository gains functionality, UPDATE these instructions to include:
- **Build validation**: Add exact commands and expected completion times
- **Test execution**: Add test commands with timeout specifications
- **Application startup**: Add commands to run/start the application
- **End-to-end scenarios**: Add user workflow validation steps

## Common Tasks and Outputs

### Repository Root Contents
```
.
..
.git/
.github/
    copilot-instructions.md
README.md
```

### README.md Contents
```markdown
# gh-101
```

### Git Branch Information
- Current working branch: varies based on active development
- Available branches: `git branch -a` to see current state

## Important Notes

### Timing and Performance
- **All current operations complete in under 1 second**
- **No long-running builds or tests exist yet**
- **When adding builds/tests, ALWAYS include "NEVER CANCEL" warnings and appropriate timeouts (60+ minutes for builds, 30+ minutes for tests)**

### Limitations
- **No build system exists**: Do not attempt to run build commands until project structure is established
- **No test suite exists**: Do not attempt to run test commands until tests are added
- **No application code exists**: Do not attempt to run application until code is added
- **No dependencies exist**: Do not attempt dependency installation until package management is configured

### Future Development
When expanding this repository:
1. **Choose appropriate technology stack**
2. **Add proper project configuration files**
3. **Set up build and test systems**
4. **Update these instructions with validated commands and timing**
5. **Add comprehensive validation scenarios**

## Critical Reminders

- **NEVER make assumptions** about build or test commands - validate they exist first
- **ALWAYS check file existence** before attempting to read or modify files
- **ALWAYS validate git operations** complete successfully
- **ALWAYS update these instructions** when adding new functionality
- **When builds/tests are added**: Set timeouts of 60+ minutes for builds, 30+ minutes for tests, and include "NEVER CANCEL" warnings

---

*These instructions reflect the current minimal state of the repository. They must be updated as functionality is added to ensure accuracy and completeness.*