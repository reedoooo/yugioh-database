# Open-Source Software Contribution

## Overview

Working on an open source project has been an incredible learning experience. My partner and I decided to contribute to an open-source YuGiOh deck builder project. The project had a comprehensive code base but lacked in testing. We noticed that the test coverage was not extensive and there were several functionalities that were not tested at all. So we decided to enhance the test coverage of the project by writing tests.

## Setup

After a thorough discussion, we agreed to fork the project, cloned it locally, and added each other as collaborators. We then created a new branch, 'testing-enhancements', where we started working on writing our tests.

## Features

We started by performing a root cause analysis (RCA) on the existing project. We used the 5-whys method to understand why there was a lack of testing in the project. Our root cause analysis revealed that the main reason was a lack of knowledge and appreciation of test-driven development.

After understanding the cause, we came up with a solution to the issue. We identified three areas in the project where test coverage was poor: 

1. Testing the deck builder logic.
2. Verifying card interactions.
3. Ensuring user input validations.

For each of these areas, we wrote meaningful tests, ensuring that the functionalities behaved as expected. In the process, we also made some minor code adjustments for better testability and readability.

While doing this, we also realized that the project lacked proper documentation for contribution, especially in the testing area. So, we decided to enhance the documentation too, writing a comprehensive guide on how to write and run tests for the project.

## Implementation and PR

After implementing the tests and updating the documentation, we tested the entire project to make sure everything was working fine. After validating the changes, we submitted a pull request to the upstream repository. 

You can find the project here: [YuGiOh Database Project](https://github.com/reedoooo/yugioh-database)

You can find the pull request here: [Link to Pull Request](https://github.com/reedoooo/yugioh-database/pull/1)

The RCA document is available here: [Link to RCA Document](https://github.com/reedoooo/yugioh-database/README2.md)

## Reflection

The time we spent on this project was about 12 hours, spread across three days. The initial challenge was understanding the project code base. Since it's a well-established project, there was a learning curve to fully comprehend the project structure and logic.

But, as we dived deeper into the project, we became more familiar with it. Writing tests for the project provided us a deeper understanding of the code and helped us ensure that the functionalities were working as expected.

Overall, it was a challenging but rewarding experience, and we're glad to have made a meaningful contribution to the open-source community. We're looking forward to contributing to more open source projects in the future.
