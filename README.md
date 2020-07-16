# VALIDAWAREE(font-end) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/abxsantos/validawaree-frontend.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/abxsantos/validawaree-frontend/context:javascript)

[VALIDAWAREE](https://fast-badlands-43198.herokuapp.com/) is an open-source plataform to validate experimental analytical data according to the latest ANVISA legislation, which is based on the ICH denominations for drug registering.

This is the repository of VALIDAWAREE front-end. You can take a look at the server side repository [here](https://github.com/abxsantos/).

## Features
- ### Dosing
- Linearity
 - [x] Follow the site instructions and get the linearity analysis of your experimental data.
 - [x] Plot your data and view the regression trendline. 
 - [x] Plot the residues for better analysis.
 - [x] View statistics of normalty of data and correlation.
 - [x] Check the results of ANOVA analysis of the regression model of your data.
- ### Precision
 - Repeatability
 - [ ] Organize your data and check the RSD.
 - Intermediate precision
 - [ ] Organize your data for the 2 factors analysis.
 - [ ] ANOVA analysis with 2 factors.
- ### Accuracy
 - [ ] Check your method accuracy using the Linearity data
- ### Robustness
 - [ ] Table for organizing the studied analytical parameters.
 - [ ] Table for the Youden experiment results.
 - [ ] Use the data for Lenth's plot.
- ### User utilities
- [ ] Annotation area for better documentation of your method.
- [ ] Exporting a report as CSV and PDF.
- [ ] Importing data as CSV.



## Setup

Clone and install:

```
git clone 
cd validawaree-frontend
npm install
```

To run the local server: 
```
npm start
```

If you have the backend cloned as well, you can use: 
```
npm run-scripts start-api
```

To test: 
```
npm test
```