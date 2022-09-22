# BizzApps Summit 22 - Madrid

Bizz Summit ES was born from organizations of different Microsoft community events and with the desire to join forces, centralize the different Dynamics and Power Platform events in one and, of course, provide a different experience in the exchange of knowledge. This year we are excited to return to the in-person event format in a new venue to create the most inclusive and biggest event ever.

**Website**: [https://bizzsummit.es/en/](https://bizzsummit.es/en/)

# Table of Contents

- [BizzApps Summit 22 - Madrid](#bizzapps-summit-22---madrid)
- [Table of Contents](#table-of-contents)
- [Presentation](#presentation)
  - [Artefacts](#artefacts)

# Presentation

**Title**: Let's get started with Customer Insights through API

**Description**: When looking for a unified view of our customers, MS Dynamics 365 Customer Insights can come quickly into the picture as being the official and rapidly evolving CDP platform for the stack. Join me in this introductionaly hands-on session to learn how to communicate with it through its API to facilitate the creation of automated and custom solutions

## Artefacts

| Name | Type | Content | Notes |
|------|------|---------|-------|
| Snapshots of examples | PNG files | In the `/img` folder, there are snapshots of the built prototypes | |
| Postman AUTH helper script | JS snippet | Auth snippet to use with the Customer Insights OpenAPI so that both API Key and Azure token can be used parallel for whole Postman collection as authentication | Add snippet to Pre-request script on Postman Collection header and update values |
| PowerPlatform prototypes | Dataverse solution | It is a decomposed solution file (both managed and unmanaged), including the following elements: | To be able to use and import, first you will need to recompose it with latest version of Solution Packager. [LINK](https://learn.microsoft.com/en-us/power-platform/alm/solution-packager-tool) |
|      | PowerAutomate flow | "Hello World" flow, requesting list and details of Customer Insights instances within AAD tenant | To be able to use, assign values to the environment variables |
|      | Canvas app | An app enabling to list all role based access within a Customer Insights instance and adding or modifying access to any Azure AD principal | To be able to use, assign values to the environment variables |
|      | Virtual Agent chat bot | A bot enabling conversation to request information, whether there were any errors within our Customer Insights instance lately. It will respond either with yes or no depending on the results | To be able to use, assign values to the environment variables |
| ADO pipeline example | YAML script | Downloading Segment confirguration from targeted Customer Insights instance and storing it within source control | To be able to use, amend the YML script to use proper connection details or set as build inputs |
