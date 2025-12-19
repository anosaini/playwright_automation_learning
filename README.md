# Playwright Automation Learning

This repository contains Playwright tests and example automation used for learning and experimentation.

**Status:** Learning / Workshop repository

**Key points**
- Tests: located in the `tests/` directory
- Config: `playwright.config.ts` (project defaults, reporters include Allure)
- Results: Allure output is written to `allure-results/` and the generated report is in `allure-report/`

---
## Project Structure

```plaintext
playwright-automation-learning/
│
├── allure-report/               # Final report generated from allure result
│   ├── data/                    # metadata used to populate the final report
│   ├── export/                  # Aggregated test data in formats compatible with external tools
│   ├── history/                 # Historical runs data
│   ├── plugin/                  # JavaScript and CSS for various Allure plugins 
│   ├── widgets/                 # "Overview" (main) page of the report
|
├── data/                        # CSV format data 
├── fixture/                     # Page fixture to isolated browser pages 
├── locators/                    # Page object's locators
├── pages/                       # Page Object Models
├── playwright-report/           # Native html report
│   ├── data/                    # Test results and metadata used to populate the HTML report
│   ├── trace/                   # Files for failed or retried tests
│
├── tests/                       # Test specifications (.spec.ts)
│
├── test-results/                # Defalt Output of test executions,traces and videos
├── utils/                       # supporting functions
├── .gitignore                   # Git ignore rules
├── package.json                 # Project dependencies & scripts
├── package-lock.json            # Lock file
└── playwright.config.ts         # Playwright configuration

Getting started
---------------

Prerequisites
- Node.js (16+ recommended)
- npm (or yarn)

Install dependencies

```bash
npm install
npx playwright install
```

Run tests

Run the full test suite:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/path/to/file.spec.ts
```

View Playwright HTML report

```bash
npx playwright show-report
```

Allure reporting
---------------
The project is configured to generate Allure results via the `allure-playwright` reporter. The raw results are placed in `allure-results/`.

To generate and view an Allure report you need the Allure commandline tool. Install it globally or use npx:

Install globally (optional):

```bash
npm install -g allure-commandline
```

Generate the report:

```bash
allure generate allure-results --clean -o allure-report
```

Open the report:

```bash
allure open allure-report
```

If you don't want a global install you can use `npx`:

```bash
npx allure-commandline generate allure-results --clean -o allure-report
npx allure-commandline open allure-report
```

Repository Details
------------------
- `tests/` — Playwright test files
- `playwright.config.ts` — Playwright configuration (timeouts, reporters, projects)
- `allure-results/` — test result artifacts (auto-created)
- `allure-report/` — generated Allure HTML report (generated)
- `utils/`, `pages/`, `locators/`, `fixtures/` — helper code and test support

Tips
----
- The config sets `reporter: [['html'], ['allure-playwright']]` so both Playwright HTML and Allure results are produced.
- Adjust `playwright.config.ts` to change browser options, timeouts, or reporters.
- Use `npx playwright test --project=chromium` to target a specific project.

Contributing
------------
This is a personal learning repository. Feel free to open issues or suggest improvements.

License
-------
Add a license if you want this repository to be shared or reused publicly.
