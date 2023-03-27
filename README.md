# {{ config.project_title }}

To use this template, configure `.template.config.json` file

```json
{   
    "config" : {
        "project_title": "New Lib",
        "package_name": "new-lib",
        "github_path": "myorg/new-lib",
        "github_org": "myorg"
    }
}
```

Install Mustache globally 

```sh
npm i -g mustache 
```

And run 

```sh
./generate_template.sh
```

See [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Install

```sh
npm i
```

## Run tests

```sh
npm run test
```

## Compile documentation

```sh
npm run generate-docs
```
