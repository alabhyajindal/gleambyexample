![Gleam by Example](/website/static/gleambyexample.png)

# Gleam by Example

_Gleam by Example_ is a collection of code snippets to help you get familiar with [Gleam](https://gleam.run/).

## Overview

This project contains code examples, and a website to show those examples. The code examples are in `examples`. The website is in `website`.

## Examples

`examples/src` contains code examples and explanations. `examples/test` contains tests for the code examples.

### File structure

First three lines are module documentation (`////`) where each line conveys the example's details:

1. Example number
2. Title
3. Description

Module documentation is followed by the code example. Finally, we have regular comments (`//`) at the end of the file, indicating the shell output for running the code.

## Website

The website reads the Gleam files and creates a website. It is statically generated with [SvelteKit](https://kit.svelte.dev).

There are two templates, which are converted to HTML using the code examples:

- `website/src/routes/+page.svelte` for the index page
- `website/src/routes/[slug]/+page.svelte` for the example page

Syntax highlighting with [Shiki](https://shiki.matsu.io).
Colors are based on Gleam's [branding](https://gleam.run/branding).
Lucy's image is a modification of the original [Lucy Debug Fail](https://gleam.run/images/lucy/lucydebugfail.svg) image.
