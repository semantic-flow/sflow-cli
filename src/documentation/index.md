---
title: "sflow-cli"
created: "2024-11-11"
updated: "2024-11-11"
---

sflow-cli is a command-line tool designed to manage Semantic Flow data repositories (SFDataRepos) and execute Semantic Flow data publishing workflows. It helps users:
  - initialize new SFDataRepos
  - automate versioning with per-datafile dataset series 
  - mint IRIs and generate reference pages
  - create alternate distributions 
  - verify consistency between the data, the site, and the site-generator's metadata

sflow-cli uses Lume as the static site generator (SSG) to create HTML documentation for datasets, NamedIndividuals, and namespace metadata. The Lume SSG setup is embedded within the project to streamline workflows related to documentation-driven development.


