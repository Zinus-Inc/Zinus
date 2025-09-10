# Wonder API (WAPI)

This is our one and only public API that gives us the ability to allow outside vendors and external applications to interface with Zinus (pretty awesome, right!).

## Credentials
Any application that needs to POST/GET private information from the API require a unique JWT token to be generated so we can keep tabs and deny access at anytime.

The token should look like this when it's decoded:

```
{
  "name": "COMPANY/APP NAME",
  "scopes": [
    "REQUIRED_SCOPE"
  ]
}
```
## Endpoints

| Endpoint    | Description | Public |
| ----------- | ----------- | ----------- |
| /      | Default landing page | Yes |
| /api/pickup   | Integrated w/ Shopify webhooks to create and manage state-mandated pickups. | No |
