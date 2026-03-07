Experiment:

I moved the API key middleware after the controller.

Original:
POST /tasks → apiKeyAuth → validateTask → controller

Changed:
POST /tasks → controller → apiKeyAuth

What broke:

The controller executed even when the API key was missing.

Why it broke:

Middleware runs in the order defined in Express. Since the controller came first, it executed before the authorization check.

Error:

No authorization protection occurred.

Fix:

Move apiKeyAuth before the controller again.