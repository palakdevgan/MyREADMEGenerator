const inquirer =require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'title',
            message:'What is your Project Title? (Required)',
            validate:projectTitleInput => {
                if (projectTitleInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log('Please enter your Project Title!');
                    return false;
                  }
            }
        },
        {
            type:'input',
            name:'description',
            message:'Please provide a description of the project (Required)',
            validate: projectDescriptionInput =>{
                if(projectDescriptionInput)
                {
                    return true;
                }
                else
                {
                    console.log('Please enter your Project Description!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps required to install your project? (Required)',
            validate: projectInstallationInput =>{
                if(projectInstallationInput)
                {
                    return true;
                }
                else
                {
                    console.log('Please enter the steps of how to install your Project!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'usage',
            message:'Please provide instructions and examples for use (Required)',
            validate: projectUsageInput =>{
                if(projectUsageInput)
                {
                    return true;
                }
                else
                {
                    console.log('Please provide instructions and examples for use!');
                    return false;
                }
            }
        },
        {
            type:'list',
            name:'license',
            message:'Please choose a License for your Project (Required)',
            choices:['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0','The Unlicense']
        },
        {
            type:'input',
            name:'contribution',
            message:'Please provide guidelines on how other Developers can Contribute to your Project (Required)',
            validate: projectContributionInput =>{
                if(projectContributionInput)
                {
                    return true;
                }
                else
                {
                    console.log('Please provide guidelines on how other Developers can Contribute to your Project!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'tests',
            message:'Please provide examples on how to run tests for your Project (if any)'
        },
        {
            type: 'input',
            name: 'github',
            message:'Enter your GitHub Username (Required)',
            validate: githubInput =>{
                if (githubInput) 
                {
                  return true;
                } 
                else 
                {
                  console.log('Please enter your GitHub Username!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message:'Enter your Email Address (Required)',
            validate: emailInput =>{
                if (emailInput) 
                {
                  return true;
                } 
                else 
                {
                  console.log('Please enter your Email Address!');
                  return false;
                }
            }
        }
        

]);
};

promptUser().then(answers => {
return   generateMarkdown(answers);  
})
.then(fileData => {
    fs.writeFile("./dist/README.md", fileData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
});