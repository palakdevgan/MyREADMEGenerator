const renderLicenseBadge = license => {
if(!license){
  return '';
}

if(license === "GNU AGPLv3")
return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0.txt)`;

if(license === "GNU GPLv3")
return  `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0-standalone.html)`;

if(license === "GNU LGPLv3")
return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0-standalone.html)`;

if(license === "Mozilla Public License 2.0")
return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)`;

if(license === "Apache License 2.0")
return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.txt)`;

if(license === "MIT License")
return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://www.mit.edu/~amini/LICENSE.md)`;

if(license === "Boost Software License 1.0")
return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

if(license === "The Unlicense")
return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
};


const renderLicenseLink = license => {
  if(!license){
    return '';
  }

  
if(license === "GNU AGPLv3")
return `Licensed under the [GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0.txt) license.`;

if(license === "GNU GPLv3")
return `Licensed under the [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0-standalone.html) license.`;

if(license === "GNU LGPLv3")
return `Licensed under the [GNU LGPLv3](https://www.gnu.org/licenses/lgpl-3.0-standalone.html) license.`;

if(license === "Mozilla Public License 2.0")
return `Licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/) license.`;

if(license === "Apache License 2.0")
return `Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt) license.`;

if(license === "MIT License")
return `Licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md) license.`;

if(license === "Boost Software License 1.0")
return `Licensed under the [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt) license.`;

if(license === "The Unlicense")
return `Licensed under the [The Unlicense](https://unlicense.org/) license.`;
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Contributing](#how-to-contribute)
[License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseLink(data.license)}
Copyright &copy; 2022, Palak Devgan

## How to Contribute

${data.contribution}

## Tests

${data.tests}

## Questions

Please find my GitHub Profile [here](https://github.com/${data.github}).
For additional questions please [email](mailto:${data.email}) me.
`;
}

module.exports = generateMarkdown;
