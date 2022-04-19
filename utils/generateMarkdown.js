// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
if(!license){
  return '';
}

if(license === "GNU AGPLv3")
return
`[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;

if(license === "GNU GPLv3")
return 
`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

if(license === "GNU LGPLv3")
return
`[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;

if(license === "Mozilla Public License 2.0")
return
`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

if(license === "Apache License 2.0")
return
`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

if(license === "MIT License")
return
`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

if(license === "Boost Software License 1.0")
return
`[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

if(license === "The Unlicense")
return
`[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if(!license){
    return '';
  }

  
if(license === "GNU AGPLv3")
return
`Licensed under the [GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0.txt) license.`;

if(license === "GNU GPLv3")
return 
`Licensed under the [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0-standalone.html) license.`;

if(license === "GNU LGPLv3")
return
`Licensed under the [GNU LGPLv3](https://www.gnu.org/licenses/lgpl-3.0-standalone.html) license.`;

if(license === "Mozilla Public License 2.0")
return
`Licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/) license.`;

if(license === "Apache License 2.0")
return
`Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt) license.`;

if(license === "MIT License")
return
`Licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md) license.`;

if(license === "Boost Software License 1.0")
return
`Licensed under the [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt) license.`;

if(license === "The Unlicense")
return
`Licensed under the [The Unlicense](https://unlicense.org/) license.`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## ${data.license}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
