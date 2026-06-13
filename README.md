# Zhijian Lai Personal Website

This repository now uses [Quarto](https://quarto.org/) for the public website.

## Local preview

```bash
~/.local/bin/quarto preview
```

If Quarto is on your `PATH`, use:

```bash
quarto preview
```

## Render

```bash
~/.local/bin/quarto render
```

The rendered site is written to `_site/`.

## Deployment

The GitHub Actions workflow in `.github/workflows/quarto-publish.yml` renders the Quarto site and publishes the `_site/` artifact to GitHub Pages.
