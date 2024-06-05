# Gleam by Example

Welcome!

_Gleam by Example_ is a collection of code snippets to help you get familiar with [Gleam](https://gleam.run/).

## Overview

There are two parts to this project. Gleam code examples, and a website to show those examples.

The Gleam code examples are in `examples`. The website is created with [SvelteKit](https://kit.svelte.dev).

## Examples

### Overview

`examples/src` contains code examples and explainations. `examples/test` contains tests for the code examples.

### File structure

First three lines are module documentation (`////`) where each line conveys the example's details:

1. Order number
2. Title
3. Description

Module documentation is followed by the code example.

Finally, we have regular comments (`//`) at the end of the file, indicating the shell output for running the code.

## Website

The website reads the Gleam files and creates a website from it. It is statically generated using SvelteKit.

There are two templates, which are converted to HTML using the code examples.

`src/routes/+page.svelte` is the template for the index page.
`src/routes/[slug]/+page.svelte` is the template for the example page.

Colors for the website have been taken from the Gleam's [branding](https://gleam.run/branding) page.
