# Monitor API with Github Actions

### Description

Periodically controls services or websites with github actions. Send emails if one of the service is not OK.

### Setup

- [Generate Application Key from gmail.](https://support.google.com/mail/answer/185833?hl=en)
- [Add email address, mail key and service list to github secrets.](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
- Service list example is; `https://domain.com,http://domain1.net,https://domain2.en` . Service list is a string, service urls seperated with comma ",".
- Actions will run on every hour. But because of timely schedule, it may run sometime later depends on github server workload.

Feel free to contribute or fork.
If you need any feature, open an issue
