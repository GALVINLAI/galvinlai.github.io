---
layout: archive
title: " "
permalink: /softwares/
author_profile: true
---


# Solvers for Manifold Optimization

Although [Manopt](https://www.manopt.org/tutorial.html) is already the most popular and widely used Riemannian manifold solver, it is not applicable to some cases involving nonsmooth cost functions and additional constraints. Therefore, we have developed its extension to address these issues.

## Nonsmooth Objective on Riemannian manifold： RieSmooth

**RieSmooth** is a general Riemannian smoothing algorithm used to solve nonsmooth Riemannian optimization problems:

$$
\begin{equation*}
\min _{x \in \mathcal{M}} f(x),
\end{equation*}
$$

where $\mathcal{M}$ is any available manifold in solver [Manopt](https://www.manopt.org/tutorial.html) and $f:\mathcal{M} \to \mathbb{R}$ is **nonsmooth**.

Code & Instruction: [GitHub](https://github.com/GALVINLAI/General-Riemannian-Smoothing-Method)

Reference:\
Zhijian Lai, Akiko Yoshise. Completely positive factorization by a Riemannian smoothing method. *Computational Optimization and Applications*. 83, 933–966 (2022). https://doi.org/10.1007/s10589-022-00417-4

Examples of problems:\
Completely positive matrix factorization problem (CPfact); Finding the sparsest vector in a subspace (FSV); Robust low-rank matrix completion (RMC).

## Additional Constrains on Riemannian manifold： RIPM

**Riemannian Interior Point Methods (RIPM)**  a primal-dual interior point methods solver for nonlinear optimization problems on Riemannian manifolds, which aims to minimize the cost function in the given problem structure with (in)equality constraints:

$$
\begin{equation*}
\begin{array}{cl}
\min _{x \in \mathcal{M}} & f(x) \\
\text { s.t. } & h(x)=0, \text { and } g(x) \leqslant 0,
\end{array}
\end{equation*}
$$

where $\mathcal{M}$ is any available manifold in solver [Manopt](https://www.manopt.org/tutorial.html) and and $f: \mathcal{M} \rightarrow \mathbb{R}, h: \mathcal{M} \rightarrow \mathbb{R}^l$, and $g: \mathcal{M} \rightarrow \mathbb{R}^m$ are smooth.

Code & Instruction: [GitHub](https://github.com/GALVINLAI/RIPM)

Reference:\
Zhijian Lai, Akiko Yoshise. Riemannian Interior Point Methods for Constrained Optimization on Manifolds. *https://arxiv.org/abs/2203.09762*. (Under review)
