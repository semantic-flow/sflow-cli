---
title: "Command Reference"
created: "2024-11-11"
updated: "2024-11-11"
---

## repo Commands

### repo init

- initializes a SFDataRepo for a repository directory that already exists in the local filesystem
  - uses current directory if nothing else specified
  - warns if the directory doesn't appear to be a Git repo
  - creates:
    - minimal sflow-config.jsonld
    - default template
    - recommended directory structure:
    - populates touchstone and catalog dataset series for the namespace
  - safe to use on existing SFDataRepos
- allows the --site-root option to specify a URL for the repo namespace, i.e., where the site will live
  - if not provided, `sflow` will attempt to infer it from git metadata
- if successfull, suggests repo evolve, repo serve and repo publish

#### Examples

### repo new



### repo verify

### repo evolve

### repo scan

### repo serve

### repo publish

### repo status

## resource Commands

### entity new

### entity delete

### entity alias

### entity verify

### entity evolve

### entity publish

### entity status

## template Commands

### template create

### template list

### template assign

